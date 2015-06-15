<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\TBS\Domain\DomainCategoryRepository;
use App\TBS\Domain\DomainRepository;
use App\TBS\Guzzle\GuzzleWrapper;
use Illuminate\Http\Request;

class DomainController extends Controller
{
    /**
     * @var DomainRepository
     */
    protected $domainRepository;

    /**
     * @var DomainCategoryRepository
     */
    protected $categoryRepository;

    /**
     * @var GuzzleWrapper
     */
    protected $guzzleWrapper;

    /**
     * Constructor
     * @param DomainRepository $domainRepository
     * @param DomainCategoryRepository $categoryRepository
     * @param GuzzleWrapper $guzzleWrapper
     */
    public function __construct(
        DomainRepository $domainRepository,
        DomainCategoryRepository $categoryRepository,
        GuzzleWrapper $guzzleWrapper
    ) {
        $this->domainRepository = $domainRepository;
        $this->categoryRepository = $categoryRepository;
        $this->guzzleWrapper = $guzzleWrapper;
    }

    /**
     * Get home view
     * @return \Illuminate\View\View
     */
    public function home()
    {
        return view('partials.home');
    }

    /**
     * Return all domains
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function getAll()
    {
        return response()->json($this->domainRepository->all());
    }

    /**
     * Get domain info fetched from requests and db
     * @param Request $request
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function getDomainInfo(Request $request)
    {
        $domainId = $request->all()[0];
        $domain = $this->domainRepository->find($domainId);

        if ($domain->expiration) {
            $domain->expiration = strtotime($domain->expiration);
        }

        return response()->json(
            [
                'domainRequest' => $this->guzzleWrapper->getDomainInfo($domain->url),
                'domainInfo' => $domain
            ]
        );
    }

    /**
     * Get info of a domain
     * @param Request $request
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function getDomainStatus(Request $request)
    {
        $url = $request->all()[0];
        return response()->json($this->guzzleWrapper->getDomainStatus($url));
    }

    /**
     * Show single domain view with domain id (for ng)
     * @param int $id
     *
     * @return \Illuminate\View\View
     */
    public function show($id)
    {
        return view('partials.domain')->with('domainId', $id);
    }

    /**
     * Save a new domain
     * @param Request $request
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required',
            'url' => 'required|url'
        ]);

        $input = $request->all();
        $domain = $this->domainRepository->create($input);

        $category = '';

        // if a new category has been assigned
        if ($request->input('new_category')) {
            $category = $this->categoryRepository->create(['name' => $request->input('new_category')]);
        } elseif ($request->input('category_id')) {
            $category = $this->categoryRepository->find($request->input('category_id'));
        }

        if ($category) {
            $domain->category()->associate($category);
            $domain->save();
        }

        return redirect()->route('pdp.home')->with('success', 'Domain added');
    }

    /**
     * Update existing domain
     * @param Request $request
     * @param int $id
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function edit(Request $request, $id)
    {
        $this->validate($request, [
            'title' => 'required',
            'url' => 'required|url',
            'category_id' => ''
        ]);

        $input = $request->all();

        if (!$this->domainRepository->edit($input, $id)) {
            return redirect()->route('pdp.home')->with('error', 'Error trying to update domain.');
        }

        return redirect()->route('pdp.home')->with('success', 'Domain updated');
    }

    /**
     * Delete existing domain
     * @param int $id
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy($id)
    {
        $this->domainRepository->destroy($id);
        return redirect()->route('pdp.home')->with('success', 'Domain deleted');
    }

    /**
     * Edit notes for domain
     * @param Request $request
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function editNotes(Request $request)
    {
        $domainId = $request->all()[0];
        $notes = $request->all()[1];

        if (!$notes) {
            $notes = '';
        }

        $domain = $this->domainRepository->find($domainId);
        if (!$domain) {
            return response()->json(['error' => 'Domain not found.']);
        }

        $domain->notes = $notes;
        $domain->save();

        return response()->json(['success' => 'Domain notes updated']);
    }

    /**
     * Edit exipiration for domain
     * @param Request $request
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function editExpiration(Request $request)
    {
        $domainId = $request->all()[0];
        $expiration = $request->all()[1];

        $domain = $this->domainRepository->find($domainId);
        if (!$domain) {
            return response()->json(['error' => 'Domain not found.']);
        }

        $domain->expiration = $expiration;
        $domain->save();

        return response()->json([
            'success' => 'Domain expiration updated',
            'expiration' => strtotime($domain->expiration)
        ]);
    }
}

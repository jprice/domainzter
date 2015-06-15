<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\TBS\Domain\DomainCategoryRepository;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * @var DomainCategoryRepository
     */
    protected $categoryRepository;

    /**
     * Constructor
     * @param DomainCategoryRepository $categoryRepository
     */
    public function __construct(DomainCategoryRepository $categoryRepository)
    {
        $this->categoryRepository = $categoryRepository;
    }

    /**
     * Get home view
     * @return \Illuminate\View\View
     */
    public function home()
    {
        return view('partials.categories');
    }

    /**
     * Get all categories
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function getAll()
    {
        return response()->json($this->categoryRepository->all());
    }

    /**
     * Save a new category
     * @param Request $request
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required'
        ]);

        $input = $request->all();
        $this->categoryRepository->create($input);

        return redirect()->route('pdp.categories')->with('success', 'Category added');
    }

    /**
     * Delete existing category
     * @param $id
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy($id)
    {
        $this->categoryRepository->destroy($id);
        return redirect()->route('pdp.categories')->with('success', 'Category deleted');
    }
}

<?php namespace App\TBS\Domain;

use App\TBS\EloquentRepository;
use App\TBS\Domain\Domain;

class DomainRepository extends EloquentRepository
{
    /**
     * @var Domain
     */
    protected $model;

    /**
     * Constructor
     * @param Domain $model
     */
    public function __construct(Domain $model)
    {
        $this->model = $model;
    }

    /**
     * Create a new domain
     * @param array $input
     *
     * @return Domain
     */
    public function create($input)
    {
        $domain = $this->model->create($input);
        $domain->save();
        return $domain;
    }

    /**
     * Edit a domain
     * @param array $input
     * @param int $id
     *
     * @return bool|Domain
     */
    public function edit($input, $id)
    {
        $domain = $this->model->find($id);

        if (!$domain) {
            return false;
        }

        $domain->update($input);
        $domain->save();

        return $domain;
    }

    /**
     * Delete model by id
     * @param int $id
     *
     * @return Domain
     */
    public function destroy($id)
    {
        $domain = $this->model->find($id);

        if ($domain) {
            $domain->delete();
        }

        return $domain;
    }
}

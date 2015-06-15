<?php namespace App\TBS\Domain;

use App\TBS\EloquentRepository;
use App\TBS\Domain\DomainCategory;

class DomainCategoryRepository extends EloquentRepository
{
    /**
     * @var DomainCategory
     */
    protected $model;

    /**
     * Constructor
     * @param DomainCategory $model
     */
    public function __construct(DomainCategory $model)
    {
        $this->model = $model;
    }

    /**
     * Create a new category
     * @param array $input
     *
     * @return DomainCategory
     */
    public function create($input)
    {
        $domainCategory = $this->model->create($input);
        $domainCategory->save();
        return $domainCategory;
    }

    /**
     * Edit a category
     * @param array $input
     * @param int $id
     *
     * @return bool|DomainCategory
     */
    public function edit($input, $id)
    {
        $domainCategory = $this->model->find($id);

        if (!$domainCategory) {
            return false;
        }

        $domainCategory->update($input);
        $domainCategory->save();

        return $domainCategory;
    }

    /**
     * Delete model by id
     * @param int $id
     *
     * @return DomainCategory
     */
    public function destroy($id)
    {
        $domainCategory = $this->model->find($id);

        if ($domainCategory) {
            $domainCategory->delete();
        }

        return $domainCategory;
    }
}

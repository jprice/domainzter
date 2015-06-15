<?php
namespace App\TBS;

class EloquentRepository implements RepositoryInterface
{
    /**
     * Get all models
     * @return mixed
     */
    public function all()
    {
        return $this->model->all();
    }

    /**
     * Find model by id
     *
     * @param int $id
     * @return mixed
     */
    public function find($id)
    {
        return $this->model->find($id);
    }

    /**
     * Delete model by id
     * @param int $id
     * @return mixed
     */
    public function deleteById($id)
    {
        $model = $this->find($id);
        return $model->delete();
    }
}

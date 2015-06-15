<?php
namespace App\TBS;

interface RepositoryInterface
{
    /**
     * Get all models
     *
     * @return mixed
     */
    public function all();

    /**
     * Find model by id
     * @param int $id
     *
     * @return mixed
     */
    public function find($id);

    /**
     * Delete model by id
     * @param int $id
     *
     * @return mixed
     */
    public function deleteById($id);
}

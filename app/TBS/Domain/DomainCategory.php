<?php namespace App\TBS\Domain;

use Illuminate\Database\Eloquent\Model;

class DomainCategory extends Model
{
    /**
     * Database table
     * @var string
     */
    protected $table = 'domains_categories';

    /**
     * Fillables
     * @var array
     */
    protected $fillable = ['name'];

    /**
     * Disable timestamps
     * @var bool
     */
    public $timestamps = false;

    /**
     * Eloquent relationship
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function domains()
    {
        return $this->hasMany('App\TBS\Domain\Domain');
    }
}
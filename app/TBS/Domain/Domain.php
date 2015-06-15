<?php namespace App\TBS\Domain;

use Illuminate\Database\Eloquent\Model;

class Domain extends Model
{
    /**
     * Database table
     * @var string
     */
    protected $table = 'domains';

    /**
     * Fillables
     * @var array
     */
    protected $fillable = ['id', 'title', 'url', 'category_id', 'notes', 'expiration'];

    /**
     * Eloquent relationship
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category()
    {
        return $this->belongsTo('App\TBS\Domain\DomainCategory', 'category_id');
    }
}
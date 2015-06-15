<?php

use App\TBS\Domain\Domain;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class DomainSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Clear domain table
        DB::table('domains')->delete();

        $domains = [
            'Domainzter' => 'http://domainzter.com',
        ];

        foreach ($domains as $domainTitle => $domainUrl) {
            Domain::create(
                [
                    'title' => $domainTitle,
                    'url' => $domainUrl
                ]
            );
        }
    }
}

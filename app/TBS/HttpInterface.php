<?php namespace App\TBS;

interface HttpInterface
{
    /**
     * Get status for URL
     * @param string $url
     *
     * @return bool
     */
    public function getDomainStatus($url);

    /**
     * Get domain info for URL
     * (info often includes headers, body, status code)
     * @param string $url
     *
     * @return array
     */
    public function getDomainInfo($url);
}

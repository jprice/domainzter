<?php namespace App\TBS\Guzzle;

use App\TBS\HttpInterface;
use GuzzleHttp\Client as GuzzleClient;

class GuzzleWrapper implements HttpInterface
{
    /**
     * Guzzle client config
     * @var array
     */
    protected $config = [
        // Stop guzzle client from bouncing around too much
        'allow_redirects' => [
            'max' => 2
        ]
    ];

    /**
     * Get status for url
     * Either uses cache or performs a new request with guzzle
     * @param string $url
     *
     * @return bool
     */
    public function getDomainStatus($url)
    {
        if (\Cache::has('_statuscode_' . $url)) {
            return $this->getStatusFromCache($url);
        }

        try {
            $client = new GuzzleClient();
            $res = $client->get($url, $this->config);

            $this->saveToCache($url, $res);

            if ($res->getStatusCode() == 200) {
                return true;
            }

        } catch (\Exception $e) {
            \Log::info('Error connecting to ' . $url . ' - domain marked as not active.');
        }

        return false;
    }

    /**
     * Fetch info about domain -> statuscode, headers and body
     * @param $url
     *
     * @return array
     */
    public function getDomainInfo($url)
    {
        if (\Cache::has('_statuscode_' . $url)) {
            return $this->getDomainInfoFromCache($url);
        }

        $domainInfo = [];

        try {
            $client = new GuzzleClient();
            $res = $client->get($url, $this->config);

            $this->saveToCache($url, $res);

            $domainInfo['statuscode'] = $res->getStatusCode();
            $domainInfo['headers'] = $res->getHeaders();
            $domainInfo['body'] = $this->trimBody($res->getBody());

        } catch (\Exception $e) {
            \Log::info('Error connecting to ' . $url . ' - Info not retrieved.');
        }

        return $domainInfo;
    }

    /**
     * Trim body removes all newlines and linebreaks and adds space
     * @param $body
     *
     * @return string
     */
    private function trimBody($body)
    {
        return trim(preg_replace('/\s+/', ' ', (string)$body));
    }

    /**
     * Get all info related to domain from previous lookup
     * @param string $url
     *
     * @return array
     */
    private function getDomainInfoFromCache($url)
    {
        $domainInfo = [];

        $domainInfo['statuscode'] = \Cache::get('_statuscode_' . $url);
        $domainInfo['headers'] = \Cache::get('_headers_' . $url);
        $domainInfo['body'] = \Cache::get('_body_' . $url);

        return $domainInfo;
    }

    /**
     * Check status code for domain in cache
     * @param string $url
     *
     * @return bool
     */
    private function getStatusFromCache($url)
    {
        if (\Cache::get('_statuscode_' . $url) == 200) {
            return true;
        }

        return false;
    }

    /**
     * Save domain info in cache with an expiration in minutes
     * @param string $url
     * @param $response
     */
    private function saveToCache($url, $response)
    {
        $cacheExpiration = env('CACHE_EXPIRATION', 60);

        \Cache::put('_statuscode_' . $url, $response->getStatusCode(), $cacheExpiration);
        \Cache::put('_headers_' . $url, $response->getHeaders(), $cacheExpiration);
        \Cache::put('_body_' . $url, $this->trimBody($response->getBody()), $cacheExpiration);
    }
}

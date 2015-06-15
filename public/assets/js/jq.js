/**
 * Check if URL has http:// or https:// as prefix,
 * if not -> add http://
 */
function checkUrlPrefix(id, value) {
    if (!value.match(/^[a-zA-Z]+:\/\//)) {
        $('#' + id).val('http://' + value);
    }
}
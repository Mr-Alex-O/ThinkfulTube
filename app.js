var YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
    var query = {
        part: 'snippet',
        key: 'AIzaSyA9vUPfICjvrQCHNokCXBopCRGIXtT4NpI',
        q: searchTerm,
        type: 'video'
    }
    $.getJSON(YOUTUBE_BASE_URL, query, callback);
}


function displayYoutubeSearchData(data) {
    var resultElement = '';
    if (data.items) {
        data.items.forEach(function(item) {
            resultElement += '<p><a href="https://www.youtube.com/watch?v=' + item.id.videoId + '"><img src="' + item.snippet.thumbnails.medium.url + '"></a><br>  ' + item.snippet.title + '</p>';

        });
    } else {
        resultElement += '<p>No results</p>';
    }

    $('.js-search-results').html(resultElement);
}

function watchSubmit() {
    $('.js-search-form').submit(function(e) {
        e.preventDefault();
        var query = $(this).find('.js-query').val();
        getDataFromApi(query, displayYoutubeSearchData);
    });
}

$(function() { watchSubmit(); });

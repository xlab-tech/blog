var lunrIndex,
    $results,
    documents;

function initLunr() {
  // retrieve the index file
  $.getJSON("../../js/lunr.json")
    .done(function(index) {
        documents = index;
        lunrIndex = lunr(function(){
          this.ref('uri')
          this.field('content')

          this.field("title", {
              boost: 10
          });

          this.field("tags", {
              boost: 5
          });

          documents.forEach(function(doc) {
            try {
              this.add(doc)
            } catch (e) {}
          }, this)
        })
    })
    .fail(function(jqxhr, textStatus, error) {
        var err = textStatus + ", " + error;
        console.error("Error getting Lunr index file:", err);
    });
}

function search(query) {
  return lunrIndex.search(query).map(function(result) {
    return documents.filter(function(page) {
      try {
        return page.uri === result.ref;
      } catch (e) {
        console.log('whoops')
      }
    })[0];
  });
}

function renderResults(results) {
  if (!results.length) {
    return;
  }

  // show first ten results
  results.slice(0, 10).forEach(function(result) {
    var $result = $("<li>");

    $result.append($("<a>", {
      href: result.href,
      text: "» " + result.title
    }));

    $results.append($result);
  });
}

function initUI() {
  $results = $("#results");

  $("#search").keyup(function(){
    // empty previous results
    $results.empty();

    // trigger search when at least two chars provided.
    var query = $(this).val();
    if (query.length < 2) {
      return;
    }

    var results = search(query);
    renderResults(results);
  });
}

initLunr();

$(document).ready(function(){
  initUI();
});
lunrIndex = lunr(function(){
  this.ref('href')
  this.field('content')

  this.field("title", {
      boost: 10
  });

  this.field("tags", {
      boost: 5
  });

  documents.forEach(function(doc) {
    try {
      this.add(doc)
    } catch (e) {}
  }, this)
})
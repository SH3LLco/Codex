document$.subscribe(function() {
    console.log("Re-initializing third-party plugins...");
    
    var tables = document.querySelectorAll("article table:not([class])")
    tables.forEach(function(table) {
      new Tablesort(table)
    })
  });
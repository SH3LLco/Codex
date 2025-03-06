// Subscribe to Material for MkDocs' document$ observable
document$.subscribe(function() {
    console.log("Re-initializing third-party plugins...");
    
    var tables = document.querySelectorAll("article table:not([class])")
    tables.forEach(function(table) {
      new Tablesort(table)
    })
    
    if (window.mermaid) {
      mermaid.init(undefined, document.querySelectorAll(".mermaid"));
    }
  
    if (window.panzoom) {
      document.querySelectorAll(".panzoom-container").forEach((el) => {
        panzoom(el);
      });
    }
  });
  
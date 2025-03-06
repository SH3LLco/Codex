document$.subscribe(function() {
    console.log("Re-initializing third-party plugins...");
    
    var tables = document.querySelectorAll("article table:not([class])")
    tables.forEach(function(table) {
      new Tablesort(table)
    })
    
    if (window.mermaid) {
        console.log("Mermaid detected, re-initializing...");
        mermaid.init(undefined, document.querySelectorAll(".mermaid"));
      }
    
      if (window.initPanZoom) {
        console.log("PanZoom detected, re-initializing...");
        window.initPanZoom(); // Correct way to reinitialize PanZoom (as per mkdocs-panzoom docs)
      } else {
        console.log("PanZoom function not found, check if mkdocs-panzoom is loaded.");
      }
  });
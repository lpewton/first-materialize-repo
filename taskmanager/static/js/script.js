document.addEventListener('DOMContentLoaded', function() {
    var sidenav = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(sidenav);
  });

  /* Date picker*/
  let datepicker = document.querySelectorAll(".datepicker");
  M.Datepicker.init(datepicker, {
      format: "dd mmmm, yyyy",
      i18n: {done: "Select"}
  });

  /** Selects */
  document.addEventListener('DOMContentLoaded', function() {
    var selects = document.querySelectorAll('select');
    var instances = M.FormSelect.init(selects);
  });


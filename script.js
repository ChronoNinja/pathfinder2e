document.addEventListener('DOMContentLoaded', function() {

	console.log("Loaded script file");

  // Use buttons to toggle between views
  document.querySelector('#s_chargen_ancestry').addEventListener('change', () => console.log('changed ancestry'));
  //document.querySelector('#sent').addEventListener('click', () => load_mailbox('sent'));
  //document.querySelector('#archived').addEventListener('click', () => load_mailbox('archive'));
  //document.querySelector('#compose').addEventListener('click', compose_email);

  // By default, load the inbox
  //load_mailbox('inbox');
})
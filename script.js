document.addEventListener('DOMContentLoaded', function() {

	console.log("Loaded script file");

  // Use buttons to toggle between views
  document.querySelector('#s_chargen_ancestry').addEventListener('change', () => changed_ancestry());
  //document.querySelector('#sent').addEventListener('click', () => load_mailbox('sent'));
  //document.querySelector('#archived').addEventListener('click', () => load_mailbox('archive'));
  //document.querySelector('#compose').addEventListener('click', compose_email);

  // By default, load the inbox
  //load_mailbox('inbox');
})

function changed_ancestry() {
	var selection = document.querySelector('#s_chargen_ancestry option:checked').value;
	if (selection === 'Dwarf') {
		document.querySelector('#s_str_value').innerHTML = 10;
		document.querySelector('#s_dex_value').innerHTML = 10;
		document.querySelector('#s_con_value').innerHTML = 10 + 2;
		document.querySelector('#s_int_value').innerHTML = 10;
		document.querySelector('#s_wis_value').innerHTML = 10 + 2;
		document.querySelector('#s_cha_value').innerHTML = 10 - 2;
	}
}
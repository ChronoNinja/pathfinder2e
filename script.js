document.addEventListener('DOMContentLoaded', function() {

	console.log("Loaded script file");

  // Use buttons to toggle between views
  document.querySelector('#s_chargen_ancestry').addEventListener('change', () => ancestry_changed());
  //document.querySelector('#sent').addEventListener('click', () => load_mailbox('sent'));
  //document.querySelector('#archived').addEventListener('click', () => load_mailbox('archive'));
  //document.querySelector('#compose').addEventListener('click', compose_email);

  // By default, load the inbox
  //load_mailbox('inbox');
})

function ancestry_changed() {
	var ancestry_selection = document.querySelector('#s_chargen_ancestry option:checked').value;
	var heritage_select_element = document.getElementById('s_chargen_heritage');
	heritage_select_element.innerHTML = "";
	if (ancestry_selection === 'Dwarf') {
		var option_tag = document.createElement("option");
		option_tag.value = 0; option_tag.innerHTML = 'Ancient-Blooded Dwarf'; heritage_select_element.appendChild(option_tag);
		var option_tag = document.createElement("option");
		option_tag.value = 1; option_tag.innerHTML = 'Death Warden Dwarf'; heritage_select_element.appendChild(option_tag);
		var option_tag = document.createElement("option");
		option_tag.value = 2; option_tag.innerHTML = 'Forge Dwarf'; heritage_select_element.appendChild(option_tag);
		var option_tag = document.createElement("option");
		option_tag.value = 3; option_tag.innerHTML = 'Rock Dwarf'; heritage_select_element.appendChild(option_tag);
		var option_tag = document.createElement("option");
		option_tag.value = 4; option_tag.innerHTML = 'Strong-Blooded Dwarf'; heritage_select_element.appendChild(option_tag);
	}
	if (ancestry_selection === 'Elf') {
		var option_tag = document.createElement("option");
		option_tag.value = 0; option_tag.innerHTML = 'Arctic Elf'; heritage_select_element.appendChild(option_tag);
		var option_tag = document.createElement("option");
		option_tag.value = 1; option_tag.innerHTML = 'Cavern Elf'; heritage_select_element.appendChild(option_tag);
		var option_tag = document.createElement("option");
		option_tag.value = 2; option_tag.innerHTML = 'Seer Elf'; heritage_select_element.appendChild(option_tag);
		var option_tag = document.createElement("option");
		option_tag.value = 3; option_tag.innerHTML = 'Whisper Elf'; heritage_select_element.appendChild(option_tag);
		var option_tag = document.createElement("option");
		option_tag.value = 4; option_tag.innerHTML = 'Woodland Elf'; heritage_select_element.appendChild(option_tag);
	}
	if (ancestry_selection === 'Gnome') {
		var option_tag = document.createElement("option");
		option_tag.value = 0; option_tag.innerHTML = 'Chameleon Gnome'; heritage_select_element.appendChild(option_tag);
		var option_tag = document.createElement("option");
		option_tag.value = 1; option_tag.innerHTML = 'Fey-Touched Gnome'; heritage_select_element.appendChild(option_tag);
		var option_tag = document.createElement("option");
		option_tag.value = 2; option_tag.innerHTML = 'Sensate Gnome'; heritage_select_element.appendChild(option_tag);
		var option_tag = document.createElement("option");
		option_tag.value = 3; option_tag.innerHTML = 'Umbral Gnome'; heritage_select_element.appendChild(option_tag);
		var option_tag = document.createElement("option");
		option_tag.value = 4; option_tag.innerHTML = 'Wellspring Gnome'; heritage_select_element.appendChild(option_tag);
	}
	if (ancestry_selection === 'Goblin') {
		var option_tag = document.createElement("option");
		option_tag.value = 0; option_tag.innerHTML = 'Charhide Goblin'; heritage_select_element.appendChild(option_tag);
		var option_tag = document.createElement("option");
		option_tag.value = 1; option_tag.innerHTML = 'Irongut Goblin'; heritage_select_element.appendChild(option_tag);
		var option_tag = document.createElement("option");
		option_tag.value = 2; option_tag.innerHTML = 'Razortooth Goblin'; heritage_select_element.appendChild(option_tag);
		var option_tag = document.createElement("option");
		option_tag.value = 3; option_tag.innerHTML = 'Snow Goblin'; heritage_select_element.appendChild(option_tag);
		var option_tag = document.createElement("option");
		option_tag.value = 4; option_tag.innerHTML = 'Unbreakable Goblin'; heritage_select_element.appendChild(option_tag);
	}
	if (ancestry_selection === 'Halfling') {
		var option_tag = document.createElement("option");
		option_tag.value = 0; option_tag.innerHTML = 'Gutsy Halfling'; heritage_select_element.appendChild(option_tag);
		var option_tag = document.createElement("option");
		option_tag.value = 1; option_tag.innerHTML = 'Hillock Halfling'; heritage_select_element.appendChild(option_tag);
		var option_tag = document.createElement("option");
		option_tag.value = 2; option_tag.innerHTML = 'Nomadic Halfling'; heritage_select_element.appendChild(option_tag);
		var option_tag = document.createElement("option");
		option_tag.value = 3; option_tag.innerHTML = 'Twilight Halfling'; heritage_select_element.appendChild(option_tag);
		var option_tag = document.createElement("option");
		option_tag.value = 4; option_tag.innerHTML = 'Woodland Halfling'; heritage_select_element.appendChild(option_tag);
	}
	if (ancestry_selection === 'Human') {
		var option_tag = document.createElement("option");
		option_tag.value = 0; option_tag.innerHTML = 'Skilled Heritage'; heritage_select_element.appendChild(option_tag);
		var option_tag = document.createElement("option");
		option_tag.value = 1; option_tag.innerHTML = 'Versatile Heritage'; heritage_select_element.appendChild(option_tag);
		var option_tag = document.createElement("option");
		option_tag.value = 2; option_tag.innerHTML = 'Half-Elf'; heritage_select_element.appendChild(option_tag);
		var option_tag = document.createElement("option");
		option_tag.value = 3; option_tag.innerHTML = 'Half-Orc'; heritage_select_element.appendChild(option_tag);
	}
	add_up_statistics();
}

function add_up_statistics() {
	var ancestry_selection = document.querySelector('#s_chargen_ancestry option:checked').value;
	document.querySelector('#s_str_value').innerHTML = 10;
	document.querySelector('#s_dex_value').innerHTML = 10;
	document.querySelector('#s_con_value').innerHTML = 10;
	document.querySelector('#s_int_value').innerHTML = 10;
	document.querySelector('#s_wis_value').innerHTML = 10;
	document.querySelector('#s_cha_value').innerHTML = 10 ;
	if (ancestry_selection === 'Dwarf') {
		document.querySelector('#s_con_value').innerHTML = 10 + 2;
		document.querySelector('#s_wis_value').innerHTML = 10 + 2;
		document.querySelector('#s_cha_value').innerHTML = 10 - 2;
	}
	if (ancestry_selection === 'Elf') {
		document.querySelector('#s_dex_value').innerHTML = 10 + 2;
		document.querySelector('#s_con_value').innerHTML = 10 - 2;
		document.querySelector('#s_int_value').innerHTML = 10 + 2;
	}
	if (ancestry_selection === 'Gnome') {
		document.querySelector('#s_str_value').innerHTML = 10 - 2;
		document.querySelector('#s_con_value').innerHTML = 10 + 2;
		document.querySelector('#s_cha_value').innerHTML = 10 + 2;
	}
	if (ancestry_selection === 'Goblin') {
		document.querySelector('#s_dex_value').innerHTML = 10 + 2;
		document.querySelector('#s_wis_value').innerHTML = 10 - 2;
		document.querySelector('#s_cha_value').innerHTML = 10 + 2;
	}
	if (ancestry_selection === 'Halfling') {
		document.querySelector('#s_str_value').innerHTML = 10 - 2;
		document.querySelector('#s_dex_value').innerHTML = 10 + 2;
		document.querySelector('#s_wis_value').innerHTML = 10 + 2;
	}
	if (ancestry_selection === 'Human') {
		// nothing
	}
}
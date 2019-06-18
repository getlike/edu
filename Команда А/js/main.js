var taskList;
var taskDetails;
	
var userNum = 0;
var userOffset = 20;
var userCount = 0;
var userMSG = "Message ";

var users;
var messages;

/*--------      ---------   START     --------      -------*/

	createChatStructure();
//	createtaskList_old(10,0);
// 	createtaskList(10,0);


		
/*--------      ---------   START     --------  end  -------*/
 	var searchInput = document.querySelector("#search-bar"); 
 	console.dir(searchInput);
 	searchInput.placeholder = "Type search phrase and press ENTER";
// 	earchInput.defaultValue = "Type search phrase and press ENTER";

/*========================FUNCTIONS=========================*/

/*------------------создание структуры страницы-----------------*/
/*------------------поблочное создание элементов-----------------*/

	function createChatStructure()			
	{
	var app = document.createElement("div");		//общий блок "страница"
		app.id = "app";
		document.body.appendChild(app);

	var field = document.createElement("div");		//общий блок "поле"
		field.id = 'field';
		app.appendChild(field);

	var header = document.createElement("header");	//блок "хэдэр"
		field.insertBefore(header, main);

	/*	var logo = document.createElement("a");				
			logo.className = "logo";
			logo.href = "9dz.html"; 
			header.appendChild(logo);
	*/	
		var chatName = document.createElement("h1");	//"название страницы" в хэдере
			chatName.innerText = "Your Personal Time Organizer";
			header.appendChild(chatName);
		
		var RegLogBlock = document.createElement("div");//субблок "авторизация" в хэдере
			RegLogBlock.className = "nav";
			header.appendChild(RegLogBlock);
		
			var login = document.createElement("a");	//LogOut и ссылка на  стартовую страницу 
				login.innerText = "LogOut";
				login.href = "../index.php";
				RegLogBlock.appendChild(login);

	
	var main = document.createElement("div");			//общий блок для "список задач" + "детали задач"
		main.id = 'main';
		field.appendChild(main);

	var leftSidebar = document.createElement("div");		// блок для "список задач" 
		leftSidebar.id = 'left-sidebar';
		main.appendChild(leftSidebar);

		var searchBar = document.createElement("input");		// блок для "поиска" 
			searchBar.id = 'search-bar';
			searchBar.setAttribute('disabled', 'disabled');		//**--   в стадии разработки   --**
			leftSidebar.appendChild(searchBar);
			
		var sortList = document.createElement("select");		// блок для "сортировки" 
			sortList.id = 'sort-list';
			sortList.innerHTML = 
			"<option>importance</option>"+						//**--   в стадии разработки   --**
			"<option disabled>duration</option>"+				//
			"<option disabled>difficulty</option>"+				//
			"<option disabled>oldest</option>"+					//
			"<option disabled>newest</option>";					//
			leftSidebar.appendChild(sortList);

			taskList = document.createElement("ul");				//создание и размещение списка
			taskList.id = 'task-list';
			leftSidebar.appendChild(taskList);

	var centerBar = document.createElement("div");			// центральный блок 
		centerBar.id = 'center-bar';
		main.appendChild(centerBar);
	
		var taskDetails = document.createElement("form"); 	// создание формы 
			taskDetails.action = "";
			taskDetails.method = "post";
	//		taskDetails.style.border = "solid 2px black";
			taskDetails.id = 'task-details';
		centerBar.appendChild(taskDetails);

		var taskName = document.createElement("input");  	// блок "имя задачи" 
			taskName.type = "text";
			taskName.className = "input-task";
			taskName.name = "taskname";
			taskName.placeholder = " Enter your task name";
		taskDetails.appendChild(taskName);
	
		var taskDescription = document.createElement("textarea");		// блок  "описание задачи" 
			taskDescription.type = "text";
			taskDescription.className = "input-desc";
			taskDescription.name = "taskdescription";
			taskDescription.placeholder = " Enter your task description ";
		taskDetails.appendChild(taskDescription);
		
		var selectbox = document.createElement("div");					// блок  "селектов" 
			selectbox.id = 'selectbox';
		taskDetails.appendChild(selectbox);
		
			var taskImportance =  document.createElement("select");		// блок  "выбора важности задачи" 
				taskImportance.name = 'taskimportance';
				taskImportance.id = 'task-importance';
				taskImportance.innerHTML = 
					"<option disabled>importance</option>"+
				    "<option value='1'>1</option>"+
				    "<option value='2'>2</option>"+
				    "<option value='3'>3</option>"+
				    "<option value='4'>4</option>"+
				    "<option value='5'>5</option>";
				taskImportance.firstChild.defaultSelected = true;
			selectbox.appendChild(taskImportance);
			
			var taskDuration =  document.createElement("select");		// блок  "выбора времени выполнения задачи" 
		        console.log("taskDuration");
		        console.dir(taskDuration);
		        taskDuration.id = 'task-duration';
		        taskDuration.name = 'taskduration';
		        taskDuration.innerHTML = 
		          "<option disabled>duration</option>"+
		          "<option value='1'>5min</option>"+
		          "<option value='2'>30min</option>"+
		          "<option value='3'>1hour</option>"+
		          "<option value='4'>2hours</option>"+
		          "<option value='5'>more</option>";
		        taskDuration.firstChild.defaultSelected = true;
		        selectbox.appendChild(taskDuration);		
			
			var taskDifficulty =  document.createElement("select");		// блок  "выбора сложности задачи" 
				taskDifficulty.name = "taskdifficulty";
				taskDifficulty.id = 'task-difficulty';
				taskDifficulty.innerHTML = 
					"<option disabled>difficulty</option>"+
					"<option value='1'>1</option>"+
					"<option value='2'>2</option>"+
					"<option value='3'>3</option>"+
					"<option value='4'>4</option>"+
					"<option value='5'>5</option>";
				taskDifficulty.firstChild.defaultSelected = true;
				selectbox.appendChild(taskDifficulty);	
				
		var datebox = document.createElement("div");					// блок  "дат"  
			datebox.id = 'datebox';
		taskDetails.appendChild(datebox);
			
			var taskLifetime = document.createElement("input");			// блок  "выбора даты актуальности задачи"
				taskLifetime.id  = 'localdate';
				taskLifetime.name = "date";
				taskLifetime.type  = 'datetime-local';
				datebox.appendChild(taskLifetime);
			console.log("taskLifetime");
			console.dir(taskLifetime);
			
			var taskAlarm = document.createElement("input");			// блок  "выбора даты и времени напоминания "
				taskAlarm.id  = 'alarmdate';
				taskAlarm.name = "alarm";
				taskAlarm.type  = 'datetime-local';
				datebox.appendChild(taskAlarm);
			console.log("taskAlarm");
			console.dir(taskAlarm);
			
		var buttonbox = document.createElement("div");				// блок  кнопок
			buttonbox.id = 'buttonbox';
			taskDetails.appendChild(buttonbox);
			
			var deleteButton =  document.createElement("button");	// кнопка удаления задачи
				console.log("deleteButton");
				console.dir(deleteButton);
				deleteButton.id = 'delete-button';
				deleteButton.innerText = "delete";
				buttonbox.appendChild(deleteButton);
			
			var updateButton =  document.createElement("button");	// кнопка обновления  задачи
				console.log("updateButton");
				console.dir(updateButton);
				updateButton.id = 'update-button';
				updateButton.innerText = "update";
				buttonbox.appendChild(updateButton);
			
			var createButton =  document.createElement("button");	// кнопка создания задачи
				console.log("createButton");
				console.dir(createButton);
				createButton.id = 'create-button';
				createButton.innerText = "create";
				createButton.type = "submit";
				createButton.name = "submit";
				buttonbox.appendChild(createButton);

		
	//---------------------------------------------------

	}

/*------------------создание структуры страницы-----------end---*/








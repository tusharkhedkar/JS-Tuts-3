var ProjectController = (function () {

    let Project = function (id, name, status, description) {
        this.id = id;
        this.status = status;
        this.name = name;
        this.description = description;
    }

    let projects = [];


    let addProject = (id, name, status, description) => {
        let project = new Project(id, name, status, description);
        projects.push(project);
        return project;
    }

    return {
        addProject: (id, name, status, description) => {
            return addProject(id, name, status, description);
        },

        getProjectsCount : function() {
            return projects.length;
        }
       
    }

})();



var UIController = (function (projectCntrl) {

    let projectID, projectName, status, description, project;
    let DOMStrings = {
            id : '#ID',
            name : '#name',
            status: '#status',
            description: '#description',
            tableBody: '.tableBody'
    }

    let add = () => {

        projectID = document.querySelector(DOMStrings.id).value;
        projectName = document.querySelector(DOMStrings.name).value;
        status = document.querySelector(DOMStrings.status).value;
        description = document.querySelector(DOMStrings.description).value;

        project = projectCntrl.addProject(projectID, projectName, status, description);
        console.log(project);

        displayProject(project);

        clearFields();
    }

    let displayProject = function (project) {
        let html = `<tr>
            <td>${project.id}</td>
            <td>${project.name}</td>
            <td>${project.status}</td>
            <td>${project.description}</td>
        </tr>`;

        document.querySelector(DOMStrings.tableBody).insertAdjacentHTML('beforeend', html);
    }

     let clearFields = function() {

        document.querySelector(DOMStrings.id).value = '';
        document.querySelector(DOMStrings.name).value = '';
        document.querySelector(DOMStrings.status).value = '';
        document.querySelector(DOMStrings.description).value = '';
     }

    let showHide = function () {
                let container, button;
                 container =  document.querySelector('#proContainer');
                 button = document.querySelector('#showProjects');
        if (container.classList.contains('toggleContainer')) {
            container.classList.remove('toggleContainer');
            button.textContent = 'Hide Projects';
        } else {
            container.classList.add('toggleContainer');
            button.textContent = 'Show Projects';
        }
    }

    let showCount = function() {
        return document.querySelector(DOMStrings.tableBody).rows.length;
       
    };
    return {
        add: () => add(),
        showHideProjects: () => showHide(),
       showCount:  showCount,

    }

})(ProjectController);


var Controller = (function (UICntrl, projectCntrl) {



    let projectDetails = function () {
        UICntrl.add();
    }

    let showHideProjects = function () {
        UICntrl.showHideProjects();
    }

    let showCount = () => {
       let html; 
      let isSame = UICntrl.showCount() == projectCntrl.getProjectsCount();

      if(isSame) {
            html = `<p class="lengthCLass" style="color: #ffecda; text-align : right;"> Lengths are Equal!</p>`;
      } else {
        html = `<p class="lengthCLass" style="color: #ffecda ; text-align : right;"> Lengths are NOT Equal!</p>`;
      }

        
      document.querySelector('#showCountDiv').insertAdjacentHTML('beforeend', html);


            setTimeout(() => {
                document.querySelector('.lengthCLass').remove(document.querySelector('.lengthCLass'));
            }, 7000);
    }
    function init() {
        document.querySelector('.formButton').addEventListener('click', projectDetails);
        document.querySelector('#showProjects').addEventListener('click', showHideProjects);
        document.getElementById('showCount').addEventListener('click', showCount);
    }


    return {
        in: () => init(),
    }

})(UIController, ProjectController);



Controller.in();
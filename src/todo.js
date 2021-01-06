class Todo {
  constructor(project, title, description, dueDate, priority) {
    this.project = project;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;

    this.createCard();
  }

  createCard() {
    let card = document.createElement('div');
    card.setAttribute('class', 'card');
    
    let cardContent = document.createElement('div');
    cardContent.setAttribute('class', 'card-content');
    
    let media = document.createElement('div');
    media.setAttribute('class', 'media');
    
    let mediaContent = document.createElement('div');
    mediaContent.setAttribute('class', 'media-content');
    
    let title = document.createElement('p');
    title.setAttribute('class', 'title is-4');
    title.innerText = this.title;

    let description = document.createElement('p');
    description.setAttribute('class', 'subtitle is-6');
    description.innerText = this.description;

    let priority = document.createElement('p');
    priority.setAttribute('class', 'subtitle is-6');
    priority.innerText = this.priority;


    let dueDate = document.createElement('p');
    dueDate.setAttribute('class', 'subtitle is-6');
    dueDate.innerText = this.dueDate;

    mediaContent.appendChild(title);
    mediaContent.appendChild(description);
    mediaContent.appendChild(priority);
    mediaContent.appendChild(dueDate);
    media.appendChild(mediaContent);
    cardContent.appendChild(media);
    card.appendChild(cardContent);
    
    let main = document.querySelector('main');
    main.appendChild(card);

  }
}

export default Todo;
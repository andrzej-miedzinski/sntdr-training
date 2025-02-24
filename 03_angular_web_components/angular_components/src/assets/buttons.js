class MyButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    // Tworzymy element przycisku
    this.button = document.createElement('button');
    this.button.style.padding = '10px';
    this.button.style.border = 'none';
    this.button.style.color = 'white';
    this.button.style.cursor = 'pointer';

    // Dodajemy przycisk do Shadow DOM
    shadow.appendChild(this.button);
  }

  // Zdefiniowanie obserwowanych atrybutów
  // observedAttributes: Ta metoda określa, które atrybuty Web Componentu będziemy obserwować. W tym przypadku są to label i color.
  static get observedAttributes() {
    return ['label', 'color'];
  }

  // Metoda, która jest wywoływana, gdy atrybuty ulegną zmianie
  // attributeChangedCallback: Ta metoda jest wywoływana, gdy jeden z atrybutów Web Componentu się zmienia. 
  // Umożliwia to dynamiczne aktualizowanie właściwości komponentu, gdy atrybuty są modyfikowane z zewnątrz (np. z Angulara).
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'label') {
      this.button.textContent = newValue || 'Kliknij mnie';
    }
    if (name === 'color') {
      this.button.style.backgroundColor = newValue || '#007bff';
    }
  }
}

// Rejestracja Web Componentu
customElements.define('my-button', MyButton);

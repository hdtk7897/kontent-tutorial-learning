// Define main container
const app = document.getElementById('app');

// Function for creating and appending elements
const addToElementbyId = (elementType, id, parent) => {
  const element = document.createElement(elementType);
  element.setAttribute('id', id);
  parent.appendChild(element);
  return element;
};

// Set up Kontent delivery
const Kk = window['kontentDelivery'];
const deliveryClient = new Kk.DeliveryClient({
  projectId: '7a6bb3a5-77f1-0028-e023-8816eea4dd6e'
});

// projectId: '975bf280-fd91-488c-994c-2f04416e5ee3'
//projectId: "9165bcd6-4bc3-00da-26ce-64cad55540f1"
//projectId: "7a6bb3a5-77f1-0028-e023-8816eea4dd6e"

// Function for adding elements to DOM with specific attributes
const createElement = (elementType, classToAdd, attribute, attributeValue) => {
  const element = document.createElement(elementType);
  element.setAttribute('class', classToAdd);

  // Set attribute value based on the attribute required
  console.log(`attribute:${attribute}`);
  attribute === 'href'
    ? (element.href = attributeValue)
    : attribute === 'innerHTML'
    ? (element.innerHTML = attributeValue)
    : attribute === 'innerText'
    ? (element.innerText = attributeValue)
    : attribute === 'src'
    ? (element.src = attributeValue)
    : undefined;

  return element;
};

// Set link based on type
const resolveUrl = link => {
  urlLocation =
    link.type === 'article'
      ? `article.html#${link.urlSlug}`
      : link.type === 'coffee'
      ? `coffee.html#${link.urlSlug}`
      : 'unsupported-link';
  return { url: urlLocation };
};

// dynamic data 

const posts = [
    {
        Serial: '1',
        Name: 'Shahajalal Badsha',
        Department: 'Computer',
    },
    {
        Serial: '2',
        Name: 'Mahamudul Hasan',
        Department: 'Computer',
    },
    {
        Serial: '3',
        Name: 'Samim Devil',
        Department: 'Computer',
    },
    {
        Serial: '4',
        Name: 'Soikat Saikim',
        Department: 'Computer',
    },

    {
        Serial: '5',
        Name: 'Armir Bow',
        Department: 'Computer',
    },  
    {
        Serial: '6',
        Name: 'Black Girl',
        Department: 'Computer',
    },
];


// selection
const postsElement = document.querySelector(".posts");

const loadAllData =  () => {
  posts.map((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
    <p>Serial: ${post.Serial}</p>
    <p>Name: ${post.Name}</p>
    <p>Department: ${post.Department}</p>
    `;
    postsElement.appendChild(postElement);
  });
};

loadAllData();
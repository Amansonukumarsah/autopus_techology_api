const api_url =
  "http://127.0.0.1:8000/api/book/";

// Get the data
var flage = 0;

async function getapi(url) {

  const response = await fetch(url);

  var data = await response.json();
  // console.log(data);
  if (response) {
    // console.log('hideloader')
  }
  // console.log('showdata')
  show(data);

}

getapi(api_url);


async function show(data) {
  let tab =
    `<tr>
		<th>ID</th>
		<th>Book_Name</th>
		<th>Author_Name</th>
		<th>Description</th>
    <th>Action</th>
		</tr>`;
  // console.log('.....')
  // console.log(typeof(data))


  for (let r of data) {
    tab += `<tr>
    <td>${r.id}</td>	
	<td>${r.book_Name} </td>
	<td>${r.author_Name}</td>
	<td>${r.Desc}</td>
  <td>
      <button type="button" class="btn btn-outline-secondary" onclick="Edit(${r.id})">Edit</button>
      <button type="button" class="btn btn-outline-danger" onclick="userDelete(${r.id});">Del</button>
  </td>
</tr>`;
  }
  document.getElementById("mytable").innerHTML = tab;
}


// getapi(api_url);

// Post the data

async function showUserCreateBox() {
  Swal.fire({
    title: 'Create user',
    html:
      '<input id="id" type="hidden">' +
      '<input id="Book_Name" class="swal2-input" placeholder="Book_Name">' +
      '<input id="Author_Name" class="swal2-input" placeholder="Author_Name">' +
      '<input id="Desc" class="swal2-input" placeholder="Desc">',
    focusConfirm: false,
    preConfirm: () => {
      userCreate();
      console.log('aman');
    }
  })
}


async function userCreate() {
  const Book_Name = document.getElementById("Book_Name").value;
  const Author_Name = document.getElementById("Author_Name").value;
  const Desc = document.getElementById("Desc").value;

  let book = {
    method: "POST",

    body: JSON.stringify({
      book_Name: Book_Name,
      author_Name: Author_Name,
      Desc: Desc,
    }),

    headers: {
      "Content-type": "application/json"
    },
  }
  console.log(book)

  await fetch('http://127.0.0.1:8000/api/book/', book)
    .then((response) => response.json())
    .then((json) => console.log(json))
  getapi(api_url);
}




// Update the data



async function Edit(id) {


  url = 'http://127.0.0.1:8000/api/book/' + id

  const response = await fetch(url);

  var data = await response.json();

  // console.log(data.book_Name)


  Swal.fire({
    title: 'Edit User',
    html:
      '<input id="Book_Name" class="swal2-input" placeholder="Book_Name" value="' + data['book_Name'] + '">' +
      '<input id="Author_Name" class="swal2-input" placeholder="Author_Name" value="' + data['author_Name'] + '">' +
      '<input id="Desc" class="swal2-input" placeholder="Desc" value="' + data['Desc'] + '">',
    focusConfirm: false,
    preConfirm: () => {
      userEdit(id);
      console.log('aman')
    }
  })
}


async function userEdit(id1) {
  const Book_Name = document.getElementById("Book_Name").value;
  const Author_Name = document.getElementById("Author_Name").value;
  const Desc = document.getElementById("Desc").value;

  console.log(Book_Name)
  console.log(Desc)

  let book = {
    method: "PUT",

    body: JSON.stringify({
      book_Name: Book_Name,
      author_Name: Author_Name,
      Desc: Desc,
    }),

    headers: {
      "Content-type": "application/json"
    },
  }

  console.log(book)


  await fetch('http://127.0.0.1:8000/api/book/' + id1 + '/', book)
    .then((response) => response.json())
    .then((json) => console.log(json))


  getapi(api_url);
}





// Delete the data


async function userDelete(id) {
  // console.log(id)
  var result = confirm("Want to delete?");
  if (result) {
    await fetch('http://127.0.0.1:8000/api/book/' + id, {
      method: 'DELETE',
    })
      .then(res => res.text())
      .then(res => console.log(res))
    getapi(api_url);
  }
  // location.reload()
}







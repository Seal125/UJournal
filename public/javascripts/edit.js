let url = window.location.href
let strUrl = url.toString()
let index = strUrl.split('/')
let id = index[index.length -1]
console.log(id)

document.getElementById("myBtn").addEventListener("click", function(event){
  event.preventDefault()
  let title = document.getElementById("title").value
  let entryBody = document.getElementById("entryBody").value
  console.log(title,entryBody)
  const response = fetch(`/edit/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({title:title , entryBody:entryBody})
  })
    .then((res) => {
      if(res.status == 200){
        window.location.replace('/')
      }
    })
})
const quotesBox = document.querySelector("#quote-box");
const quote = document.querySelector(".quote");
const author = document.querySelector('.quote-author');
const button = document.querySelector("#new-quote");

fetch('https://dummyjson.com/quotes')
.then(res => res.json())
.then(data => {
    console.log(data);
    data.quotes.forEach(item => {  // burada hata aldım = data.forEach yazarak kullanmıştım fakat data bir array değil obje olduğu için hata aldım. Bu yüzden data.quotes.forEach olarak değiştirdim.
        //response.json() yerine response.text() kullanarak veriyi inceleyebiliriz
    quote.textContent = item.quote;
    author.textContent = item.author;
    button.addEventListener('click', () => {
        const random = Math.floor(Math.random() * data.quotes.length);
        const item = data.quotes[random];
        quote.textContent = item.quote;
        author.textContent = item.author;
    });
})})
.catch(err => console.log(err));
getCss.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", '/style.css')
    request.onreadystatechange = () => {
        console.log(request.readyState) //2 3 4
        if (request.readyState === 4 && request.status === 200) {
            const style = document.createElement('style')
            style.innerHTML = request.response
            document.head.appendChild(style)
        }
    }
    request.send()
}
getJs.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", '/2.js')
    request.onreadystatechange = () => {
        console.log(request.readyState) //2 3 4
        if (request.readyState === 4 && request.status === 200) {
            const script = document.createElement('script')
            script.innerHTML = request.response
            document.head.appendChild(script)
        }
    }
    request.send()
}
getHtml.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", '/3.html')
    request.onreadystatechange = () => {
        console.log(request.readyState) //2 3 4
        if (request.readyState === 4 && request.status === 200) {
            const div = document.createElement('div')
            div.innerHTML = `<b>恭喜小狗子请求Html成功</b>`
            document.body.appendChild(div)
        }
    }
    request.send()
}
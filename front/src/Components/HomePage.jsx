import React from 'react'
import Request from './Request'
import styles from './HomePage.module.css'

function Params() {
    const [res, setRes] = React.useState("")

    async function changeParams(e) {
        e.preventDefault()
        const minMos = e.target.children.minMos.value
        const maxMos = e.target.children.maxMos.value
        Request.changeParams(minMos, maxMos).then((res) => {
            setRes(res)
        }).catch((err) => {
            console.log(err)
            setRes("ERROR")
        })
    }
    return (
        <div>
            <form className={styles.form} onSubmit={(e) => changeParams(e)}>
                <input type="text" name="minMos" placeholder='Min debit Mb/s'></input>
                <input type="text" name="maxMos" placeholder='Max debit Mb/s'></input>
                <input type="submit"></input>
            </form>
            <h3>{res}</h3>
        </div>
    )
}
function HomePage() {
    const [url, setUrl] = React.useState("")

    function getImage() {
        Request.getImage().then((res) => {
            setUrl("http://127.0.0.1:8000/api" + res["url"])
        }).catch((err) => {
            console.log(err)
        })
    }

    React.useEffect(() => {
        const interval = setInterval(() => {
            getImage()
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className={styles.center}>
            <img className={styles.img} src={url} alt={url}></img>
            <Params></Params>
        </div>
  )
}

export default HomePage
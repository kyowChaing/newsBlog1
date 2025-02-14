import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

const LeftAside = () => {

  const [categories, setCategories] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('categories.json')
      .then(res =>  res.json())
      .then(data => { setCategories(data) })

  }, [])

  useEffect(()=>{
      fetch('news.json')
      .then((res)=>res.json())
      .then(data=>setNews(data))

  },[])

  

console.log(categories);
console.log(news);
  return (
    <div>
      <h2 className=' font-bold'>All Catergory </h2> 
      {categories.map( cate=>
        <NavLink to={`/category/${cate.name}`} key={cate.id} className={({isActive})=> ` block p-2 ${isActive ? "font-bold bg-[#e7e7e7] p-6":"text-[#9f9f9f]"} ` } > {cate.name}</NavLink> 
        )}


      <div>
        {news.slice(3,6).map(n=>
          <div key={n._id}>
              <img src={n.image_url} alt="" />
        </div>    
        
        )}
      </div>
    </div>
  )
}

export default LeftAside
import React, { useEffect, useState } from 'react';
import News from './News';

const ArticlePart = () => {

  const [allnews, setAllnews] = useState([]);

  // useEffect(()=>{

  //     ( async ()=>{
  //         try{
  //             const response = await fetch('news.json');
  //             const result = await response.json();
  //             setAllnews(result);
  //       }catch(error)
  //       {
  //           console.error("error" , error )
  //       }
  //       })();

       
    
  // }, [])

  useEffect(()=>{
    fetch('news.json')
    .then(res=>res.json())
    .then(data=>setAllnews(data))
  },[])

  console.log(allnews);

  return (
    <div>
        <h2 className=' font-bold p-1 text-[#403F3F]'>Dragon News Home </h2>

        {allnews.slice(8,16).map(news=> 
            <News news={news} key={news._id} > </News>
          )}

    </div>
  )
}

export default ArticlePart
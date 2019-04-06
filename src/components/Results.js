import React from 'react'


const Results = (props) => (
 
 //iterate the data to display the itens from the search
<div>
  {
    props.data &&
   
    props.data.businesses.map((item, key) => {
    return <p>{item}</p>
    })
   
 
  }

</div>
)


export default Results

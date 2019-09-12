import React, { Fragment } from 'react'; 
import { Link } from 'gatsby'

const TagsMenu = (props) => {

    const { tagName } = props;
    
    
    let tagOptions =
        tagName && tagName.map((tagName, index) => {
          return (
            <Link style={{textDecoration:"none"}} to={`/tags/${tagName}`}>
              <span
                style={{
                  marginLeft: "10px",
                  border: "solid 1px #eee",
                  padding: "5px",
                  backgroundColor: "pink",
                  borderRadius: "5px",
                  textDecoration:"none"
                }}
                key={index}
              >
                {tagName}
              </span>
            </Link>
          )
        })
    

    return (
      <Fragment>
        <div
          style={{
            width: "80%",
            margin: "auto",
            marginBottom: "50px",
            textAlign: "center",
            dispplay: "flex",
          }}
        >
         {tagOptions} 
        </div>
      </Fragment>
    )
}

export default TagsMenu;
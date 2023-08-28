import React from "react";

// export class NewsItem extends Component {
//   render() {
    const NewsItem = (props) => {
    let { title, description, Url, newsUrl,author,date } = props;//this.props;
    return (
      <div>
        {/* style={{ width: "20rem" }} */}
        <div className="card mx-auto" >
          <img
            src={
              Url? Url :
              "https://orbis-alliance.com/wp-content/themes/consultix/images/no-image-found-360x260.png"
               
            }
            className="card-img-top"
            alt="..."
          />

          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
            <a
              rel="noopener norefferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-primary btn-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;

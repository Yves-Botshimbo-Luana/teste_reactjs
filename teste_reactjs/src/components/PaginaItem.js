import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

export class PaginaItem extends Component {
    state = {
        imgUrl: '',
        author: '',
        isLoaded: false
    }
    static propTypes = {
        pagina: PropTypes.object.isRequired
    }
    componentDidMount() {
        const { featured_media, author } = this.props.pagina;
        const getImageUrl = axios.get (`/wp-json/wp/v2/media/$
        {featured_media}`); 
        const getAuthor = axios.get(`/wp-json/wp/v2/users/${author}`);

        Promise.all([getImageUrl, getAuthor]).then(res => {
            this.setState({
             imgUrl: res [0].data.media_details.sizes.full.source_url,
             author: res[1].data.name,
             isLoaded: true
            });

        });
    }
  render() {
      const { title, excerpt } = this.props.pagina;
      const { author, imgUrl, isLoaded } = this.state;
      if(isLoaded) {
        return (
            <div>
                <h2 style={{ marginBottom: '0' }}>{title.rendered}</h2>
                <small>Review by <strong>{ author }</strong></small>
                <img 
                style={{ with: '100%'}}
                src={imgUrl}
                alt="tittle.rendered"
                />
                <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} 
                />
                <Link to={`/pagina/${id}`}>Pagina Review</Link>
                <hr />
            </div>
          );

      }
    return null;
  }
}
export default PaginaItem;
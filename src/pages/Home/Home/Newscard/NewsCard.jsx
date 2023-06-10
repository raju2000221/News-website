import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { title, details, _id, image_url, author, total_view, rating } = news;
    return (
        <Card className="">
            <Card.Header>
                <div className='d-flex align-items-center'>
                    <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                    <div className='ms-3'>
                        <p className='mb-0'>{author?.name}</p>
                        <p><small> {moment(author?.published_date).format('yyyy-MM-d')}</small></p>
                    </div>
                    <div className='ms-auto'>
                        <FaRegBookmark className='m-3 fs-5'></FaRegBookmark>
                        <FaShareAlt className='fs-5'></FaShareAlt>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> :
                        <>{details.slice(0, 250)} <span className='text-danger fs-5'>.....</span> <Link to={`/news/${_id}`} className='text-danger'>Read More</Link></>

                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                <div className='d-flex'>
                    <div>
                        <Rating
                            placeholderRating={rating.number}
                            emptySymbol={<FaRegStar></FaRegStar>}
                            readonly
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                            >
                        </Rating> {rating.number}
                    </div>
                    <div className='ms-auto'>
                        <FaEye></FaEye> {total_view}
                    </div>
                </div>


            </Card.Footer>
        </Card>
    );
};

export default NewsCard;
import React from "react";
import Axios from "axios";
import episodeApi from "EpisodeApi";
import { Card, Col, Row } from "antd";

class EpisodeDetail extends React.Component {
    state = {
        episode: this.props.episode,
    }

    render() {
        const { episode: { id, name, image: { medium: thumbUrl } } } = this.state;
        return (
            <Card
                style={{ width : 240 }}
                cover={<img src={thumbUrl} alt={name} />}>
                <Card.Meta title={name} />
                {id} : {name}
            </Card>
        )
    }
}

class EpisodeList extends React.Component {
    state = {
        episodeList: [],
    }

    // componentDidMount() {
    //     const apiUrl = "https://api.tvmaze.com/singlesearch/shows";
    //     const params = {
    //         q: "mr-robot",
    //         embed: "episodes",
    //     };
    //     Axios.get(apiUrl, {params})
    //         .then(response => {
    //             const { data: { _embedded: { episodes } } } = response;
    //             console.log(episodes);
    //             this.setState({ episodeList: episodes })
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }

    async componentDidMount() {
        const apiUrl = "https://api.tvmaze.com/singlesearch/shows";
        const params = {
            q: "mr-robot",
            embed: "episodes",
        };

        try {
            // const response = await Axios.get(apiUrl, {params});
            const response = await episodeApi.get(apiUrl, {params});
            const { data: { _embedded: { episodes } } } = response;
            this.setState({ episodeList: episodes })
        }
        catch(error) {
            console.error(error);
        }
    }

    render() {
        const { episodeList } = this.state;
        return (
            <div>
                <h1>EpisodeList</h1>
                <Row>
                {
                    episodeList.map(episode =>
                        <Col span={8}>
                            <EpisodeDetail episode={episode} />
                        </Col>
                    )
                }
                </Row>
            </div>
        )
    }
}

export default EpisodeList;

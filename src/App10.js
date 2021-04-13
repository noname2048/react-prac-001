import React, { useEffect, useState } from "react";
import { BrowserRouter, NavLink, Link, Route, Switch } from "react-router-dom";
import queryString from "query-string";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <h1>App10</h1>
                <ul>
                    <li>
                        <NavLink exact to="/about/" activeStyle={navActiveStyle}>about</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/about/company/" activeStyle={navActiveStyle}>about company</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/profile/" activeStyle={navActiveStyle}>profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog/" activeStyle={navActiveStyle}>blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/posts/" activeStyle={navActiveStyle}>post list</NavLink>
                    </li>
                    <li>
                        <NavLink to="/hello/" activeStyle={navActiveStyle}>hello</NavLink>
                    </li>
                </ul>

            <Switch>
                <Route exact path="/about/" component={AboutPage} />
                <Route exact path="/about/company/" component={AboutCompanyPage} />
                <Route exact path="/profile/" component={ProfilePage} />
                <Route path="/blog/" component={BlogPage} />
                <Route path="/posts/:post_id/" component={PostDetail} />
                <Route path="/posts/" component={PostList} />
                <Route component={RouteNoMatch} />
            </Switch>

            </div>
        </BrowserRouter>
    )
};

const navActiveStyle = {
    fontWeight: "bold",
    backgroundColor: "yellow",
};

const AboutPage = ({ history, location, match }) => {
    return (
        <div>
            <h2>AboutPage</h2>
        </div>
    );
};

const AboutCompanyPage = () => {
    return (
        <div>
            <h2>about company</h2>
        </div>
    );
};

const ProfilePage = ({ location }) => {
    const { token } = queryString.parse(location.search);

    
    return (
        <div>
            <h2>ProfilePage</h2>
            token: { token }
        </div>
    );
};

const BlogPage = () => {
    return (
        <div>
            <h2>BlogPage</h2>
        </div>
    );
};

const PostList = ({ location, history, match }) => {
    return (
        <div>
            <h2>PostList</h2>
            <ul>
                <li><Link to={`${match.url}100/`}>100번 포스팅</Link></li>
                <li><Link to={`${match.url}101/`}>101번 포스팅</Link></li>
            </ul>
        </div>
    )
}

const PostDetail = ({ match }) => {
    const { params: { post_id }} = match;

    const [post, setPost] = useState();

    useEffect(() => {
        console.log(`get post detail api 호출: ${post_id}`);
        setPost({ title: `포스팅: ${post_id}`, content: `포스팅 ${post_id} 내용` });
    }, [post_id]);

    return (
        <div>
            <h2>PostDetail #{ post_id }</h2>
            {JSON.stringify(post)}
        </div>
    )
}

const RouteNoMatch = ({ location }) => {
    return <div>잘못된 경로로 접근하셨습니다. ({ location.pathname })</div>;
}

export default App;

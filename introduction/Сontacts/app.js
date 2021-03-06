(function(){
    var CONTACTS = [
            {
                id: 1,
                name: 'Darth Vader',
                phoneNumber: '+250966666666',
                address:'Kharkov',
                email: 'dartVader@gmail.com',
                image: 'http://cs7.pikabu.ru/images/big_size_comm_an/2014-03_7/13962622876915.gif'
            }, {
                id: 2,
                name: 'Princess Leia',
                phoneNumber: '+250966344466',
                address:'Kiev',
                email: 'Princess@gmail.com',
                image: 'http://images6.fanpop.com/image/photos/33100000/CARRIE-FISHER-anakin-vader-and-princess-leia-33186069-190-149.gif'
            }, {
                id: 3,
                name: 'Luke Skywalker',
                phoneNumber: '+250976654433',
                address:'Kharkov',
                email: 'Skywalker@gmail.com',
                image: 'http://www.youshouldshare.me/wp-content/uploads/2015/03/14264215682890-anigif_enhanced-buzz-13518-1367608452-4.gif'
            }, {
                id: 4,
                name: 'Chewbacca',
                phoneNumber: '+250456784935',
                address:'Kharkov',
                email: 'Chewbacca@gmail.com',
                image: 'https://media.giphy.com/media/RUUdVZqwpfTRS/giphy.gif'
            }
        ];

        var Contact = React.createClass({
            getInitialState: function() {
                return {
                    isOpened: false
                };
            },
            detail:function(event) {
                this.setState({
                    isOpened: !this.state.isOpened
                })
            },
            render: function() {
                return (
                    <li className="contact  cliarfix" onClick={this.detail}>
                        <img className="contact-image" src={this.props.image} width="60px" height="60px" />
                        <div className="contact-info">
                            <div className="contact-name"> {this.props.name} </div>
                            <div className="contact-number"> {this.props.phoneNumber} </div>
                        </div>
                        { this.state.isOpened ?
                            <div className="contact-detail" >
                                <div className="contact-address"> {this.props.address} </div>
                                <div className="contact-email"> {this.props.email} </div>
                            </div> : null
                        }
                    </li>
                );
            }
        });

        var ContactsList = React.createClass({
            getInitialState: function() {
                return {
                    displayedContacts: CONTACTS
                };
            },

            handleSearch: function(event) {
                var searchQuery = event.target.value.toLowerCase();
                var displayedContacts = CONTACTS.filter(function(el) {
                    var searchValue = el.name.toLowerCase();
                    return searchValue.indexOf(searchQuery) !== -1;
                });

                this.setState({
                    displayedContacts: displayedContacts
                });
            },

            render: function() {
                return (
                    <div className="contacts">
                        <input type="text" className="search-field" onChange={this.handleSearch} />
                        <ul className="contacts-list">
                            {
                               this.state.displayedContacts.map(function(el) {
                                    return <Contact
                                        key={el.id}
                                        name={el.name}
                                        phoneNumber={el.phoneNumber}
                                        image={el.image}
                                        address={el.address}
                                        email={el.email}
                                    />;
                               })
                            }
                        </ul>
                    </div>
                );
            }
        });

        ReactDOM.render(
            <ContactsList />,
            document.getElementById("content")
        );
})();




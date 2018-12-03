import React from 'react'
import { 
    Segment, 
    Header, 
    Container, 
    Image,
    } from 'semantic-ui-react'

class Tutorial extends React.Component {

    render() {

        return (
            <Segment basic>
                <Segment secondary>
                    <Header as="h1">Creating a Fixed Top Menu Bar </Header>
                    <Container>
                        Step 1: Import the basic modules needed to created a menu bar
                        <Segment tertiary>
                            <Image bordered rounded size='large' src='https://i.imgur.com/kOuTDnH.png'/>
                        </Segment>
                        Step 2: Implement the Menu, Link and Icon modules as shown bellow
                        <Segment tertiary>
                            <Image bordered rounded size='medium' src='https://i.imgur.com/DyX7ulZ.png'/>
                        </Segment>
                        NOTE: Throughout this tutorial "inverted" will be a frequently used attribute. The purpose of this attribute is that it inverts the original colour of the specified element. In this case the Menu element went from white to black.
                        <Header as="h4">Results</Header>
                        <Segment tertiary>
                            <Image bordered rounded size='massive' src='https://i.imgur.com/XiWuRhB.png'/>
                        </Segment>
                    </Container>
                </Segment>
                <Segment secondary>
                    <Header as="h1">Creating the Initial Welcome Screen with a Button</Header>
                    <Container>
                        Step 1: Import the modules needed
                        <Segment tertiary>
                            <Image bordered rounded size='medium' src='https://i.imgur.com/neNezKp.png'/>
                        </Segment>
                        Step 2: Implement these modules to create a welcome page of your choice. This part of the page will be the initial information your viewer will see. 
                        <Segment tertiary>
                            <Image bordered rounded size='medium' src='https://i.imgur.com/RmlYNSU.png'/>
                        </Segment>
                        Step 3: Add this to the code in order to display a link for the user to follow. Buttons can also be implemented in the same manner in a different page. 
                        <Segment tertiary>
                            <Image bordered rounded size='large' src='https://i.imgur.com/OnQcZsf.png'/>
                        </Segment>
                        <Header as="h4">Results</Header>
                        <Segment tertiary>
                            <Image bordered rounded size='big' src='https://i.imgur.com/gYMRArM.png'/>
                        </Segment>
                    </Container>
                </Segment>
                <Segment secondary>
                    <Header as="h1">Creating a Grid View and Adding an Image</Header>
                    <Container>
                        Step 1: Import the modules needed
                        <Segment tertiary>
                            <Image bordered rounded size='medium' src='https://i.imgur.com/yxJzuUU.png'/>
                        </Segment>
                        Step 2: Implement the grid module in the following manner. This is a useful way to portray more information to your viewer in a visually appealing way.
                        <Segment tertiary>
                            <Image bordered rounded size='massive' src='https://i.imgur.com/O439V5r.png'/>
                        </Segment>
                        Step 3: To add an image into the grid follow this code. This could also be implemented in the same way outside of a Grid tag. 
                        <Segment tertiary>
                            <Image bordered rounded size='massive' src='https://i.imgur.com/VPjGPxR.png'/>
                        </Segment>
                        <Header as="h4">Results</Header>
                        <Segment tertiary>
                            <Image bordered rounded size='big' src='https://i.imgur.com/lUopBQ1.png'/>
                        </Segment>
                    </Container>
                </Segment>
                <Segment secondary>
                    <Header as="h1">Creating a Footer</Header>
                    <Container>
                        Step 1: Import the following necessary modules
                        <Segment tertiary>
                            <Image bordered rounded size='medium' src='https://i.imgur.com/uQGwb0u.png'/>
                        </Segment>
                        Step 2: The following code uses a segment and a grid in order to create a footer for the webpage
                        <Segment tertiary>
                            <Image bordered rounded size='large' src='https://i.imgur.com/igY0Qtf.png'/>
                        </Segment>
                        <Header as="h4">Results</Header>
                        <Segment tertiary>
                            <Image bordered rounded size='massive' src='https://i.imgur.com/fFdbUN6.png'/>
                        </Segment>
                    </Container>
                </Segment>
                <Segment secondary>
                    <Header as="h1">Text Manipulation</Header>
                    <Container>
                        Step 1: How to manipulate text size
                        <Segment tertiary>
                            <Image bordered rounded size='medium' src='https://i.imgur.com/fMgr8HJ.png'/>
                        </Segment>
                        Step 2: Creating headers
                        <Segment tertiary>
                            <Image bordered rounded size='medium' src='https://i.imgur.com/4K8ll4j.png'/>
                        </Segment>
                        NOTE: Header is imported from the semantic-ui-react module. In this example there are two headers of different sizes according to their as attribute which is set to h1 and h2 for the second header element.
                        <Header as="h4">Results</Header>
                        <Segment tertiary>
                            <Image bordered rounded size='large' src='https://i.imgur.com/yv2tuTt.png'/>
                        </Segment>
                    </Container>
                </Segment>
            </Segment>
        )
    }
}

export default Tutorial
const questions = [
    {
      id: 1,
      title: 'What are some of the advantages of HTML5 over its previous versions?',
      info:
        `Some advantages of HTML5 are:
        1. It has Multimedia Support.
        2. It has capabilities to store offline data using SQL databases and application cache.
        3. Javascript can be run in the background.
        4. HTML5 also allows users to draw various shapes like rectangles, circles, triangles, etc.
        5. Included new Semantic tags and form control tags.`,
    },
    {
      id: 2,
      title: 'How can we include audio or video in a webpage?',
      info:
        'HTML5 provides two tags: <audio> and <video> tags using which we can add the audio or video directly in the webpage.',
    },
    {
      id: 3,
      title: 'Are the HTML tags and elements the same thing?',
      info:
        'No. HTML elements are defined by a starting tag, may contain some content and a closing tag.For example, <h1>Heading 1</h1> is a HTML element but just <h1> is a starting tag and </h1> is a closing tag.',
    },
    {
      id: 4,
      title: 'What are tags and attributes in HTML?',
      info:
        'Tags are the primary component of the HTML which defines how the content will be structured/ formatted, whereas Attributes are used along with the HTML tags to define the characteristics of the element. For example, <p align=”center”>Interview questions</p>, in this the ‘align’ is the attribute using which we will align the paragraph to show in the center of the view.',
    },
    {
      id: 5,
      title: 'What are void elements in HTML?',
      info:
        'HTML elements which do not have closing tags or do not need to be closed are Void elements. For Example <br />, <img />, <hr />, etc.',
    },
  ]
  export default questions
  
import { SectionsLayout } from './SectionElements';

import Section from './Section';

const ArticleGrid = (props) => {
  
    console.log('ArticleGrid props', props);
    return (
      <>

        <SectionsLayout>
          {props && props.data && props.data.section_stories
            ? props.data.section_stories.map((section) => (
                <Section key={section.type} data={section} />
              ))
            : null}
        </SectionsLayout>
        
        </>
    );
  };
  
  export default ArticleGrid;
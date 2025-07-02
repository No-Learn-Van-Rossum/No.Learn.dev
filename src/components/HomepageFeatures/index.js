import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import tree from '../../../static/img/tree.png';
import montain from '../../../static/img/montain.png';
import  js from '../../../static/img/js.png'



const FeatureList = [
  {
    title: 'Python',
    svg:  montain ,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
    link:"/python"
  },
  {
    title: 'HTML, CSS',
    svg: js,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
    link:"/html-and-css"
  },
  {
    title: 'JavaScript',
    svg: tree,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
    link:"/javascript"
  },
];

function Feature({svg, title, description,link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} role="img"  src={svg}></img>
      </div>
      <div className="text--center__padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p className='card__text--center'>{description}</p>
      </div>
        <div className='start-button'>
          <Link
            className="button button--secondary button--lg"
            to={`/docs${link}`}>
            Let's Start ⏱️
          </Link>
        </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

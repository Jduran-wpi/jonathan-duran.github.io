import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'About me',
    Svg: require('@site/static/img/profile.svg').default,
    description: (
      <>
        Hi, I’m Jonathan Duran — a software developer, computer science enthusiast 
        and U.S. Air Force veteran based in Massachusetts.
        With over a decade of hands-on experience my career has taken me from managing 
        secure networks in the Air National Guard to working on mission-critical software 
        for the U.S. Department of Defense and contributing to cloud-native DevSecOps pipelines 
        in enterprise environments. Whether I’m deploying containerized applications, conducting 
        vulnerability assessments, or automating compliance in CI/CD workflows, 
        I bring a commitment to reliability, security, and continuous improvement.
        I hold 2 A.S. in Computer Studies/Information Technology, B.S. and M.S. in Computer Science, 
        an active DoD security clearance, and multiple certifications including CompTIA Security+ and CySA+. 
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={styles.featureContainer}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p className={styles.desc}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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

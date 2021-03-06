/* eslint-disable max-len */
import React from 'react';
import TimelineEvent from './TimelineEvent/TimelineEvent';
import historyData from './historyData';
import styles from './Timeline.css';

function Timeline() {
  return (
    <div className={styles.timeline}>
      {Object.keys(historyData).map(year => (
        <div className={styles.segment} key={year}>
          <div className={styles.date}>
            <h3>{year}</h3>
          </div>

          <div className={styles.vertLine}>
            <div className={styles.line} />
            <div className={styles.bubble} />
          </div>

          <div className={styles.timelineEvent}>
            {historyData[year].map(({ title, content }) => (
              <TimelineEvent key={`${year} - ${title}`} title={title} content={content} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;

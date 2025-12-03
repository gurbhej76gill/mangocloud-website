import React from 'react';
import DefaultFooter from '@theme-original/Footer';
import RouterArchitectsLink from '@site/src/components/RouterArchitectsLink';

export default function Footer(props) {
  return (
    <DefaultFooter
      {...props}
      copyright={
        <span>
          MangoCloud is an open-source project maintained by{' '}
          <RouterArchitectsLink variant="footer" />
          .
        </span>
      }
    />
  );
}

// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['intro-overview', 'tutorial-basics/intro-getting-started'],
    },
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'tutorial-basics/architecture-system-architecture',
        'tutorial-basics/architecture-services-overview',
      ],
    },
    {
      type: 'category',
      label: 'Cloud Deployment',
      items: [
        'deployment/cloud/deployment-cloud-deploying-mangocloud',
        'deployment/cloud/deployment-cloud-installation-setup',
        'deployment/cloud/deployment-cloud-certificates-domains',
        'deployment/cloud/deployment-cloud-starting-verifying-the-stack',
      ],
    },
    {
      type: 'category',
      label: 'Device Onboarding',
      items: [
        'operations/device-onboarding/operations-device-onboarding-onboarding-overview',
        'operations/device-onboarding/operations-device-onboarding-device-trust-certificates',
        'operations/device-onboarding/operations-device-onboarding-gatewayjson-configuration',
        'operations/device-onboarding/operations-device-onboarding-connecting-devices-to-controller',
        'operations/device-onboarding/operations-device-onboarding-verification-troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Device Operations (OWGW)',
      items: [
        'operations/device-operations-owgw/operations-device-operations-owgw-device-actions-overview',
        {
          type: 'category',
          label: 'Identification & Recovery',
          items: [
            'operations/device-operations-owgw/operations-device-operations-owgw-blink',
            'operations/device-operations-owgw/operations-device-operations-owgw-factory-reset',
            'operations/device-operations-owgw/operations-device-operations-owgw-reboot',
          ],
        },
        'operations/device-operations-owgw/operations-device-operations-owgw-firmware-management',
        'operations/device-operations-owgw/operations-device-operations-owgw-telemetry-monitoring',
        {
          type: 'category',
          label: 'Diagnostics',
          items: [
            'operations/device-operations-owgw/operations-device-operations-owgw-script',
            'operations/device-operations-owgw/operations-device-operations-owgw-trace',
            'operations/device-operations-owgw/operations-device-operations-owgw-wi-fi-scan',
            'operations/device-operations-owgw/operations-device-operations-owgw-rtty',
          ],
        },
        'operations/device-operations-owgw/operations-device-operations-owgw-command-execution-status',
      ],
    },
    {
      type: 'category',
      label: 'Configuration Management (OWGW)',
      items: [
        {
          type: 'category',
          label: 'Default Device Configurations',
          items: [
            'operations/configuration-management-owgw/operations-configuration-management-owgw-device-type-defaults',
          ],
        },
        {
          type: 'category',
          label: 'Applying Configurations to Devices',
          items: [
            'operations/configuration-management-owgw/operations-configuration-management-owgw-import-json',
            'operations/configuration-management-owgw/operations-configuration-management-owgw-ui-based-editing',
            'operations/configuration-management-owgw/operations-configuration-management-owgw-expert-mode',
          ],
        },
        'operations/configuration-management-owgw/operations-configuration-management-owgw-reapplying-known-good-configs',
      ],
    },
    {
      type: 'category',
      label: 'Provisioning & Hierarchy (OWPROV)',
      items: [
        'operations/provisioning-hierarchy-owprov/operations-provisioning-hierarchy-owprov-provisioning-model-overview',
        {
          type: 'category',
          label: 'Entities & Venues',
          items: [
            'operations/provisioning-hierarchy-owprov/operations-provisioning-hierarchy-owprov-creating-entities',
            'operations/provisioning-hierarchy-owprov/operations-provisioning-hierarchy-owprov-creating-venues',
          ],
        },
        'operations/provisioning-hierarchy-owprov/operations-provisioning-hierarchy-owprov-operators',
        'operations/provisioning-hierarchy-owprov/operations-provisioning-hierarchy-owprov-subscribers',
        'operations/provisioning-hierarchy-owprov/operations-provisioning-hierarchy-owprov-adding-devices-to-venues',
        'operations/provisioning-hierarchy-owprov/operations-provisioning-hierarchy-owprov-provisioning-workflow-end-to-end',
      ],
    },
    {
      type: 'category',
      label: 'Configuration Hierarchy & Conflict Resolution',
      items: [
        'operations/configuration-hierarchy-conflict/operations-configuration-hierarchy-conflict-why-hierarchy-matters',
        {
          type: 'category',
          label: 'Inheritance Flow',
          items: [
            'operations/configuration-hierarchy-conflict/operations-configuration-hierarchy-conflict-entity-venue-device',
          ],
        },
        'operations/configuration-hierarchy-conflict/operations-configuration-hierarchy-conflict-computed-configuration',
        'operations/configuration-hierarchy-conflict/operations-configuration-hierarchy-conflict-conflict-rules-weights',
        'operations/configuration-hierarchy-conflict/operations-configuration-hierarchy-conflict-common-design-patterns',
      ],
    },
    {
      type: 'category',
      label: 'Security & Governance',
      items: [
        'operations/security-governance/operations-security-governance-device-blacklisting',
        'operations/security-governance/operations-security-governance-access-control-concepts',
        'operations/security-governance/operations-security-governance-multi-tenant-considerations',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting & Operations',
      items: [
        'operations/troubleshooting-operations/operations-troubleshooting-operations-common-failure-scenarios',
        'operations/troubleshooting-operations/operations-troubleshooting-operations-device-not-connecting',
        'operations/troubleshooting-operations/operations-troubleshooting-operations-configuration-not-applying',
        'operations/troubleshooting-operations/operations-troubleshooting-operations-certificate-issues',
        'operations/troubleshooting-operations/operations-troubleshooting-operations-logs-where-to-look',
      ],
    },
    {
      type: 'category',
      label: 'Hardware',
      items: ['hardware-supported-devices'],
    },
    {
      type: 'category',
      label: 'Community',
      items: ['community-contributing', 'community-cla'],
    },
    {
      type: 'category',
      label: 'FAQ',
      items: [
        'faq/faq',
        'faq/faq-platform-architecture',
        'faq/faq-manufacturing-odm',
        'faq/faq-hardware-requirements',
        'faq/faq-flash-layout-partitioning',
      ],
    },
  ],
};

export default sidebars;

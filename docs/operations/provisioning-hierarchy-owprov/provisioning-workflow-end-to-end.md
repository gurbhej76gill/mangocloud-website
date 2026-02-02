---
id: operations-provisioning-hierarchy-owprov-provisioning-workflow-end-to-end
slug: /operations/provisioning-hierarchy-owprov/provisioning-workflow-end-to-end
title: Provisioning Workflow (End-to-End)
---

1. Log in to OWPROV-UI: `https://<DOMAIN_NAME>:8443`.
   ![OWPROV login](/img/operations/mango-cloud-operations-guide/image27.png)
2. Default credentials (if unchanged): `tip@ucentral.com` / `openwifi`.
3. Ensure the device exists in Inventory. If missing, add it.
   ![Inventory device check](/img/operations/mango-cloud-operations-guide/image18.png)
4. Create or confirm Entity and Venue.
   ![Create Entity](/img/operations/mango-cloud-operations-guide/image39.png)
   ![Create Venue](/img/operations/mango-cloud-operations-guide/image14.png)
5. Add configuration templates:
   - Entity-level for global defaults.
   - Venue-level for site-specific overrides.
   ![Add configuration at Entity level](/img/operations/mango-cloud-operations-guide/image16.png)
   ![Add configuration at Venue level](/img/operations/mango-cloud-operations-guide/image34.png)
6. Assign the device to the correct Entity/Venue.
7. Add device-specific overrides in the device details page.
   ![Device-specific overrides](/img/operations/mango-cloud-operations-guide/image40.png)
   ![Device configuration details](/img/operations/mango-cloud-operations-guide/image29.png)
8. Save the configuration for the device.
9. Open the device details page and check Computed Configuration.
   ![Computed configuration](/img/operations/mango-cloud-operations-guide/image9.png)
10. Click Push Configuration.
   ![Push configuration](/img/operations/mango-cloud-operations-guide/image17.png)
11. Verify the configuration status shows Success/Completed.
    ![Configuration push status](/img/operations/mango-cloud-operations-guide/image55.png)
    ![Provisioning success](/img/operations/mango-cloud-operations-guide/image11.png)

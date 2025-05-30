const mongoose = require('../config/db');

const edgeCaseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    'tbl_historical_customer_interaction_event_stream_archival_repository_for_long_term_analytics_and_compliance_governance_across_multi_region_distributed_clusters_with_redudant_replication_and_policy_based_lifecycle_management_enabled_2025_05_11_metadata': { type: String, required: true },
    email: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const collection = 'EdgeCaseColumn256';
module.exports = mongoose.model('EdgeCase256', edgeCaseSchema, collection);

const mongoose = require('../config/db');

const edgeCaseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const collection = 'tbl_internationalized_content_localization_workflow_tasks_and_multilingual_translation_memory_cache_with_neural_machine_translation_quality_estimation_feedback_loops_and_region_specific_regulatory_compliance_flags_for_global_ecommerce_platform_release_candidate_9_long_term_support_branch';
module.exports = mongoose.model('EdgeCase257', edgeCaseSchema, collection);

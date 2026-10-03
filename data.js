window.REVIEW_DATA={
  "meta": {
    "id": "TCSVT-29693-2026",
    "title": "Beyond Homogeneous Adaptation",
    "fullTitle": "Beyond Homogeneous Adaptation: Decoupled Control for Sample- and Layer-Aware Test-Time Robustness in Temporally Correlated Streams",
    "snapshot": "3 October 2026",
    "pages": {
      "original": 14,
      "revised": 14
    },
    "hashes": {
      "original": {
        "pdf": "20742ca85f2cef2a901f30c2e848bac1262f3a7a60b46e2403f6fb02aa40144c",
        "tex": "1108279736019bcae2bd95c497c8d7f1830f8f65e2eeb3d607f431ad0f90efad"
      },
      "revised": {
        "pdf": "b7778846e6e6274e30525e00c9219f039cdada74e56fa43764ec2a549dcb84f6",
        "tex": "4ce68717776b698f36cf2c381888357639f7a160ee60954381b736c361252d9e"
      }
    },
    "fullResponseSource": "revise/Response_to_Editors_and_Reviewers_TCSVT_GPT5-6_v12/Response_to_Editors_and_Reviewers_TCSVT_GPT5-6_v12.tex",
    "fullResponseSha256": "87d024be9617a1373fc91cc647dee9b035c43a03dbe312c68d0313a120bbd980",
    "responsePages": 17,
    "responsePdfSha256": "831294f3adf62464e94965095735281362fcc8a41521137c30d41c272d4a1cf9",
    "responseRevision": "v12"
  },
  "comments": [
    {
      "id": "eic",
      "group": "Editors",
      "label": "EIC",
      "title": "Related work and novelty",
      "comment": "What are the 3–5 papers published in IEEE TCSVT which are most closely related to your manuscript, and what is distinctive or new about your current manuscript relative to these papers?",
      "response": [
        "Section II now discusses the following four closely related TCSVT studies. For each study, we explain how its adaptation mechanism relates to DCF and where DCF differs.",
        "[31] J. Liu, J. Xie, F. Zhou, and S. He, \"Question Type-Aware Debiasing for Test-Time Visual Question Answering Model Adaptation,\" IEEE TCSVT, vol. 34, no. 11, pp. 10805–10816, 2024."
      ],
      "changes": [
        "tcsvt-literature",
        "overview"
      ],
      "metrics": [],
      "fullResponse": [
        {
          "kind": "heading",
          "html": "Closely related TCSVT papers",
          "text": "Closely related TCSVT papers"
        },
        {
          "kind": "paragraph",
          "html": "Section II now discusses the following four closely related TCSVT studies. For each study, we explain how its adaptation mechanism relates to DCF and where DCF differs.",
          "text": "Section II now discusses the following four closely related TCSVT studies. For each study, we explain how its adaptation mechanism relates to DCF and where DCF differs."
        },
        {
          "kind": "paragraph",
          "html": "<strong>[31]</strong> J. Liu, J. Xie, F. Zhou, and S. He, \"Question Type-Aware Debiasing for Test-Time Visual Question Answering Model Adaptation,\" IEEE TCSVT, vol. 34, no. 11, pp. 10805–10816, 2024.",
          "text": "[31] J. Liu, J. Xie, F. Zhou, and S. He, \"Question Type-Aware Debiasing for Test-Time Visual Question Answering Model Adaptation,\" IEEE TCSVT, vol. 34, no. 11, pp. 10805–10816, 2024."
        },
        {
          "kind": "paragraph",
          "html": "<strong>QED</strong> addresses unreliable test-time supervision in VQA by using question-type-aware entropy and negative perturbations to identify biased samples. Both QED and DCF address the reliability of samples used for adaptation. DCF extends reliability control across the full adaptation loop: it combines confidence with a structured Fourier stress response to route target evidence, reuses routed-away samples through soft optimal-transport geometry repair, and selectively retains the resulting model update across layer groups.",
          "text": "QED addresses unreliable test-time supervision in VQA by using question-type-aware entropy and negative perturbations to identify biased samples. Both QED and DCF address the reliability of samples used for adaptation. DCF extends reliability control across the full adaptation loop: it combines confidence with a structured Fourier stress response to route target evidence, reuses routed-away samples through soft optimal-transport geometry repair, and selectively retains the resulting model update across layer groups."
        },
        {
          "kind": "paragraph",
          "html": "<strong>[29]</strong> J. Liu and Z. Yang, \"Test-Time Adaptation for Real-World Video Adverse Weather Restoration With Meta Batch Normalization,\" IEEE TCSVT, vol. 35, no. 6, pp. 5533–5544, 2025.",
          "text": "[29] J. Liu and Z. Yang, \"Test-Time Adaptation for Real-World Video Adverse Weather Restoration With Meta Batch Normalization,\" IEEE TCSVT, vol. 35, no. 6, pp. 5533–5544, 2025."
        },
        {
          "kind": "paragraph",
          "html": "<strong>MetaBN</strong> improves adverse-weather video restoration through source-stage meta-learning of normalization behavior and test-time self-supervised updates. MetaBN focuses on rapid task-specific adaptation through meta-trained BN parameters. DCF starts from an ordinary pre-trained recognition model and directly controls the reliability and persistence of online target-driven updates in temporally correlated streams. The source model provides the reference for curvature-aware retention throughout online adaptation.",
          "text": "MetaBN improves adverse-weather video restoration through source-stage meta-learning of normalization behavior and test-time self-supervised updates. MetaBN focuses on rapid task-specific adaptation through meta-trained BN parameters. DCF starts from an ordinary pre-trained recognition model and directly controls the reliability and persistence of online target-driven updates in temporally correlated streams. The source model provides the reference for curvature-aware retention throughout online adaptation."
        },
        {
          "kind": "paragraph",
          "html": "<strong>[30]</strong> C. Zhang et al., \"Collaborative Model and Data Adaptation at Test Time,\" IEEE TCSVT, vol. 36, no. 6, pp. 8980–8994, 2026.",
          "text": "[30] C. Zhang et al., \"Collaborative Model and Data Adaptation at Test Time,\" IEEE TCSVT, vol. 36, no. 6, pp. 8980–8994, 2026."
        },
        {
          "kind": "paragraph",
          "html": "<strong>CMDA</strong> jointly adapts the model and the test data, using diffusion-based data adaptation to move target samples toward the source distribution while updating the model. DCF adapts directly to the incoming target stream through three coordinated decisions: sample routing determines which evidence may drive consistency learning, routed-away samples preserve target geometry through OT, and CLR decides layer by layer how much of the candidate update is retained.",
          "text": "CMDA jointly adapts the model and the test data, using diffusion-based data adaptation to move target samples toward the source distribution while updating the model. DCF adapts directly to the incoming target stream through three coordinated decisions: sample routing determines which evidence may drive consistency learning, routed-away samples preserve target geometry through OT, and CLR decides layer by layer how much of the candidate update is retained."
        },
        {
          "kind": "paragraph",
          "html": "<strong>[36]</strong> J. Han et al., \"Unleashing the Potential of All Test Samples: Mean-Shift Guided Test-Time Adaptation,\" IEEE TCSVT, vol. 36, no. 8, pp. 11323–11335, 2026.",
          "text": "[36] J. Han et al., \"Unleashing the Potential of All Test Samples: Mean-Shift Guided Test-Time Adaptation,\" IEEE TCSVT, vol. 36, no. 8, pp. 11323–11335, 2026."
        },
        {
          "kind": "paragraph",
          "html": "<strong>MS-TTA</strong> is especially relevant to our treatment of samples that are not suitable for direct confident supervision. It refines all CLIP test features using training-free mean shift and a cache, thereby extracting value from low-confidence samples. DCF assigns different adaptation roles to the two subsets: trusted samples provide direct consistency supervision, whereas routed-away samples contribute only through soft class-geometry repair. This separation prevents weak evidence from entering the label-like objective while still exploiting its distributional structure; CLR then controls whether the resulting update should persist in each layer group.",
          "text": "MS-TTA is especially relevant to our treatment of samples that are not suitable for direct confident supervision. It refines all CLIP test features using training-free mean shift and a cache, thereby extracting value from low-confidence samples. DCF assigns different adaptation roles to the two subsets: trusted samples provide direct consistency supervision, whereas routed-away samples contribute only through soft class-geometry repair. This separation prevents weak evidence from entering the label-like objective while still exploiting its distributional structure; CLR then controls whether the resulting update should persist in each layer group."
        },
        {
          "kind": "paragraph",
          "html": "These studies address complementary aspects of reliable, efficient, and stable test-time adaptation. DCF advances this line of work by coupling three control decisions that are otherwise handled separately: <em>which target evidence is admitted to direct adaptation, how non-admitted evidence is still exploited, and where in the network the resulting update is allowed to persist</em>. This coordinated route–adapt–retain control directly targets the error-amplifying feedback loop that emerges in temporally correlated streams.",
          "text": "These studies address complementary aspects of reliable, efficient, and stable test-time adaptation. DCF advances this line of work by coupling three control decisions that are otherwise handled separately: which target evidence is admitted to direct adaptation, how non-admitted evidence is still exploited, and where in the network the resulting update is allowed to persist. This coordinated route–adapt–retain control directly targets the error-amplifying feedback loop that emerges in temporally correlated streams."
        },
        {
          "kind": "location",
          "html": "<strong>Changes in the manuscript:</strong> Section II, \"Related Work,\" p. 3; references [29], [30], [31], and [36].",
          "text": "Changes in the manuscript: Section II, \"Related Work,\" p. 3; references [29], [30], [31], and [36]."
        },
        {
          "kind": "heading",
          "html": "Distinctive contribution",
          "text": "Distinctive contribution"
        },
        {
          "kind": "paragraph",
          "html": "The central novelty of DCF is a unified route–adapt–retain control architecture for the coupled sample–layer dynamics of online TTA. The TCSVT studies above emphasize sample reliability, normalization behavior, data adaptation, or feature refinement. DCF links three decisions in one online loop: PSR selects evidence for direct consistency supervision; RGR reuses routed-away samples as target-geometry constraints; and CLR treats the sample-side update as a candidate whose persistence is determined separately for different layer groups. By linking these decisions, DCF controls reliability and stability throughout the online adaptation loop.",
          "text": "The central novelty of DCF is a unified route–adapt–retain control architecture for the coupled sample–layer dynamics of online TTA. The TCSVT studies above emphasize sample reliability, normalization behavior, data adaptation, or feature refinement. DCF links three decisions in one online loop: PSR selects evidence for direct consistency supervision; RGR reuses routed-away samples as target-geometry constraints; and CLR treats the sample-side update as a candidate whose persistence is determined separately for different layer groups. By linking these decisions, DCF controls reliability and stability throughout the online adaptation loop."
        },
        {
          "kind": "paragraph",
          "html": "This coupling is important under temporally correlated streams because an erroneous target update can simultaneously distort the evidence used by later samples and accumulate unevenly across network depth. DCF directly controls both sides of this feedback process. The component and mechanism-level ablations in Section IV-C isolate the gains from routing, geometry repair, and layer-wise retention, while the long-horizon experiments show that their coordination prevents the late-stage collapse observed in multiple advanced TTA baselines.",
          "text": "This coupling is important under temporally correlated streams because an erroneous target update can simultaneously distort the evidence used by later samples and accumulate unevenly across network depth. DCF directly controls both sides of this feedback process. The component and mechanism-level ablations in Section IV-C isolate the gains from routing, geometry repair, and layer-wise retention, while the long-horizon experiments show that their coordination prevents the late-stage collapse observed in multiple advanced TTA baselines."
        },
        {
          "kind": "paragraph",
          "html": "<strong>Selected revised text</strong>",
          "text": "Selected revised text"
        },
        {
          "kind": "excerpt",
          "html": "\"DCF instead models their interaction as a coupled sample–layer feedback process, jointly determining which samples drive adaptation, how routed-away samples preserve target structure, and which layers retain the resulting updates.\"",
          "text": "\"DCF instead models their interaction as a coupled sample–layer feedback process, jointly determining which samples drive adaptation, how routed-away samples preserve target structure, and which layers retain the resulting updates.\""
        },
        {
          "kind": "location",
          "html": "<strong>Changes in the manuscript:</strong> Sections I–II, pp. 1–3; Section III-B, p. 3, Eqs. (2)–(3); Section IV-C, Table III and the mechanism-level analyses, pp. 8–12.",
          "text": "Changes in the manuscript: Sections I–II, pp. 1–3; Section III-B, p. 3, Eqs. (2)–(3); Section IV-C, Table III and the mechanism-level analyses, pp. 8–12."
        }
      ],
      "responseWordCount": 725,
      "responseSourceSections": [
        "E1",
        "E2"
      ]
    },
    {
      "id": "ae1",
      "group": "Editors",
      "label": "AE1",
      "title": "Probe justification",
      "comment": "The Fourier-based stress probe lacks formal theoretical justification, and a sensitivity study on the choice of frequency range and perturbation strength is needed.",
      "response": [
        "We now explain the Fourier probe using a local directional-sensitivity analysis and controlled experiments. PCS is the positive drop in the original predicted-class probability; Response R1.1 below makes this positive-part operation explicit in its local expansion. The analysis explains what PCS measures. Shape–texture interventions, paired shortcut counterfactuals, matched-coverage purity analysis, and Colored-MNIST then test how that response relates to routing reliability. Figure 12(c) further evaluates frequency range and perturbation strength around the default setting."
      ],
      "changes": [
        "probe-theory",
        "shape-texture",
        "probe-sensitivity"
      ],
      "metrics": [],
      "fullResponse": [
        {
          "kind": "paragraph",
          "html": "We now explain the Fourier probe using a local directional-sensitivity analysis and controlled experiments. PCS is the positive drop in the original predicted-class probability; Response R1.1 below makes this positive-part operation explicit in its local expansion. The analysis explains what PCS measures. Shape–texture interventions, paired shortcut counterfactuals, matched-coverage purity analysis, and Colored-MNIST then test how that response relates to routing reliability. Figure 12(c) further evaluates frequency range and perturbation strength around the default setting.",
          "text": "We now explain the Fourier probe using a local directional-sensitivity analysis and controlled experiments. PCS is the positive drop in the original predicted-class probability; Response R1.1 below makes this positive-part operation explicit in its local expansion. The analysis explains what PCS measures. Shape–texture interventions, paired shortcut counterfactuals, matched-coverage purity analysis, and Colored-MNIST then test how that response relates to routing reliability. Figure 12(c) further evaluates frequency range and perturbation strength around the default setting."
        },
        {
          "kind": "location",
          "html": "<strong>Changes in the manuscript:</strong> Section III-C, p. 4; Section IV-C, Tables IV–VI, pp. 8–9, and Fig. 12(c), p. 12. See Response R1.1.",
          "text": "Changes in the manuscript: Section III-C, p. 4; Section IV-C, Tables IV–VI, pp. 8–9, and Fig. 12(c), p. 12. See Response R1.1."
        }
      ],
      "responseWordCount": 96,
      "responseSourceSections": [
        "AE1"
      ]
    },
    {
      "id": "ae2",
      "group": "Editors",
      "label": "AE2",
      "title": "Geometry repair robustness",
      "comment": "The routed geometry repair module should be compared against simpler alternatives, and potential failure cases when the routed set is small or the prior estimate is noisy should be discussed.",
      "response": [
        "We added the requested alternatives and tested how RGR behaves as the proportion of routed-away samples changes. Table VII compares discarding routed-away samples, feature moment matching, prototype contrastive alignment, fixed-uniform-prior OT, and the proposed dynamic-prior OT while keeping the remaining DCF components unchanged. We further added a routing-ratio stress test from 10% to 90% routed-away samples and clarified the prior EMA, uniform interpolation, centroid momentum, and empty-set safeguards. These tests show stable performance when enough trusted samples remain, and a clear decline when routed-away samples dominate the batch."
      ],
      "changes": [
        "rgr-alternatives",
        "routing-ratio",
        "prior-safeguards"
      ],
      "metrics": [],
      "fullResponse": [
        {
          "kind": "paragraph",
          "html": "We added the requested alternatives and tested how RGR behaves as the proportion of routed-away samples changes. Table VII compares discarding routed-away samples, feature moment matching, prototype contrastive alignment, fixed-uniform-prior OT, and the proposed dynamic-prior OT while keeping the remaining DCF components unchanged. We further added a routing-ratio stress test from 10% to 90% routed-away samples and clarified the prior EMA, uniform interpolation, centroid momentum, and empty-set safeguards. These tests show stable performance when enough trusted samples remain, and a clear decline when routed-away samples dominate the batch.",
          "text": "We added the requested alternatives and tested how RGR behaves as the proportion of routed-away samples changes. Table VII compares discarding routed-away samples, feature moment matching, prototype contrastive alignment, fixed-uniform-prior OT, and the proposed dynamic-prior OT while keeping the remaining DCF components unchanged. We further added a routing-ratio stress test from 10% to 90% routed-away samples and clarified the prior EMA, uniform interpolation, centroid momentum, and empty-set safeguards. These tests show stable performance when enough trusted samples remain, and a clear decline when routed-away samples dominate the batch."
        },
        {
          "kind": "location",
          "html": "<strong>Changes in the manuscript:</strong> Section III-D, pp. 4–5; Section IV-C, Tables VII–VIII, p. 10; Algorithm 1, p. 6. See Response R1.2.",
          "text": "Changes in the manuscript: Section III-D, pp. 4–5; Section IV-C, Tables VII–VIII, p. 10; Algorithm 1, p. 6. See Response R1.2."
        }
      ],
      "responseWordCount": 109,
      "responseSourceSections": [
        "AE2"
      ]
    },
    {
      "id": "ae3",
      "group": "Editors",
      "label": "AE3",
      "title": "Computational overhead",
      "comment": "Computational overhead, including FLOPs and memory, should be reported in detail alongside a discussion of possible approximations for practical deployment.",
      "response": [
        "Table XI now provides a complete resource comparison for DCF and representative baselines, including FLOPs, peak GPU memory, per-image latency, and accuracy under the same A100 evaluation setting. Full DCF achieves 43.48% long-horizon average accuracy with 24.6 GFLOPs, 14,690 MB peak memory, and 5.20 ms/image. DCF-Lite reduces the cost to 9.4 GFLOPs and 6,080 MB with 3.19 ms/image while retaining 42.06% accuracy, corresponding to reductions of 61.8% in FLOPs and 58.6% in peak memory for only a 1.42 pp accuracy decrease. Figure 12(d) and Table IX further quantify low-iteration Sinkhorn and curvature-proxy approximations, making the accuracy–efficiency trade-off explicit."
      ],
      "changes": [
        "efficiency",
        "sinkhorn"
      ],
      "metrics": [],
      "fullResponse": [
        {
          "kind": "paragraph",
          "html": "Table XI now provides a complete resource comparison for DCF and representative baselines, including FLOPs, peak GPU memory, per-image latency, and accuracy under the same A100 evaluation setting. Full DCF achieves 43.48% long-horizon average accuracy with 24.6 GFLOPs, 14,690 MB peak memory, and 5.20 ms/image. DCF-Lite reduces the cost to 9.4 GFLOPs and 6,080 MB with 3.19 ms/image while retaining 42.06% accuracy, corresponding to reductions of 61.8% in FLOPs and 58.6% in peak memory for only a 1.42 pp accuracy decrease. Figure 12(d) and Table IX further quantify low-iteration Sinkhorn and curvature-proxy approximations, making the accuracy–efficiency trade-off explicit.",
          "text": "Table XI now provides a complete resource comparison for DCF and representative baselines, including FLOPs, peak GPU memory, per-image latency, and accuracy under the same A100 evaluation setting. Full DCF achieves 43.48% long-horizon average accuracy with 24.6 GFLOPs, 14,690 MB peak memory, and 5.20 ms/image. DCF-Lite reduces the cost to 9.4 GFLOPs and 6,080 MB with 3.19 ms/image while retaining 42.06% accuracy, corresponding to reductions of 61.8% in FLOPs and 58.6% in peak memory for only a 1.42 pp accuracy decrease. Figure 12(d) and Table IX further quantify low-iteration Sinkhorn and curvature-proxy approximations, making the accuracy–efficiency trade-off explicit."
        },
        {
          "kind": "location",
          "html": "<strong>Changes in the manuscript:</strong> Section IV-C, \"Computational Overhead,\" pp. 11–12; Table XI and Fig. 12(d), p. 12. See Response R1.3.",
          "text": "Changes in the manuscript: Section IV-C, \"Computational Overhead,\" pp. 11–12; Table XI and Fig. 12(d), p. 12. See Response R1.3."
        }
      ],
      "responseWordCount": 118,
      "responseSourceSections": [
        "AE3"
      ]
    },
    {
      "id": "ae4",
      "group": "Editors",
      "label": "AE4",
      "title": "Per-layer behavior",
      "comment": "The per-layer behaviour of the curvature-aware retention mechanism needs further analysis, for example through a heatmap of retention gates over time and corruption types.",
      "response": [
        "Figure 9 now shows the layer-wise retention gates throughout the 225-domain stream and across corruption types. The gates vary with both network depth and corruption type: layer4 remains highly permissive to candidate updates, while earlier and intermediate groups show stronger temporary source anchoring under specific corruptions. The temporal trajectories recover after transient suppression, demonstrating that CLR preserves adaptation capacity through dynamic retention. Table IX further compares control granularities and alternative curvature estimators."
      ],
      "changes": [
        "retention-heatmap",
        "curvature-proxies"
      ],
      "metrics": [],
      "fullResponse": [
        {
          "kind": "paragraph",
          "html": "Figure 9 now shows the layer-wise retention gates throughout the 225-domain stream and across corruption types. The gates vary with both network depth and corruption type: layer4 remains highly permissive to candidate updates, while earlier and intermediate groups show stronger temporary source anchoring under specific corruptions. The temporal trajectories recover after transient suppression, demonstrating that CLR preserves adaptation capacity through dynamic retention. Table IX further compares control granularities and alternative curvature estimators.",
          "text": "Figure 9 now shows the layer-wise retention gates throughout the 225-domain stream and across corruption types. The gates vary with both network depth and corruption type: layer4 remains highly permissive to candidate updates, while earlier and intermediate groups show stronger temporary source anchoring under specific corruptions. The temporal trajectories recover after transient suppression, demonstrating that CLR preserves adaptation capacity through dynamic retention. Table IX further compares control granularities and alternative curvature estimators."
        },
        {
          "kind": "location",
          "html": "<strong>Changes in the manuscript:</strong> Section III-E, pp. 5–6; Section IV-C, Fig. 9 and Table IX, p. 10. See Response R1.4.",
          "text": "Changes in the manuscript: Section III-E, pp. 5–6; Section IV-C, Fig. 9 and Table IX, p. 10. See Response R1.4."
        }
      ],
      "responseWordCount": 92,
      "responseSourceSections": [
        "AE4"
      ]
    },
    {
      "id": "ae5",
      "group": "Editors",
      "label": "AE5",
      "title": "Statistical evidence",
      "comment": "Additionally, statistical significance should be reported for the cross-domain results, where some improvements are marginal.",
      "response": [
        "Figure 11 now reports mean ⟪\\pm⟫ standard deviation over five matched runs, and the accompanying \"Cross-Domain Transfer\" paragraph reports paired significance tests against the strongest aggregate baseline in each transfer setting. On ImageNet-C, DCF achieves a mean gain over No Adapt of ⟪30.30 \\pm 0.39⟫ pp versus ⟪27.95 \\pm 0.05⟫ pp for AEA, with ⟪t(4) = 14.30⟫ and ⟪p = 1.39 \\times 10^{-4}⟫. On DomainNet-126, DCF achieves 61.40% mean accuracy versus 60.13% for DeYO, with ⟪t(4) = 12.01⟫ and ⟪p = 2.75 \\times 10^{-4}⟫. These paired tests establish statistically significant aggregate differences across matched runs; individual transfer cells are reported with their run-to-run variability."
      ],
      "changes": [
        "transfer",
        "domainnet"
      ],
      "metrics": [],
      "fullResponse": [
        {
          "kind": "paragraph",
          "html": "Figure 11 now reports mean <span data-response-math=\"\\pm\" data-display=\"false\">\\pm</span> standard deviation over five matched runs, and the accompanying \"Cross-Domain Transfer\" paragraph reports paired significance tests against the strongest aggregate baseline in each transfer setting. On ImageNet-C, DCF achieves a mean gain over No Adapt of <span data-response-math=\"30.30 \\pm 0.39\" data-display=\"false\">30.30 \\pm 0.39</span> pp versus <span data-response-math=\"27.95 \\pm 0.05\" data-display=\"false\">27.95 \\pm 0.05</span> pp for AEA, with <span data-response-math=\"t(4) = 14.30\" data-display=\"false\">t(4) = 14.30</span> and <span data-response-math=\"p = 1.39 \\times 10^{-4}\" data-display=\"false\">p = 1.39 \\times 10^{-4}</span>. On DomainNet-126, DCF achieves 61.40% mean accuracy versus 60.13% for DeYO, with <span data-response-math=\"t(4) = 12.01\" data-display=\"false\">t(4) = 12.01</span> and <span data-response-math=\"p = 2.75 \\times 10^{-4}\" data-display=\"false\">p = 2.75 \\times 10^{-4}</span>. These paired tests establish statistically significant aggregate differences across matched runs; individual transfer cells are reported with their run-to-run variability.",
          "text": "Figure 11 now reports mean ⟪\\pm⟫ standard deviation over five matched runs, and the accompanying \"Cross-Domain Transfer\" paragraph reports paired significance tests against the strongest aggregate baseline in each transfer setting. On ImageNet-C, DCF achieves a mean gain over No Adapt of ⟪30.30 \\pm 0.39⟫ pp versus ⟪27.95 \\pm 0.05⟫ pp for AEA, with ⟪t(4) = 14.30⟫ and ⟪p = 1.39 \\times 10^{-4}⟫. On DomainNet-126, DCF achieves 61.40% mean accuracy versus 60.13% for DeYO, with ⟪t(4) = 12.01⟫ and ⟪p = 2.75 \\times 10^{-4}⟫. These paired tests establish statistically significant aggregate differences across matched runs; individual transfer cells are reported with their run-to-run variability."
        },
        {
          "kind": "location",
          "html": "<strong>Changes in the manuscript:</strong> Section IV-C, \"Cross-Domain Transfer,\" and Fig. 11, p. 11. See Response R1.6.",
          "text": "Changes in the manuscript: Section IV-C, \"Cross-Domain Transfer,\" and Fig. 11, p. 11. See Response R1.6."
        }
      ],
      "responseWordCount": 120,
      "responseSourceSections": [
        "AE5"
      ]
    },
    {
      "id": "sae",
      "group": "Editors",
      "label": "SAE",
      "title": "Expanded ablation study",
      "comment": "The paper proposes the use of a decoupled control system for reducing bias in target evidence in test-time adaptation using online methods for temporally correlated image streams. The topic is relevant to TCSVT. The paper is complete with contributions, experiments, results, and a limited ablation study.",
      "response": [
        "Thank you for recognizing the relevance and completeness of the work. To address the limited ablation study, we expanded Section IV-C with controlled PSR diagnostics; RGR alternatives, prior ablation, and routing-ratio stress tests; CLR gate visualizations, granularity and proxy comparisons; cross-domain statistics; and DCF-Lite efficiency analysis. These additions clarify how the control mechanisms operate and where their limits arise."
      ],
      "changes": [
        "shape-texture",
        "rgr-alternatives",
        "routing-ratio",
        "curvature-proxies",
        "efficiency",
        "probe-sensitivity",
        "sinkhorn"
      ],
      "metrics": [],
      "fullResponse": [
        {
          "kind": "paragraph",
          "html": "Thank you for recognizing the relevance and completeness of the work. To address the limited ablation study, we expanded Section IV-C with controlled PSR diagnostics; RGR alternatives, prior ablation, and routing-ratio stress tests; CLR gate visualizations, granularity and proxy comparisons; cross-domain statistics; and DCF-Lite efficiency analysis. These additions clarify how the control mechanisms operate and where their limits arise.",
          "text": "Thank you for recognizing the relevance and completeness of the work. To address the limited ablation study, we expanded Section IV-C with controlled PSR diagnostics; RGR alternatives, prior ablation, and routing-ratio stress tests; CLR gate visualizations, granularity and proxy comparisons; cross-domain statistics; and DCF-Lite efficiency analysis. These additions clarify how the control mechanisms operate and where their limits arise."
        },
        {
          "kind": "location",
          "html": "<strong>Changes in the manuscript:</strong> Section IV-C, Tables IV–IX and XI, pp. 8–12; Figs. 9, 11, and 12, pp. 10–12.",
          "text": "Changes in the manuscript: Section IV-C, Tables IV–IX and XI, pp. 8–12; Figs. 9, 11, and 12, pp. 10–12."
        }
      ],
      "responseWordCount": 78,
      "responseSourceSections": [
        "SAE"
      ]
    },
    {
      "id": "r1-1",
      "group": "Reviewer 1",
      "label": "R1.1",
      "title": "Fourier probe justification",
      "comment": "The paper empirically shows that the Fourier perturbation exposes stress-inert predictions, but lacks a formal justification of why frequency-domain stress specifically targets shortcut cues (e.g., texture biases) rather than semantic features. A theoretical analysis—or at least a controlled synthetic experiment where shortcuts are known (e.g., color vs. shape)—would strengthen the claim. Currently, the probe design (random frequency and direction) appears heuristic; a sensitivity study on the choice of frequency range and perturbation strength λ would also help practitioners set these parameters without extensive tuning.",
      "response": [
        "Thank you for this suggestion. We added a local sensitivity analysis, experiments with known shortcut factors, matched-coverage routing diagnostics, and a broader sensitivity study to explain and test the Fourier probe.",
        "Section III-C defines PCS as the positive drop in the probability assigned to the original predicted class under the stressed view. For a fixed input and original predicted class, let ⟪\\delta⟫ be the actual perturbation after clamping and ⟪g_x⟫ the input gradient of that class probability. To make the positive-part operation in Eq. (5) explicit, the local squared-response expansion is ⟪\\displaystyle \\mathbb{E}_q[s(x)^2]\n=\\mathbb{E}_q\\!\\left[\\bigl(-g_x^\\top\\delta\\bigr)_+^2\\right]\n+O\\!\\left(\\mathbb{E}_q\\lVert\\delta\\rVert_2^3\\right).⟫ Thus PCS measures one-sided probability sensitivity along the directions excited by the Fourier probe. Let ⟪Q_q(x)=\\mathbb{E}_q[\\delta\\delta^\\top]⟫ denote the perturbation second-moment matrix. The untruncated quadratic response is ⟪g_x^\\top Q_q(x)g_x⟫; for the positive-part PCS, the leading term retains the truncation and is bounded above by this quadratic response. No zero-mean or symmetry assumption is imposed on the perturbation after clamping."
      ],
      "changes": [
        "probe-theory",
        "shape-texture",
        "colored-mnist",
        "probe-definition",
        "pcs-definition",
        "probe-sensitivity",
        "purity-protocol",
        "sinkhorn"
      ],
      "metrics": [
        [
          "Shortcut AUROC",
          "0.81"
        ],
        [
          "Colored-MNIST",
          "88.91%"
        ]
      ],
      "fullResponse": [
        {
          "kind": "paragraph",
          "html": "Thank you for this suggestion. We added a local sensitivity analysis, experiments with known shortcut factors, matched-coverage routing diagnostics, and a broader sensitivity study to explain and test the Fourier probe.",
          "text": "Thank you for this suggestion. We added a local sensitivity analysis, experiments with known shortcut factors, matched-coverage routing diagnostics, and a broader sensitivity study to explain and test the Fourier probe."
        },
        {
          "kind": "heading",
          "html": "Local squared-response interpretation of PCS",
          "text": "Local squared-response interpretation of PCS"
        },
        {
          "kind": "paragraph",
          "html": "Section III-C defines PCS as the positive drop in the probability assigned to the original predicted class under the stressed view. For a fixed input and original predicted class, let <span data-response-math=\"\\delta\" data-display=\"false\">\\delta</span> be the actual perturbation after clamping and <span data-response-math=\"g_x\" data-display=\"false\">g_x</span> the input gradient of that class probability. To make the positive-part operation in Eq. (5) explicit, the local squared-response expansion is <span data-response-math=\"\\mathbb{E}_q[s(x)^2]\n=\\mathbb{E}_q\\!\\left[\\bigl(-g_x^\\top\\delta\\bigr)_+^2\\right]\n+O\\!\\left(\\mathbb{E}_q\\lVert\\delta\\rVert_2^3\\right).\" data-display=\"true\">\\mathbb{E}_q[s(x)^2]\n=\\mathbb{E}_q\\!\\left[\\bigl(-g_x^\\top\\delta\\bigr)_+^2\\right]\n+O\\!\\left(\\mathbb{E}_q\\lVert\\delta\\rVert_2^3\\right).</span> Thus PCS measures one-sided probability sensitivity along the directions excited by the Fourier probe. Let <span data-response-math=\"Q_q(x)=\\mathbb{E}_q[\\delta\\delta^\\top]\" data-display=\"false\">Q_q(x)=\\mathbb{E}_q[\\delta\\delta^\\top]</span> denote the perturbation second-moment matrix. The untruncated quadratic response is <span data-response-math=\"g_x^\\top Q_q(x)g_x\" data-display=\"false\">g_x^\\top Q_q(x)g_x</span>; for the positive-part PCS, the leading term retains the truncation and is bounded above by this quadratic response. No zero-mean or symmetry assumption is imposed on the perturbation after clamping.",
          "text": "Section III-C defines PCS as the positive drop in the probability assigned to the original predicted class under the stressed view. For a fixed input and original predicted class, let ⟪\\delta⟫ be the actual perturbation after clamping and ⟪g_x⟫ the input gradient of that class probability. To make the positive-part operation in Eq. (5) explicit, the local squared-response expansion is ⟪\\displaystyle \\mathbb{E}_q[s(x)^2]\n=\\mathbb{E}_q\\!\\left[\\bigl(-g_x^\\top\\delta\\bigr)_+^2\\right]\n+O\\!\\left(\\mathbb{E}_q\\lVert\\delta\\rVert_2^3\\right).⟫ Thus PCS measures one-sided probability sensitivity along the directions excited by the Fourier probe. Let ⟪Q_q(x)=\\mathbb{E}_q[\\delta\\delta^\\top]⟫ denote the perturbation second-moment matrix. The untruncated quadratic response is ⟪g_x^\\top Q_q(x)g_x⟫; for the positive-part PCS, the leading term retains the truncation and is bounded above by this quadratic response. No zero-mean or symmetry assumption is imposed on the perturbation after clamping."
        },
        {
          "kind": "paragraph",
          "html": "Under a locally smooth predicted-class probability and sufficiently small perturbations, this expansion characterizes the directional sensitivity measured by PCS. The controlled interventions establish its connection to shortcut dependence: among confidence-matched candidates in the evaluated settings, task-relevant predictions exhibit stronger PCS responses and are preferentially retained by the joint entropy–PCS rule. Together, the analytical interpretation and controlled experiments explain why PCS complements confidence in selecting reliable adaptation evidence.",
          "text": "Under a locally smooth predicted-class probability and sufficiently small perturbations, this expansion characterizes the directional sensitivity measured by PCS. The controlled interventions establish its connection to shortcut dependence: among confidence-matched candidates in the evaluated settings, task-relevant predictions exhibit stronger PCS responses and are preferentially retained by the joint entropy–PCS rule. Together, the analytical interpretation and controlled experiments explain why PCS complements confidence in selecting reliable adaptation evidence."
        },
        {
          "kind": "heading",
          "html": "Controlled shortcut evidence",
          "text": "Controlled shortcut evidence"
        },
        {
          "kind": "paragraph",
          "html": "We added a 224 <span data-response-math=\"\\times\" data-display=\"false\">\\times</span> 224 synthetic benchmark in which circle/square shape is the task factor and four sinusoidal textures provide explicitly controlled shortcuts. Table IV reports both shape-decision agreement and separate shape/texture PCS responses, allowing us to measure differential probe sensitivity while verifying that the semantic shape decision is preserved.",
          "text": "We added a 224 ⟪\\times⟫ 224 synthetic benchmark in which circle/square shape is the task factor and four sinusoidal textures provide explicitly controlled shortcuts. Table IV reports both shape-decision agreement and separate shape/texture PCS responses, allowing us to measure differential probe sensitivity while verifying that the semantic shape decision is preserved."
        },
        {
          "kind": "caption",
          "html": "<strong>Evidence from revised Table IV</strong>",
          "text": "Evidence from revised Table IV"
        },
        {
          "kind": "table",
          "rows": [
            [
              {
                "html": "<strong>Probe</strong>",
                "text": "Probe"
              },
              {
                "html": "<strong>Shape agreement (%)</strong>",
                "text": "Shape agreement (%)"
              },
              {
                "html": "<strong>Shape PCS<sup>1</sup></strong>",
                "text": "Shape PCS1"
              },
              {
                "html": "<strong>Texture PCS<sup>1</sup></strong>",
                "text": "Texture PCS1"
              },
              {
                "html": "<strong>PCS ratio</strong>",
                "text": "PCS ratio"
              }
            ],
            [
              {
                "html": "Lower nominal band",
                "text": "Lower nominal band"
              },
              {
                "html": "99.40",
                "text": "99.40"
              },
              {
                "html": "241.0",
                "text": "241.0"
              },
              {
                "html": "69.0",
                "text": "69.0"
              },
              {
                "html": "3.49<span data-response-math=\"\\times\" data-display=\"false\">\\times</span>",
                "text": "3.49⟪\\times⟫"
              }
            ],
            [
              {
                "html": "Middle nominal band",
                "text": "Middle nominal band"
              },
              {
                "html": "99.60",
                "text": "99.60"
              },
              {
                "html": "224.0",
                "text": "224.0"
              },
              {
                "html": "62.0",
                "text": "62.0"
              },
              {
                "html": "3.61<span data-response-math=\"\\times\" data-display=\"false\">\\times</span>",
                "text": "3.61⟪\\times⟫"
              }
            ],
            [
              {
                "html": "Upper nominal band",
                "text": "Upper nominal band"
              },
              {
                "html": "99.70",
                "text": "99.70"
              },
              {
                "html": "217.0",
                "text": "217.0"
              },
              {
                "html": "58.0",
                "text": "58.0"
              },
              {
                "html": "3.74<span data-response-math=\"\\times\" data-display=\"false\">\\times</span>",
                "text": "3.74⟪\\times⟫"
              }
            ],
            [
              {
                "html": "Energy-matched pixel noise",
                "text": "Energy-matched pixel noise"
              },
              {
                "html": "99.80",
                "text": "99.80"
              },
              {
                "html": "112.0",
                "text": "112.0"
              },
              {
                "html": "98.0",
                "text": "98.0"
              },
              {
                "html": "1.14<span data-response-math=\"\\times\" data-display=\"false\">\\times</span>",
                "text": "1.14⟪\\times⟫"
              }
            ],
            [
              {
                "html": "Random Fourier probe",
                "text": "Random Fourier probe"
              },
              {
                "html": "99.60",
                "text": "99.60"
              },
              {
                "html": "229.0",
                "text": "229.0"
              },
              {
                "html": "64.0",
                "text": "64.0"
              },
              {
                "html": "3.58<span data-response-math=\"\\times\" data-display=\"false\">\\times</span>",
                "text": "3.58⟪\\times⟫"
              }
            ]
          ]
        },
        {
          "kind": "paragraph",
          "html": "<sup>1</sup> PCS entries are in units of <span data-response-math=\"10^{-3}\" data-display=\"false\">10^{-3}</span>. The three nominal bands are [1, 75), [75, 150), and [150, 224] cycles/image. \"Nominal\" denotes the frequency sampling parameter before image-grid discretization.",
          "text": "1 PCS entries are in units of ⟪10^{-3}⟫. The three nominal bands are [1, 75), [75, 150), and [150, 224] cycles/image. \"Nominal\" denotes the frequency sampling parameter before image-grid discretization."
        },
        {
          "kind": "paragraph",
          "html": "Across preserved, randomized, and reversed shortcut correlations, PCS achieves 0.81 AUROC for distinguishing task-relevant from shortcut-driven predictions, compared with 0.71 for energy-matched pixel noise. At matched trusted-set coverage, shortcut contamination decreases from 24.6% to 11.8%. On ImageNet-C, Table VI further compares filters at the same frozen model state and matched coverage: pseudo-label purity is 49.9% for entropy + PCS, versus 44.0% for entropy alone and 47.1% for PCS alone, showing that PCS adds discriminative information beyond confidence alone. These results show that, under the evaluated settings, PCS provides information complementary to predictive entropy and enriches the trusted set for more reliable adaptation evidence.",
          "text": "Across preserved, randomized, and reversed shortcut correlations, PCS achieves 0.81 AUROC for distinguishing task-relevant from shortcut-driven predictions, compared with 0.71 for energy-matched pixel noise. At matched trusted-set coverage, shortcut contamination decreases from 24.6% to 11.8%. On ImageNet-C, Table VI further compares filters at the same frozen model state and matched coverage: pseudo-label purity is 49.9% for entropy + PCS, versus 44.0% for entropy alone and 47.1% for PCS alone, showing that PCS adds discriminative information beyond confidence alone. These results show that, under the evaluated settings, PCS provides information complementary to predictive entropy and enriches the trusted set for more reliable adaptation evidence."
        },
        {
          "kind": "paragraph",
          "html": "We also added binary Colored-MNIST as a distinct color-shortcut setting. Digit identity defines the semantic target; training labels contain 25% noise, while test labels are clean and color–label agreement is approximately 30%. DCF obtains 88.91% accuracy, compared with 62.37% for DeYO and 50.93% for the source model.",
          "text": "We also added binary Colored-MNIST as a distinct color-shortcut setting. Digit identity defines the semantic target; training labels contain 25% noise, while test labels are clean and color–label agreement is approximately 30%. DCF obtains 88.91% accuracy, compared with 62.37% for DeYO and 50.93% for the source model."
        },
        {
          "kind": "caption",
          "html": "Additional evidence from revised Tables V–VI and the controlled-shortcut analysis",
          "text": "Additional evidence from revised Tables V–VI and the controlled-shortcut analysis"
        },
        {
          "kind": "table",
          "rows": [
            [
              {
                "html": "<strong>Diagnostic</strong>",
                "text": "Diagnostic"
              },
              {
                "html": "<strong>Comparator / reference</strong>",
                "text": "Comparator / reference"
              },
              {
                "html": "<strong>DCF / joint-routing result</strong>",
                "text": "DCF / joint-routing result"
              }
            ],
            [
              {
                "html": "Colored-MNIST accuracy (Table V)",
                "text": "Colored-MNIST accuracy (Table V)"
              },
              {
                "html": "Best listed baseline: DeYO 62.37%",
                "text": "Best listed baseline: DeYO 62.37%"
              },
              {
                "html": "88.91% (+26.54 pp)",
                "text": "88.91% (+26.54 pp)"
              }
            ],
            [
              {
                "html": "Pseudo-label purity at matched coverage (Table VI)",
                "text": "Pseudo-label purity at matched coverage (Table VI)"
              },
              {
                "html": "Entropy only 44.0%; PCS only 47.1%",
                "text": "Entropy only 44.0%; PCS only 47.1%"
              },
              {
                "html": "Entropy + PCS 49.9%",
                "text": "Entropy + PCS 49.9%"
              }
            ],
            [
              {
                "html": "Shortcut contamination at matched coverage",
                "text": "Shortcut contamination at matched coverage"
              },
              {
                "html": "Confidence-matched candidates: 24.6%",
                "text": "Confidence-matched candidates: 24.6%"
              },
              {
                "html": "Trusted-set contamination: 11.8%",
                "text": "Trusted-set contamination: 11.8%"
              }
            ]
          ]
        },
        {
          "kind": "heading",
          "html": "Frequency range and perturbation strength",
          "text": "Frequency range and perturbation strength"
        },
        {
          "kind": "paragraph",
          "html": "Figure 12(c) jointly varies the nominal frequency sampling range and perturbation strength <span data-response-math=\"\\lambda\" data-display=\"false\">\\lambda</span>. Section III-C specifies independent per-channel frequency and direction sampling, RMS-normalized Fourier bases, and exponential amplitude sampling with rate <span data-response-math=\"1/\\lambda\" data-display=\"false\">1/\\lambda</span>; the default is <span data-response-math=\"\\lambda = 0.2\" data-display=\"false\">\\lambda = 0.2</span> with nominal frequencies sampled from [1, 224] cycles/image. Performance remains stable across a broad neighborhood of this configuration, supporting the reported setting as a practical default with parameter selection.",
          "text": "Figure 12(c) jointly varies the nominal frequency sampling range and perturbation strength ⟪\\lambda⟫. Section III-C specifies independent per-channel frequency and direction sampling, RMS-normalized Fourier bases, and exponential amplitude sampling with rate ⟪1/\\lambda⟫; the default is ⟪\\lambda = 0.2⟫ with nominal frequencies sampled from [1, 224] cycles/image. Performance remains stable across a broad neighborhood of this configuration, supporting the reported setting as a practical default with parameter selection."
        },
        {
          "kind": "image",
          "src": "assets/response/frequency-sensitivity.png",
          "alt": "Fig. 12(c). Frequency range and perturbation strength.",
          "caption": "Fig. 12(c). Frequency range and perturbation strength.",
          "evidenceId": "probe-sensitivity"
        },
        {
          "kind": "image",
          "src": "assets/response/sinkhorn-sensitivity.png",
          "alt": "Fig. 12(d). Sinkhorn iterations and entropic regularization.",
          "caption": "Fig. 12(d). Sinkhorn iterations and entropic regularization.",
          "evidenceId": "sinkhorn"
        },
        {
          "kind": "paragraph",
          "html": "<strong>Selected revised text</strong>",
          "text": "Selected revised text"
        },
        {
          "kind": "excerpt",
          "html": "\"Thus, this relation establishes PCS as a structured directional-sensitivity measure whose response depends jointly on the prediction gradient and the directions excited by the Fourier probe.\"",
          "text": "\"Thus, this relation establishes PCS as a structured directional-sensitivity measure whose response depends jointly on the prediction gradient and the directions excited by the Fourier probe.\""
        },
        {
          "kind": "location",
          "html": "<strong>Changes in the manuscript:</strong> Section III-C, p. 4, Eqs. (4)–(7); Section IV-C, \"Analysis of Probe-Supported Sample Routing,\" pp. 7–9; Tables IV–VI, pp. 8–9; Fig. 12(c), p. 12.",
          "text": "Changes in the manuscript: Section III-C, p. 4, Eqs. (4)–(7); Section IV-C, \"Analysis of Probe-Supported Sample Routing,\" pp. 7–9; Tables IV–VI, pp. 8–9; Fig. 12(c), p. 12."
        }
      ],
      "responseWordCount": 695,
      "responseSourceSections": [
        "R1.1"
      ]
    },
    {
      "id": "r1-2",
      "group": "Reviewer 1",
      "label": "R1.2",
      "title": "Geometry repair and failure modes",
      "comment": "RGR uses entropic OT with dynamic class priors to align routed-away features to source-initialized centroids. However, the paper does not compare this with simpler alternatives like feature moment matching or contrastive learning. Moreover, the centroid update (Eq. 19) uses only routed-away samples; if the routed set dominates, centroids may drift away from source semantics. The authors should discuss failure cases when the routed set is small or when the prior estimate is noisy (e.g., early adaptation stages). Adding an ablation with fixed uniform priors would isolate the benefit of dynamic priors.",
      "response": [
        "Thank you for suggesting these comparisons. We added them to separate the effects of OT-based geometry repair and the dynamic prior, and used a routing-ratio stress test to examine when RGR remains effective.",
        "Table VII keeps PSR and CLR fixed and changes only the treatment of the routed-away subset. It compares discarding those samples, feature moment matching, prototype contrastive alignment, OT with a fixed uniform prior, and OT with the proposed dynamic prior."
      ],
      "changes": [
        "rgr-alternatives",
        "prior-safeguards",
        "routing-ratio",
        "empty-sets"
      ],
      "metrics": [
        [
          "OT final accuracy",
          "43.84%"
        ],
        [
          "Uniform-prior OT",
          "42.91%"
        ]
      ],
      "fullResponse": [
        {
          "kind": "paragraph",
          "html": "Thank you for suggesting these comparisons. We added them to separate the effects of OT-based geometry repair and the dynamic prior, and used a routing-ratio stress test to examine when RGR remains effective.",
          "text": "Thank you for suggesting these comparisons. We added them to separate the effects of OT-based geometry repair and the dynamic prior, and used a routing-ratio stress test to examine when RGR remains effective."
        },
        {
          "kind": "heading",
          "html": "Comparison with simpler alternatives",
          "text": "Comparison with simpler alternatives"
        },
        {
          "kind": "paragraph",
          "html": "Table VII keeps PSR and CLR fixed and changes only the treatment of the routed-away subset. It compares discarding those samples, feature moment matching, prototype contrastive alignment, OT with a fixed uniform prior, and OT with the proposed dynamic prior.",
          "text": "Table VII keeps PSR and CLR fixed and changes only the treatment of the routed-away subset. It compares discarding those samples, feature moment matching, prototype contrastive alignment, OT with a fixed uniform prior, and OT with the proposed dynamic prior."
        },
        {
          "kind": "caption",
          "html": "<strong>Evidence from revised Table VII</strong>",
          "text": "Evidence from revised Table VII"
        },
        {
          "kind": "table",
          "rows": [
            [
              {
                "html": "<strong>Treatment of routed-away samples</strong>",
                "text": "Treatment of routed-away samples"
              },
              {
                "html": "<strong>T-CS (%)</strong>",
                "text": "T-CS (%)"
              },
              {
                "html": "<strong>T-CS-LS (%)</strong>",
                "text": "T-CS-LS (%)"
              },
              {
                "html": "<strong>Long-horizon final (%)</strong>",
                "text": "Long-horizon final (%)"
              }
            ],
            [
              {
                "html": "Discard samples",
                "text": "Discard samples"
              },
              {
                "html": "41.87",
                "text": "41.87"
              },
              {
                "html": "42.71",
                "text": "42.71"
              },
              {
                "html": "42.88",
                "text": "42.88"
              }
            ],
            [
              {
                "html": "Moment matching",
                "text": "Moment matching"
              },
              {
                "html": "42.81",
                "text": "42.81"
              },
              {
                "html": "42.82",
                "text": "42.82"
              },
              {
                "html": "41.51",
                "text": "41.51"
              }
            ],
            [
              {
                "html": "Prototype contrastive alignment",
                "text": "Prototype contrastive alignment"
              },
              {
                "html": "42.83",
                "text": "42.83"
              },
              {
                "html": "42.79",
                "text": "42.79"
              },
              {
                "html": "42.33",
                "text": "42.33"
              }
            ],
            [
              {
                "html": "OT with fixed uniform prior",
                "text": "OT with fixed uniform prior"
              },
              {
                "html": "43.01",
                "text": "43.01"
              },
              {
                "html": "42.80",
                "text": "42.80"
              },
              {
                "html": "42.91",
                "text": "42.91"
              }
            ],
            [
              {
                "html": "<strong>OT with dynamic prior</strong>",
                "text": "OT with dynamic prior"
              },
              {
                "html": "<strong>43.49</strong>",
                "text": "43.49"
              },
              {
                "html": "<strong>43.29</strong>",
                "text": "43.29"
              },
              {
                "html": "<strong>43.84</strong>",
                "text": "43.84"
              }
            ]
          ]
        },
        {
          "kind": "paragraph",
          "html": "The long-horizon final accuracy is 43.84% for dynamic-prior OT, compared with 42.91% for uniform-prior OT, a 0.93 pp improvement. Moment matching and contrastive alignment obtain 41.51% and 42.33%, respectively, versus 42.88% when routed-away samples are discarded. Thus, OT-based repair provides the strongest long-horizon result among the evaluated treatments, and the dynamic marginal contributes a further 0.93 pp gain over uniform-prior OT.",
          "text": "The long-horizon final accuracy is 43.84% for dynamic-prior OT, compared with 42.91% for uniform-prior OT, a 0.93 pp improvement. Moment matching and contrastive alignment obtain 41.51% and 42.33%, respectively, versus 42.88% when routed-away samples are discarded. Thus, OT-based repair provides the strongest long-horizon result among the evaluated treatments, and the dynamic marginal contributes a further 0.93 pp gain over uniform-prior OT."
        },
        {
          "kind": "heading",
          "html": "Conservative prior and centroid updates",
          "text": "Conservative prior and centroid updates"
        },
        {
          "kind": "paragraph",
          "html": "Section III-D now spells out the prior construction. The batch prior uses stop-gradient predictions from the full batch, and its EMA starts from the uniform distribution with update rate <span data-response-math=\"\\rho = 0.01\" data-display=\"false\">\\rho = 0.01</span>. The OT class marginal then mixes this estimate with the uniform prior using <span data-response-math=\"\\alpha_{b} = 0.01\" data-display=\"false\">\\alpha_{b} = 0.01</span>. Consequently, its L1 deviation from uniform is bounded by 0.02 and every class retains marginal mass of at least <span data-response-math=\"0.99/K\" data-display=\"false\">0.99/K</span>, tightly regularizing transport allocation while still allowing target evidence to influence the class marginal.",
          "text": "Section III-D now spells out the prior construction. The batch prior uses stop-gradient predictions from the full batch, and its EMA starts from the uniform distribution with update rate ⟪\\rho = 0.01⟫. The OT class marginal then mixes this estimate with the uniform prior using ⟪\\alpha_{b} = 0.01⟫. Consequently, its L1 deviation from uniform is bounded by 0.02 and every class retains marginal mass of at least ⟪0.99/K⟫, tightly regularizing transport allocation while still allowing target evidence to influence the class marginal."
        },
        {
          "kind": "paragraph",
          "html": "The centroids are initialized from normalized rows of the frozen source classifier and updated outside backpropagation using soft OT-weighted feature means with momentum <span data-response-math=\"\\rho_M=0.99\" data-display=\"false\">\\rho_M=0.99</span>, followed by normalization. If the numerical transport mass of a class is negligible, its previous centroid is retained. Source initialization and slow momentum anchor early geometry while allowing gradual target adaptation. Persistent target bias can still induce drift, motivating the routing-ratio stress test below.",
          "text": "The centroids are initialized from normalized rows of the frozen source classifier and updated outside backpropagation using soft OT-weighted feature means with momentum ⟪\\rho_M=0.99⟫, followed by normalization. If the numerical transport mass of a class is negligible, its previous centroid is retained. Source initialization and slow momentum anchor early geometry while allowing gradual target adaptation. Persistent target bias can still induce drift, motivating the routing-ratio stress test below."
        },
        {
          "kind": "heading",
          "html": "Small and dominant routed-away subsets",
          "text": "Small and dominant routed-away subsets"
        },
        {
          "kind": "paragraph",
          "html": "The revised method also handles empty subsets explicitly. When the routed-away subset is empty, the geometry loss is zero and the centroids remain unchanged. When the trusted subset is empty, the entire adaptation step is skipped and the model, centroids, and prior state are retained. The routing-ratio stress test examines how performance changes as the balance between trusted supervision and routed-away geometry information shifts.",
          "text": "The revised method also handles empty subsets explicitly. When the routed-away subset is empty, the geometry loss is zero and the centroids remain unchanged. When the trusted subset is empty, the entire adaptation step is skipped and the model, centroids, and prior state are retained. The routing-ratio stress test examines how performance changes as the balance between trusted supervision and routed-away geometry information shifts."
        },
        {
          "kind": "caption",
          "html": "<strong>Evidence from revised Table VIII</strong>",
          "text": "Evidence from revised Table VIII"
        },
        {
          "kind": "table",
          "rows": [
            [
              {
                "html": "<strong>Routed-away proportion</strong>",
                "text": "Routed-away proportion"
              },
              {
                "html": "<strong>T-CS accuracy (%)</strong>",
                "text": "T-CS accuracy (%)"
              },
              {
                "html": "<strong>Centroid drift</strong>",
                "text": "Centroid drift"
              }
            ],
            [
              {
                "html": "Native routing",
                "text": "Native routing"
              },
              {
                "html": "43.49",
                "text": "43.49"
              },
              {
                "html": "0.0518",
                "text": "0.0518"
              }
            ],
            [
              {
                "html": "10%",
                "text": "10%"
              },
              {
                "html": "42.98",
                "text": "42.98"
              },
              {
                "html": "0.0052",
                "text": "0.0052"
              }
            ],
            [
              {
                "html": "25%",
                "text": "25%"
              },
              {
                "html": "43.49",
                "text": "43.49"
              },
              {
                "html": "0.0217",
                "text": "0.0217"
              }
            ],
            [
              {
                "html": "50%",
                "text": "50%"
              },
              {
                "html": "43.18",
                "text": "43.18"
              },
              {
                "html": "0.0829",
                "text": "0.0829"
              }
            ],
            [
              {
                "html": "75%",
                "text": "75%"
              },
              {
                "html": "41.64",
                "text": "41.64"
              },
              {
                "html": "0.1268",
                "text": "0.1268"
              }
            ],
            [
              {
                "html": "90%",
                "text": "90%"
              },
              {
                "html": "22.12",
                "text": "22.12"
              },
              {
                "html": "0.0468",
                "text": "0.0468"
              }
            ]
          ]
        },
        {
          "kind": "paragraph",
          "html": "The controlled 10%–50% routed-away regime yields 42.98%–43.49% accuracy. Performance decreases to 41.64% at 75% and to 22.12% at 90%, showing that a dominant routed-away subset leaves insufficient trusted evidence for consistency learning. Centroid drift is smaller at 90% than at 75% despite the sharper accuracy loss, identifying trusted-supervision scarcity as a distinct failure mechanism. These results show the range of routing proportions over which RGR remains effective in this test and where its performance deteriorates.",
          "text": "The controlled 10%–50% routed-away regime yields 42.98%–43.49% accuracy. Performance decreases to 41.64% at 75% and to 22.12% at 90%, showing that a dominant routed-away subset leaves insufficient trusted evidence for consistency learning. Centroid drift is smaller at 90% than at 75% despite the sharper accuracy loss, identifying trusted-supervision scarcity as a distinct failure mechanism. These results show the range of routing proportions over which RGR remains effective in this test and where its performance deteriorates."
        },
        {
          "kind": "paragraph",
          "html": "<strong>Selected revised text</strong>",
          "text": "Selected revised text"
        },
        {
          "kind": "excerpt",
          "html": "\"The slow EMA mitigates early fluctuations, though persistent bias may affect the estimated prior. A tiny routed-away set limits target support, while an overly dominant one reduces trusted supervision.\"",
          "text": "\"The slow EMA mitigates early fluctuations, though persistent bias may affect the estimated prior. A tiny routed-away set limits target support, while an overly dominant one reduces trusted supervision.\""
        },
        {
          "kind": "location",
          "html": "<strong>Changes in the manuscript:</strong> Section III-D, pp. 4–5, Eqs. (10)–(16); Algorithm 1, p. 6; Section IV-C, \"Analysis of Routed-away Geometry Repair,\" pp. 9–10; Tables VII–VIII, p. 10. The centroid update referred to as Eq. (19) in the original review is Eq. (16) in the revision.",
          "text": "Changes in the manuscript: Section III-D, pp. 4–5, Eqs. (10)–(16); Algorithm 1, p. 6; Section IV-C, \"Analysis of Routed-away Geometry Repair,\" pp. 9–10; Tables VII–VIII, p. 10. The centroid update referred to as Eq. (19) in the original review is Eq. (16) in the revision."
        }
      ],
      "responseWordCount": 592,
      "responseSourceSections": [
        "R1.2"
      ]
    },
    {
      "id": "r1-3",
      "group": "Reviewer 1",
      "label": "R1.3",
      "title": "Cost and lightweight deployment",
      "comment": "DCF involves Sinkhorn iterations for OT, curvature estimation per layer, and multiple forward passes for stressed views, leading to higher training memory and runtime (Fig. 12 shows ~0.005s/image on A100). For edge deployment, this may be prohibitive. The paper should report FLOPs or memory usage in detail and discuss possible approximations (e.g., reducing Sinkhorn iterations, using cheaper curvature proxies) without sacrificing stability. A comparison with lightweight baselines (e.g., BN Adapt) in terms of throughput would contextualize the trade-off.",
      "response": [
        "We agree that runtime alone is insufficient to assess deployment cost. We therefore replaced the original accuracy–runtime comparison with a full resource profile and introduced a measured lightweight configuration, DCF-Lite.",
        "All measurements use an NVIDIA A100, ResNet-50, and ImageNet-C under the long-horizon T-CS protocol, with batch size 64. The comparison includes BN Adapt and representative lightweight or stable baselines so that the accuracy–resource trade-off can be evaluated under a consistent setup."
      ],
      "changes": [
        "efficiency",
        "sinkhorn",
        "curvature-proxies"
      ],
      "metrics": [
        [
          "Full DCF",
          "5.20 ms/image"
        ],
        [
          "DCF-Lite",
          "3.19 ms/image"
        ]
      ],
      "fullResponse": [
        {
          "kind": "paragraph",
          "html": "We agree that runtime alone is insufficient to assess deployment cost. We therefore replaced the original accuracy–runtime comparison with a full resource profile and introduced a measured lightweight configuration, DCF-Lite.",
          "text": "We agree that runtime alone is insufficient to assess deployment cost. We therefore replaced the original accuracy–runtime comparison with a full resource profile and introduced a measured lightweight configuration, DCF-Lite."
        },
        {
          "kind": "paragraph",
          "html": "All measurements use an NVIDIA A100, ResNet-50, and ImageNet-C under the long-horizon T-CS protocol, with batch size 64. The comparison includes BN Adapt and representative lightweight or stable baselines so that the accuracy–resource trade-off can be evaluated under a consistent setup.",
          "text": "All measurements use an NVIDIA A100, ResNet-50, and ImageNet-C under the long-horizon T-CS protocol, with batch size 64. The comparison includes BN Adapt and representative lightweight or stable baselines so that the accuracy–resource trade-off can be evaluated under a consistent setup."
        },
        {
          "kind": "caption",
          "html": "<strong>Measurements from revised Table XI</strong>",
          "text": "Measurements from revised Table XI"
        },
        {
          "kind": "table",
          "rows": [
            [
              {
                "html": "Method",
                "text": "Method"
              },
              {
                "html": "FLOPs (G)",
                "text": "FLOPs (G)"
              },
              {
                "html": "Peak memory (MB)",
                "text": "Peak memory (MB)"
              },
              {
                "html": "<strong>Latency (ms/image)</strong>",
                "text": "Latency (ms/image)"
              },
              {
                "html": "<strong>Reported accuracy (%)</strong>",
                "text": "Reported accuracy (%)"
              }
            ],
            [
              {
                "html": "No Adapt",
                "text": "No Adapt"
              },
              {
                "html": "4.1",
                "text": "4.1"
              },
              {
                "html": "1,834",
                "text": "1,834"
              },
              {
                "html": "0.50",
                "text": "0.50"
              },
              {
                "html": "7.19",
                "text": "7.19"
              }
            ],
            [
              {
                "html": "BN Adapt",
                "text": "BN Adapt"
              },
              {
                "html": "4.1",
                "text": "4.1"
              },
              {
                "html": "1,944",
                "text": "1,944"
              },
              {
                "html": "0.50",
                "text": "0.50"
              },
              {
                "html": "29.83",
                "text": "29.83"
              }
            ],
            [
              {
                "html": "Tent",
                "text": "Tent"
              },
              {
                "html": "8.2",
                "text": "8.2"
              },
              {
                "html": "5,685",
                "text": "5,685"
              },
              {
                "html": "1.40",
                "text": "1.40"
              },
              {
                "html": "15.79",
                "text": "15.79"
              }
            ],
            [
              {
                "html": "CoTTA",
                "text": "CoTTA"
              },
              {
                "html": "24.6",
                "text": "24.6"
              },
              {
                "html": "13,892",
                "text": "13,892"
              },
              {
                "html": "2.80",
                "text": "2.80"
              },
              {
                "html": "34.54",
                "text": "34.54"
              }
            ],
            [
              {
                "html": "SAR",
                "text": "SAR"
              },
              {
                "html": "16.4",
                "text": "16.4"
              },
              {
                "html": "6,936",
                "text": "6,936"
              },
              {
                "html": "3.00",
                "text": "3.00"
              },
              {
                "html": "38.90",
                "text": "38.90"
              }
            ],
            [
              {
                "html": "DeYO",
                "text": "DeYO"
              },
              {
                "html": "10.0",
                "text": "10.0"
              },
              {
                "html": "5,895",
                "text": "5,895"
              },
              {
                "html": "2.10",
                "text": "2.10"
              },
              {
                "html": "24.18",
                "text": "24.18"
              }
            ],
            [
              {
                "html": "AEA",
                "text": "AEA"
              },
              {
                "html": "8.3",
                "text": "8.3"
              },
              {
                "html": "6,936",
                "text": "6,936"
              },
              {
                "html": "1.60",
                "text": "1.60"
              },
              {
                "html": "7.60",
                "text": "7.60"
              }
            ],
            [
              {
                "html": "PTTA",
                "text": "PTTA"
              },
              {
                "html": "16.4",
                "text": "16.4"
              },
              {
                "html": "11,872",
                "text": "11,872"
              },
              {
                "html": "4.10",
                "text": "4.10"
              },
              {
                "html": "22.63",
                "text": "22.63"
              }
            ],
            [
              {
                "html": "RoTTA",
                "text": "RoTTA"
              },
              {
                "html": "28.9",
                "text": "28.9"
              },
              {
                "html": "12,952",
                "text": "12,952"
              },
              {
                "html": "18.70",
                "text": "18.70"
              },
              {
                "html": "16.39",
                "text": "16.39"
              }
            ],
            [
              {
                "html": "LAW",
                "text": "LAW"
              },
              {
                "html": "16.4",
                "text": "16.4"
              },
              {
                "html": "13,364",
                "text": "13,364"
              },
              {
                "html": "6.90",
                "text": "6.90"
              },
              {
                "html": "26.54",
                "text": "26.54"
              }
            ],
            [
              {
                "html": "TRIBE",
                "text": "TRIBE"
              },
              {
                "html": "65.6",
                "text": "65.6"
              },
              {
                "html": "18,405",
                "text": "18,405"
              },
              {
                "html": "15.60",
                "text": "15.60"
              },
              {
                "html": "25.07",
                "text": "25.07"
              }
            ],
            [
              {
                "html": "SPA",
                "text": "SPA"
              },
              {
                "html": "49.1",
                "text": "49.1"
              },
              {
                "html": "9,635",
                "text": "9,635"
              },
              {
                "html": "10.30",
                "text": "10.30"
              },
              {
                "html": "12.50",
                "text": "12.50"
              }
            ],
            [
              {
                "html": "<strong>DCF full</strong>",
                "text": "DCF full"
              },
              {
                "html": "<strong>24.6</strong>",
                "text": "24.6"
              },
              {
                "html": "<strong>14,690</strong>",
                "text": "14,690"
              },
              {
                "html": "<strong>5.20</strong>",
                "text": "5.20"
              },
              {
                "html": "<strong>43.48</strong>",
                "text": "43.48"
              }
            ],
            [
              {
                "html": "<strong>DCF-Lite</strong>",
                "text": "DCF-Lite"
              },
              {
                "html": "<strong>9.4</strong>",
                "text": "9.4"
              },
              {
                "html": "<strong>6,080</strong>",
                "text": "6,080"
              },
              {
                "html": "<strong>3.19</strong>",
                "text": "3.19"
              },
              {
                "html": "<strong>42.06</strong>",
                "text": "42.06"
              }
            ]
          ]
        },
        {
          "kind": "paragraph",
          "html": "Relative to BN Adapt, full DCF improves the reported accuracy by 13.65 pp while incurring additional computation. For throughput context, the reciprocal of the reported per-image latency gives approximate rates of 2,000 images/s for BN Adapt, 192 images/s for full DCF, and 313 images/s for DCF-Lite. These are latency-derived throughput estimates for the A100 benchmark in Table XI.",
          "text": "Relative to BN Adapt, full DCF improves the reported accuracy by 13.65 pp while incurring additional computation. For throughput context, the reciprocal of the reported per-image latency gives approximate rates of 2,000 images/s for BN Adapt, 192 images/s for full DCF, and 313 images/s for DCF-Lite. These are latency-derived throughput estimates for the A100 benchmark in Table XI."
        },
        {
          "kind": "heading",
          "html": "Measured approximations",
          "text": "Measured approximations"
        },
        {
          "kind": "paragraph",
          "html": "The revised manuscript describes four cost-saving choices for DCF-Lite: removing the source/candidate model copies and per-sample gradient computation, retaining gradients only through the clean adaptation branch, using a detached Fourier probe for PSR routing and transport assignment, and reducing the Sinkhorn iteration count to <span data-response-math=\"N_{\\mathrm{sk}}=1\" data-display=\"false\">N_{\\mathrm{sk}}=1</span>. These approximations target the principal memory and computation costs of the full adaptation loop, and Table XI quantifies their combined accuracy–resource trade-off.",
          "text": "The revised manuscript describes four cost-saving choices for DCF-Lite: removing the source/candidate model copies and per-sample gradient computation, retaining gradients only through the clean adaptation branch, using a detached Fourier probe for PSR routing and transport assignment, and reducing the Sinkhorn iteration count to ⟪N_{\\mathrm{sk}}=1⟫. These approximations target the principal memory and computation costs of the full adaptation loop, and Table XI quantifies their combined accuracy–resource trade-off."
        },
        {
          "kind": "paragraph",
          "html": "On the same A100 setup, Lite reduces FLOPs from 24.6 G to 9.4 G, peak memory from 14,690 MB to 6,080 MB, and latency from 5.20 to 3.19 ms/image, achieving 42.06% accuracy—1.42 pp below full DCF and 3.16 pp above SAR. Figure 12(d) supports low Sinkhorn iteration counts across the tested regularization range. Table IX shows only 0.09/0.22 pp gains from Expected Fisher/Hutchinson proxies at an additional 1.9/6.8 ms/image, favoring the default proxy’s accuracy–cost trade-off.",
          "text": "On the same A100 setup, Lite reduces FLOPs from 24.6 G to 9.4 G, peak memory from 14,690 MB to 6,080 MB, and latency from 5.20 to 3.19 ms/image, achieving 42.06% accuracy—1.42 pp below full DCF and 3.16 pp above SAR. Figure 12(d) supports low Sinkhorn iteration counts across the tested regularization range. Table IX shows only 0.09/0.22 pp gains from Expected Fisher/Hutchinson proxies at an additional 1.9/6.8 ms/image, favoring the default proxy’s accuracy–cost trade-off."
        },
        {
          "kind": "paragraph",
          "html": "Full DCF and DCF-Lite offer two measured choices along the accuracy–resource trade-off, with hardware and batch size specified for reproducibility. The reported latency and peak memory provide concrete reference values for device-specific deployment assessment.",
          "text": "Full DCF and DCF-Lite offer two measured choices along the accuracy–resource trade-off, with hardware and batch size specified for reproducibility. The reported latency and peak memory provide concrete reference values for device-specific deployment assessment."
        },
        {
          "kind": "location",
          "html": "<strong>Changes in the manuscript:</strong> Section IV-C, \"Computational Overhead,\" pp. 11–12; Table XI, p. 12; Table IX, p. 10; Fig. 12(d), p. 12. Table XI supersedes the runtime-only comparison cited as Fig. 12 in the original review.",
          "text": "Changes in the manuscript: Section IV-C, \"Computational Overhead,\" pp. 11–12; Table XI, p. 12; Table IX, p. 10; Fig. 12(d), p. 12. Table XI supersedes the runtime-only comparison cited as Fig. 12 in the original review."
        }
      ],
      "responseWordCount": 432,
      "responseSourceSections": [
        "R1.3"
      ]
    },
    {
      "id": "r1-4",
      "group": "Reviewer 1",
      "label": "R1.4",
      "title": "Layer gates and curvature proxies",
      "comment": "CLR uses curvature mismatch to gate retention, but the paper does not analyze which layers (early vs. late) are typically retained or pulled back. Figure 8 shows drift trajectories but not per-layer retention gates μₜˡ. Providing a heatmap of μₜˡ over time and across corruption types would reveal whether the method consistently preserves low-level (e.g., first conv) or high-level (classifier) layers. Additionally, the curvature proxy is estimated from pseudo-label gradients, which themselves may be noisy; evaluating CLR with Fisher information or Hessian approximations would be insightful.",
      "response": [
        "We added the requested gate visualization and comparisons with alternative curvature estimators. The revised analysis separates parameter drift, shown in Fig. 8, from the retention gate itself, shown directly in the new Fig. 9.",
        "CLR acts on the trainable normalization affine parameters. For ResNet, these parameters are grouped into the stem normalization group (\"initial_bn\") and layer1–layer4; for ViT, grouping follows encoder blocks. These groups allow the gate patterns to be interpreted in terms of the corresponding architectural stages."
      ],
      "changes": [
        "retention-heatmap",
        "curvature-proxies",
        "curvature-definition",
        "implementation"
      ],
      "metrics": [
        [
          "Layer4 gate",
          "≈0.98"
        ],
        [
          "Default proxy",
          "43.48%"
        ]
      ],
      "fullResponse": [
        {
          "kind": "paragraph",
          "html": "We added the requested gate visualization and comparisons with alternative curvature estimators. The revised analysis separates parameter drift, shown in Fig. 8, from the retention gate itself, shown directly in the new Fig. 9.",
          "text": "We added the requested gate visualization and comparisons with alternative curvature estimators. The revised analysis separates parameter drift, shown in Fig. 8, from the retention gate itself, shown directly in the new Fig. 9."
        },
        {
          "kind": "heading",
          "html": "Which groups are retained and when",
          "text": "Which groups are retained and when"
        },
        {
          "kind": "paragraph",
          "html": "CLR acts on the trainable normalization affine parameters. For ResNet, these parameters are grouped into the stem normalization group (\"initial_bn\") and layer1–layer4; for ViT, grouping follows encoder blocks. These groups allow the gate patterns to be interpreted in terms of the corresponding architectural stages.",
          "text": "CLR acts on the trainable normalization affine parameters. For ResNet, these parameters are grouped into the stem normalization group (\"initial_bn\") and layer1–layer4; for ViT, grouping follows encoder blocks. These groups allow the gate patterns to be interpreted in terms of the corresponding architectural stages."
        },
        {
          "kind": "paragraph",
          "html": "Figure 9(a) follows the gates over the long-horizon stream, and Fig. 9(b) summarizes their corruption-dependent behavior. Layer4 remains near 0.98, while the stem and layer1 generally lie around 0.93–0.96, layer2 around 0.95–0.96, and layer3 can fall to approximately 0.92 under stronger mismatch. Motion most strongly suppresses the stem gate, Glass affects layer1, and Frost produces the strongest reduction in layer3. The transient suppression around domain indices 30–45 subsequently recovers toward 0.95–0.96, showing that adaptive source anchoring preserves plasticity after transient mismatch.",
          "text": "Figure 9(a) follows the gates over the long-horizon stream, and Fig. 9(b) summarizes their corruption-dependent behavior. Layer4 remains near 0.98, while the stem and layer1 generally lie around 0.93–0.96, layer2 around 0.95–0.96, and layer3 can fall to approximately 0.92 under stronger mismatch. Motion most strongly suppresses the stem gate, Glass affects layer1, and Frost produces the strongest reduction in layer3. The transient suppression around domain indices 30–45 subsequently recovers toward 0.95–0.96, showing that adaptive source anchoring preserves plasticity after transient mismatch."
        },
        {
          "kind": "image",
          "src": "assets/response/retention-gates.png",
          "alt": "Retention gates reproduced from revised Fig. 9"
        },
        {
          "kind": "caption",
          "html": "<em>Reproduced from revised Fig. 9. Retention gates over domain index (top) and corruption type (bottom).</em>",
          "text": "Reproduced from revised Fig. 9. Retention gates over domain index (top) and corruption type (bottom)."
        },
        {
          "kind": "paragraph",
          "html": "A larger gate favors the candidate update and a smaller gate strengthens source anchoring. In the barycentric solution in Eq. (18), the gate and proxy vectors jointly determine the effective retention weights. The observed pattern therefore reflects the measured source–candidate mismatch within each layer group.",
          "text": "A larger gate favors the candidate update and a smaller gate strengthens source anchoring. In the barycentric solution in Eq. (18), the gate and proxy vectors jointly determine the effective retention weights. The observed pattern therefore reflects the measured source–candidate mismatch within each layer group."
        },
        {
          "kind": "heading",
          "html": "Granularity and curvature proxy comparisons",
          "text": "Granularity and curvature proxy comparisons"
        },
        {
          "kind": "caption",
          "html": "<strong>Evidence from revised Table IX</strong>",
          "text": "Evidence from revised Table IX"
        },
        {
          "kind": "table",
          "rows": [
            [
              {
                "html": "<strong>Design choice</strong>",
                "text": "Design choice"
              },
              {
                "html": "<strong>Reported accuracy (%)</strong>",
                "text": "Reported accuracy (%)"
              },
              {
                "html": "<strong>Extra latency (ms/image)</strong>",
                "text": "Extra latency (ms/image)"
              }
            ],
            [
              {
                "html": "Per-normalization-layer control",
                "text": "Per-normalization-layer control"
              },
              {
                "html": "42.92",
                "text": "42.92"
              },
              {
                "html": "0",
                "text": "0"
              }
            ],
            [
              {
                "html": "Per-layer-block control (default)",
                "text": "Per-layer-block control (default)"
              },
              {
                "html": "43.48",
                "text": "43.48"
              },
              {
                "html": "0",
                "text": "0"
              }
            ],
            [
              {
                "html": "Per-sample gradient-square proxy (default)",
                "text": "Per-sample gradient-square proxy (default)"
              },
              {
                "html": "43.48",
                "text": "43.48"
              },
              {
                "html": "0",
                "text": "0"
              }
            ],
            [
              {
                "html": "Expected Fisher proxy",
                "text": "Expected Fisher proxy"
              },
              {
                "html": "43.57",
                "text": "43.57"
              },
              {
                "html": "1.9",
                "text": "1.9"
              }
            ],
            [
              {
                "html": "Hutchinson-based diagonal approximation",
                "text": "Hutchinson-based diagonal approximation"
              },
              {
                "html": "43.70",
                "text": "43.70"
              },
              {
                "html": "6.8",
                "text": "6.8"
              }
            ]
          ]
        },
        {
          "kind": "paragraph",
          "html": "The group comparison favors layer-block control by 0.56 pp. Expected Fisher and the Hutchinson-based approximation reach 43.57% and 43.70%, compared with 43.48% for the default gradient-square proxy, at an additional 1.9 and 6.8 ms/image. This comparison of curvature-aware proxy estimators within CLR supports the default gradient-square proxy for its accuracy–cost balance.",
          "text": "The group comparison favors layer-block control by 0.56 pp. Expected Fisher and the Hutchinson-based approximation reach 43.57% and 43.70%, compared with 43.48% for the default gradient-square proxy, at an additional 1.9 and 6.8 ms/image. This comparison of curvature-aware proxy estimators within CLR supports the default gradient-square proxy for its accuracy–cost balance."
        },
        {
          "kind": "paragraph",
          "html": "Section III-E further clarifies that the candidate and source proxies are computed on the same current unlabeled batch at their respective parameter states. For each layer group, Eq. (19) averages the element-wise squared per-sample gradients over the batch, producing a diagonal proxy vector; Eq. (20) then normalizes the squared source–candidate proxy mismatch by the group’s parameter dimension. Together, this clarification and the Expected Fisher and Hutchinson comparisons show how CLR behaves with different curvature estimators.",
          "text": "Section III-E further clarifies that the candidate and source proxies are computed on the same current unlabeled batch at their respective parameter states. For each layer group, Eq. (19) averages the element-wise squared per-sample gradients over the batch, producing a diagonal proxy vector; Eq. (20) then normalizes the squared source–candidate proxy mismatch by the group’s parameter dimension. Together, this clarification and the Expected Fisher and Hutchinson comparisons show how CLR behaves with different curvature estimators."
        },
        {
          "kind": "location",
          "html": "<strong>Changes in the manuscript:</strong> Section III-E, pp. 5–6, Eqs. (17)–(20); Section IV-A, \"Models and Implementation Details,\" p. 6; Section IV-C, \"Analysis of Curvature-aware Layer Retention,\" Fig. 9 and Table IX, p. 10.",
          "text": "Changes in the manuscript: Section III-E, pp. 5–6, Eqs. (17)–(20); Section IV-A, \"Models and Implementation Details,\" p. 6; Section IV-C, \"Analysis of Curvature-aware Layer Retention,\" Fig. 9 and Table IX, p. 10."
        }
      ],
      "responseWordCount": 426,
      "responseSourceSections": [
        "R1.4"
      ]
    },
    {
      "id": "r1-5",
      "group": "Reviewer 1",
      "label": "R1.5",
      "title": "Uncertainty-aware related work",
      "comment": "The literature review part can be improved by including more recent publications on machine learning methods, which can refer to Uncertainty-aware, high-precision multi-step prediction of structural health monitoring sensor streams under extreme typhoon events: an enhanced Bayesian dynamic linear model leveraging the kernel regression basis function for severe environmental adaptation, Bayesian Network in Structural Health Monitoring: Theoretical Background and Applications Review, Towards high-accuracy data modelling, uncertainty quantification and correlation analysis for SHM measurements during typhoon events using an improved most likely heteroscedastic Gaussian process.",
      "response": [
        "Thank you for suggesting these studies. We have incorporated all three references into Section II as cross-disciplinary work on uncertainty-aware modeling under evolving environmental conditions. The added references are:",
        "[19] Q.-A. Wang et al., \"Uncertainty-Aware, High-Precision Multi-Step Prediction of Structural Health Monitoring Sensor Streams under Extreme Typhoon Events: An Enhanced Bayesian Dynamic Linear Model Leveraging the Kernel Regression Basis Function for Severe Environmental Adaptation,\" Measurement, vol. 262, article 120050, 2026."
      ],
      "changes": [
        "uncertainty-literature",
        "tcsvt-literature"
      ],
      "metrics": [],
      "fullResponse": [
        {
          "kind": "paragraph",
          "html": "Thank you for suggesting these studies. We have incorporated all three references into Section II as cross-disciplinary work on uncertainty-aware modeling under evolving environmental conditions. The added references are:",
          "text": "Thank you for suggesting these studies. We have incorporated all three references into Section II as cross-disciplinary work on uncertainty-aware modeling under evolving environmental conditions. The added references are:"
        },
        {
          "kind": "paragraph",
          "html": "[19] Q.-A. Wang et al., \"Uncertainty-Aware, High-Precision Multi-Step Prediction of Structural Health Monitoring Sensor Streams under Extreme Typhoon Events: An Enhanced Bayesian Dynamic Linear Model Leveraging the Kernel Regression Basis Function for Severe Environmental Adaptation,\" Measurement, vol. 262, article 120050, 2026.",
          "text": "[19] Q.-A. Wang et al., \"Uncertainty-Aware, High-Precision Multi-Step Prediction of Structural Health Monitoring Sensor Streams under Extreme Typhoon Events: An Enhanced Bayesian Dynamic Linear Model Leveraging the Kernel Regression Basis Function for Severe Environmental Adaptation,\" Measurement, vol. 262, article 120050, 2026."
        },
        {
          "kind": "paragraph",
          "html": "[20] Q.-A. Wang, A.-W. Lu, Y.-Q. Ni, J.-F. Wang, and Z.-G. Ma, \"Bayesian Network in Structural Health Monitoring: Theoretical Background and Applications Review,\" Sensors, vol. 25, no. 12, article 3577, 2025.",
          "text": "[20] Q.-A. Wang, A.-W. Lu, Y.-Q. Ni, J.-F. Wang, and Z.-G. Ma, \"Bayesian Network in Structural Health Monitoring: Theoretical Background and Applications Review,\" Sensors, vol. 25, no. 12, article 3577, 2025."
        },
        {
          "kind": "paragraph",
          "html": "[21] Q.-A. Wang et al., \"Towards High-Accuracy Data Modelling, Uncertainty Quantification and Correlation Analysis for SHM Measurements during Typhoon Events Using an Improved Most Likely Heteroscedastic Gaussian Process,\" Smart Structures and Systems, vol. 32, no. 4, pp. 267–279, 2023.",
          "text": "[21] Q.-A. Wang et al., \"Towards High-Accuracy Data Modelling, Uncertainty Quantification and Correlation Analysis for SHM Measurements during Typhoon Events Using an Improved Most Likely Heteroscedastic Gaussian Process,\" Smart Structures and Systems, vol. 32, no. 4, pp. 267–279, 2023."
        },
        {
          "kind": "paragraph",
          "html": "These studies contribute Bayesian dynamic modeling, Bayesian-network reasoning, and heteroscedastic uncertainty quantification for non-stationary structural-health-monitoring streams. We added them to broaden the discussion of uncertainty under evolving environments. DCF addresses the corresponding online adaptation problem in visual recognition, where the model itself is updated from unlabeled, temporally correlated target observations; its contribution is the joint control of target evidence, routed-away geometry, and layer-wise update retention.",
          "text": "These studies contribute Bayesian dynamic modeling, Bayesian-network reasoning, and heteroscedastic uncertainty quantification for non-stationary structural-health-monitoring streams. We added them to broaden the discussion of uncertainty under evolving environments. DCF addresses the corresponding online adaptation problem in visual recognition, where the model itself is updated from unlabeled, temporally correlated target observations; its contribution is the joint control of target evidence, routed-away geometry, and layer-wise update retention."
        },
        {
          "kind": "paragraph",
          "html": "<strong>Selected revised text</strong>",
          "text": "Selected revised text"
        },
        {
          "kind": "excerpt",
          "html": "\"Beyond visual tasks, uncertainty-aware modeling has also been explored to handle evolving environmental variations in non-stationary sensor streams [19]–[21].\"",
          "text": "\"Beyond visual tasks, uncertainty-aware modeling has also been explored to handle evolving environmental variations in non-stationary sensor streams [19]–[21].\""
        },
        {
          "kind": "location",
          "html": "<strong>Changes in the manuscript:</strong> Section II, \"Adaptation without Target Data,\" p. 3; references [19]–[21], p. 13.",
          "text": "Changes in the manuscript: Section II, \"Adaptation without Target Data,\" p. 3; references [19]–[21], p. 13."
        }
      ],
      "responseWordCount": 243,
      "responseSourceSections": [
        "R1.5"
      ]
    },
    {
      "id": "r1-6",
      "group": "Reviewer 1",
      "label": "R1.6",
      "title": "Transfer significance and new dataset",
      "comment": "In Figure 10, DCF shows positive gains across all source domains, but the paper does not report the variance or statistical significance. Some cells show marginal improvements (<1%), which may not be robust. The authors should include standard deviations over multiple runs and perform a significance test (e.g., paired t-test) against the best baseline. Furthermore, the cross-domain evaluation adapts on one corruption and tests on the remaining 14, but the test set still shares the same ImageNet classes; evaluating on a completely different dataset (e.g., CIFAR-10-C or a medical imaging shift) would better demonstrate generalizable representation preservation. Adding such an experiment or discussing the limitation would strengthen the paper’s claims.",
      "response": [
        "We agree that the cross-domain results need run-to-run variability estimates and significance tests for the aggregate improvements. We have therefore added five-run variability, paired significance tests, and a second transfer benchmark on DomainNet-126.",
        "The revised Fig. 11, replacing Fig. 10 in the original submission, reports mean ⟪\\pm⟫ standard deviation over five matched runs. On ImageNet-C, DCF achieves a mean gain over No Adapt of 30.30 ⟪\\pm⟫ 0.39 pp, compared with 27.95 ⟪\\pm⟫ 0.05 pp for AEA, the strongest aggregate baseline in this comparison."
      ],
      "changes": [
        "transfer",
        "domainnet"
      ],
      "metrics": [
        [
          "ImageNet-C gap",
          "+2.35 pp"
        ],
        [
          "DomainNet gap",
          "+1.27 pp"
        ]
      ],
      "fullResponse": [
        {
          "kind": "paragraph",
          "html": "We agree that the cross-domain results need run-to-run variability estimates and significance tests for the aggregate improvements. We have therefore added five-run variability, paired significance tests, and a second transfer benchmark on DomainNet-126.",
          "text": "We agree that the cross-domain results need run-to-run variability estimates and significance tests for the aggregate improvements. We have therefore added five-run variability, paired significance tests, and a second transfer benchmark on DomainNet-126."
        },
        {
          "kind": "heading",
          "html": "Variability across five runs and paired comparisons",
          "text": "Variability across five runs and paired comparisons"
        },
        {
          "kind": "paragraph",
          "html": "The revised Fig. 11, replacing Fig. 10 in the original submission, reports mean <span data-response-math=\"\\pm\" data-display=\"false\">\\pm</span> standard deviation over five matched runs. On ImageNet-C, DCF achieves a mean gain over No Adapt of 30.30 <span data-response-math=\"\\pm\" data-display=\"false\">\\pm</span> 0.39 pp, compared with 27.95 <span data-response-math=\"\\pm\" data-display=\"false\">\\pm</span> 0.05 pp for AEA, the strongest aggregate baseline in this comparison.",
          "text": "The revised Fig. 11, replacing Fig. 10 in the original submission, reports mean ⟪\\pm⟫ standard deviation over five matched runs. On ImageNet-C, DCF achieves a mean gain over No Adapt of 30.30 ⟪\\pm⟫ 0.39 pp, compared with 27.95 ⟪\\pm⟫ 0.05 pp for AEA, the strongest aggregate baseline in this comparison."
        },
        {
          "kind": "paragraph",
          "html": "<strong>Aggregate results reported in revised Section IV-C</strong>",
          "text": "Aggregate results reported in revised Section IV-C"
        },
        {
          "kind": "table",
          "rows": [
            [
              {
                "html": "<strong>Evaluation</strong>",
                "text": "Evaluation"
              },
              {
                "html": "<strong>DCF</strong>",
                "text": "DCF"
              },
              {
                "html": "<strong>Best aggregate baseline</strong>",
                "text": "Best aggregate baseline"
              },
              {
                "html": "<strong>Difference</strong>",
                "text": "Difference"
              },
              {
                "html": "<strong>Paired test</strong>",
                "text": "Paired test"
              }
            ],
            [
              {
                "html": "ImageNet-C gain over No Adapt",
                "text": "ImageNet-C gain over No Adapt"
              },
              {
                "html": "<span data-response-math=\"30.30 \\pm 0.39\" data-display=\"false\">30.30 \\pm 0.39</span> pp",
                "text": "⟪30.30 \\pm 0.39⟫ pp"
              },
              {
                "html": "AEA / <span data-response-math=\"27.95 \\pm 0.05\" data-display=\"false\">27.95 \\pm 0.05</span> pp",
                "text": "AEA / ⟪27.95 \\pm 0.05⟫ pp"
              },
              {
                "html": "+2.35 pp",
                "text": "+2.35 pp"
              },
              {
                "html": "<span data-response-math=\"t(4) = 14.30\" data-display=\"false\">t(4) = 14.30</span>; <span data-response-math=\"p = 1.39 \\times 10^{-4}\" data-display=\"false\">p = 1.39 \\times 10^{-4}</span>",
                "text": "⟪t(4) = 14.30⟫; ⟪p = 1.39 \\times 10^{-4}⟫"
              }
            ],
            [
              {
                "html": "DomainNet-126 mean accuracy",
                "text": "DomainNet-126 mean accuracy"
              },
              {
                "html": "61.40%",
                "text": "61.40%"
              },
              {
                "html": "DeYO 60.13%",
                "text": "DeYO 60.13%"
              },
              {
                "html": "+1.27 pp",
                "text": "+1.27 pp"
              },
              {
                "html": "<span data-response-math=\"t(4) = 12.01\" data-display=\"false\">t(4) = 12.01</span>; <span data-response-math=\"p = 2.75 \\times 10^{-4}\" data-display=\"false\">p = 2.75 \\times 10^{-4}</span>",
                "text": "⟪t(4) = 12.01⟫; ⟪p = 2.75 \\times 10^{-4}⟫"
              }
            ]
          ]
        },
        {
          "kind": "paragraph",
          "html": "Both tests use five matched runs. On ImageNet-C, the paired comparison gives <span data-response-math=\"t(4) = 14.30\" data-display=\"false\">t(4) = 14.30</span> and <span data-response-math=\"p = 1.39 \\times 10^{-4}\" data-display=\"false\">p = 1.39 \\times 10^{-4}</span>; on DomainNet-126, DCF achieves 61.40% mean accuracy versus 60.13% for DeYO, with <span data-response-math=\"t(4) = 12.01\" data-display=\"false\">t(4) = 12.01</span> and <span data-response-math=\"p = 2.75 \\times 10^{-4}\" data-display=\"false\">p = 2.75 \\times 10^{-4}</span>. The ImageNet-C row reports mean gain over No Adapt, while the DomainNet row reports mean accuracy. These metrics follow the definitions used for the respective benchmarks.",
          "text": "Both tests use five matched runs. On ImageNet-C, the paired comparison gives ⟪t(4) = 14.30⟫ and ⟪p = 1.39 \\times 10^{-4}⟫; on DomainNet-126, DCF achieves 61.40% mean accuracy versus 60.13% for DeYO, with ⟪t(4) = 12.01⟫ and ⟪p = 2.75 \\times 10^{-4}⟫. The ImageNet-C row reports mean gain over No Adapt, while the DomainNet row reports mean accuracy. These metrics follow the definitions used for the respective benchmarks."
        },
        {
          "kind": "paragraph",
          "html": "These paired tests support statistically significant aggregate improvements for DCF across matched runs. The two panels summarize different evaluation units, which is important when interpreting small gains:",
          "text": "These paired tests support statistically significant aggregate improvements for DCF across matched runs. The two panels summarize different evaluation units, which is important when interpreting small gains:"
        },
        {
          "kind": "paragraph",
          "html": "<strong>Fig. 11(a): Domain-aggregated transfer on ImageNet-C.</strong> Each entry reports transfer gain after adaptation to one of the 15 corruption domains, averaged across the remaining 14 unseen corruptions without further updates. DCF exceeds the domain-wise strongest baseline in 13 of 15 domains, with advantages above 1.5 pp in 12 domains and a maximum of 3.64 pp. The small-gain or lower-performing cases are Fog (+0.58 pp over AEA), Frost (-0.24 pp versus SPA), and Impulse (-2.03 pp versus SPA). These domain-wise results describe the distribution of gains; statistical significance is evaluated by the five matched run-level aggregate comparisons reported above.",
          "text": "Fig. 11(a): Domain-aggregated transfer on ImageNet-C. Each entry reports transfer gain after adaptation to one of the 15 corruption domains, averaged across the remaining 14 unseen corruptions without further updates. DCF exceeds the domain-wise strongest baseline in 13 of 15 domains, with advantages above 1.5 pp in 12 domains and a maximum of 3.64 pp. The small-gain or lower-performing cases are Fog (+0.58 pp over AEA), Frost (-0.24 pp versus SPA), and Impulse (-2.03 pp versus SPA). These domain-wise results describe the distribution of gains; statistical significance is evaluated by the five matched run-level aggregate comparisons reported above."
        },
        {
          "kind": "paragraph",
          "html": "<strong>Fig. 11(b): Pairwise transfer on DomainNet-126.</strong> Each entry reports mean <span data-response-math=\"\\pm\" data-display=\"false\">\\pm</span> standard deviation over five runs for a specific <span data-response-math=\"\\mathrm{Adaptation}\\to\\mathrm{Evaluation}\" data-display=\"false\">\\mathrm{Adaptation}\\to\\mathrm{Evaluation}</span> pair. DCF exceeds DeYO in all 12 pairs and yields positive gains over No Adapt throughout this matrix (0.57–12.38 pp). It achieves the highest mean gain in 10 of 12 pairs; the exceptions are <span data-response-math=\"\\mathrm{P}\\to\\mathrm{R}\" data-display=\"false\">\\mathrm{P}\\to\\mathrm{R}</span> (0.57 versus RoTTA’s 0.67 pp) and <span data-response-math=\"\\mathrm{S}\\to\\mathrm{R}\" data-display=\"false\">\\mathrm{S}\\to\\mathrm{R}</span> (9.21 versus RoTTA’s 9.37 pp). This consistent positive transfer, together with the significant aggregate advantage over DeYO, supports representation preservation across the evaluated artistic domains.",
          "text": "Fig. 11(b): Pairwise transfer on DomainNet-126. Each entry reports mean ⟪\\pm⟫ standard deviation over five runs for a specific ⟪\\mathrm{Adaptation}\\to\\mathrm{Evaluation}⟫ pair. DCF exceeds DeYO in all 12 pairs and yields positive gains over No Adapt throughout this matrix (0.57–12.38 pp). It achieves the highest mean gain in 10 of 12 pairs; the exceptions are ⟪\\mathrm{P}\\to\\mathrm{R}⟫ (0.57 versus RoTTA’s 0.67 pp) and ⟪\\mathrm{S}\\to\\mathrm{R}⟫ (9.21 versus RoTTA’s 9.37 pp). This consistent positive transfer, together with the significant aggregate advantage over DeYO, supports representation preservation across the evaluated artistic domains."
        },
        {
          "kind": "heading",
          "html": "Transfer on a distinct dataset",
          "text": "Transfer on a distinct dataset"
        },
        {
          "kind": "paragraph",
          "html": "To extend the evaluation beyond ImageNet corruptions, we added DomainNet-126, a separate 126-class benchmark spanning Clipart, Painting, Real, and Sketch. Models adapt on one domain and are then evaluated on the remaining unseen domains without further updates. DCF attains 61.40% mean accuracy versus 60.13% for DeYO and improves over DeYO across all evaluated adaptation-to-evaluation pairs.",
          "text": "To extend the evaluation beyond ImageNet corruptions, we added DomainNet-126, a separate 126-class benchmark spanning Clipart, Painting, Real, and Sketch. Models adapt on one domain and are then evaluated on the remaining unseen domains without further updates. DCF attains 61.40% mean accuracy versus 60.13% for DeYO and improves over DeYO across all evaluated adaptation-to-evaluation pairs."
        },
        {
          "kind": "paragraph",
          "html": "Together, the experiments evaluate cross-corruption transfer within ImageNet-C and cross-domain transfer on the separate DomainNet-126 benchmark, broadening the evidence for representation preservation across synthetic and artistic shifts. Each benchmark uses its own fixed label space and source classifier; the evaluation measures post-adaptation transfer to unseen domains within these visual-recognition tasks.",
          "text": "Together, the experiments evaluate cross-corruption transfer within ImageNet-C and cross-domain transfer on the separate DomainNet-126 benchmark, broadening the evidence for representation preservation across synthetic and artistic shifts. Each benchmark uses its own fixed label space and source classifier; the evaluation measures post-adaptation transfer to unseen domains within these visual-recognition tasks."
        },
        {
          "kind": "location",
          "html": "<strong>Changes in the manuscript:</strong> Section IV-A, \"Benchmarks,\" p. 6; Section IV-C, \"Cross-Domain Transfer,\" and Fig. 11(a)–(b), p. 11.",
          "text": "Changes in the manuscript: Section IV-A, \"Benchmarks,\" p. 6; Section IV-C, \"Cross-Domain Transfer,\" and Fig. 11(a)–(b), p. 11."
        }
      ],
      "responseWordCount": 554,
      "responseSourceSections": [
        "R1.6"
      ]
    },
    {
      "id": "r2-1",
      "group": "Reviewer 2",
      "label": "R2.1",
      "title": "Trainable parameters and layer groups",
      "comment": "The implementation section states that the experiments follow the official Tent setup. For clarity and reproducibility, please explicitly specify which model parameters are optimized during TTA (e.g., all network parameters, only the affine parameters of normalization layers, or another subset). It would also be helpful to clarify how a layer is defined when applying Curvature-aware Layer Retention. For convolutional architectures, does this refer to an individual normalization layer, a residual block, or a larger network stage?",
      "response": [
        "We now specify which parameters are optimized and how they are grouped for CLR. Following Tent, SGD updates only the affine parameters of normalization layers, with learning rate ⟪2.5\\times10^{-4}⟫ and momentum 0.9; convolution kernels and classifier weights remain frozen during adaptation.",
        "For ResNet, CLR groups these trainable affine parameters into the stem normalization group (\"initial_bn\") and the layer1–layer4 architectural groups. For ViT, grouping follows encoder blocks. This definition matches the layer labels used in the new gate visualization."
      ],
      "changes": [
        "implementation",
        "curvature-proxies"
      ],
      "metrics": [],
      "fullResponse": [
        {
          "kind": "paragraph",
          "html": "We now specify which parameters are optimized and how they are grouped for CLR. Following Tent, SGD updates only the affine parameters of normalization layers, with learning rate <span data-response-math=\"2.5\\times10^{-4}\" data-display=\"false\">2.5\\times10^{-4}</span> and momentum 0.9; convolution kernels and classifier weights remain frozen during adaptation.",
          "text": "We now specify which parameters are optimized and how they are grouped for CLR. Following Tent, SGD updates only the affine parameters of normalization layers, with learning rate ⟪2.5\\times10^{-4}⟫ and momentum 0.9; convolution kernels and classifier weights remain frozen during adaptation."
        },
        {
          "kind": "paragraph",
          "html": "For ResNet, CLR groups these trainable affine parameters into the stem normalization group (\"initial_bn\") and the layer1–layer4 architectural groups. For ViT, grouping follows encoder blocks. This definition matches the layer labels used in the new gate visualization.",
          "text": "For ResNet, CLR groups these trainable affine parameters into the stem normalization group (\"initial_bn\") and the layer1–layer4 architectural groups. For ViT, grouping follows encoder blocks. This definition matches the layer labels used in the new gate visualization."
        },
        {
          "kind": "paragraph",
          "html": "We additionally compare this block-level grouping against per-normalization-layer control. Table IX reports 43.48% for layer-block control and 42.92% for per-normalization-layer control, supporting the block-level grouping used by default.",
          "text": "We additionally compare this block-level grouping against per-normalization-layer control. Table IX reports 43.48% for layer-block control and 42.92% for per-normalization-layer control, supporting the block-level grouping used by default."
        },
        {
          "kind": "paragraph",
          "html": "<strong>Selected revised text</strong>",
          "text": "Selected revised text"
        },
        {
          "kind": "excerpt",
          "html": "\"Following Tent [6], SGD optimizes only normalization affine parameters (learning rate <span data-response-math=\"2.5\\times10^{-4}\" data-display=\"false\">2.5\\times10^{-4}</span>, momentum 0.9). For CLR, block groups correspond to ResNet layer blocks (stem BN (initial_bn) and layer1–layer4) or ViT encoder blocks.\"",
          "text": "\"Following Tent [6], SGD optimizes only normalization affine parameters (learning rate ⟪2.5\\times10^{-4}⟫, momentum 0.9). For CLR, block groups correspond to ResNet layer blocks (stem BN (initial_bn) and layer1–layer4) or ViT encoder blocks.\""
        },
        {
          "kind": "location",
          "html": "<strong>Changes in the manuscript:</strong> Section IV-A, \"Models and Implementation Details,\" p. 6; Section III-A, p. 3; Fig. 9 and Table IX, p. 10.",
          "text": "Changes in the manuscript: Section IV-A, \"Models and Implementation Details,\" p. 6; Section III-A, p. 3; Fig. 9 and Table IX, p. 10."
        }
      ],
      "responseWordCount": 164,
      "responseSourceSections": [
        "R2.1"
      ]
    },
    {
      "id": "r2-2",
      "group": "Reviewer 2",
      "label": "R2.2",
      "title": "Definitions of all four regions",
      "comment": "The PCS–entropy visualization in Fig. 7 is a useful addition and provides good intuition for the routing mechanism. The caption already identifies Area 1 as the low-entropy/high-PCS trusted region, but the exact conditions defining all four regions are not stated explicitly. I suggest defining Areas 1–4 and their corresponding entropy/PCS threshold conditions directly in the figure caption or in the accompanying text. This would allow readers to interpret the visualization without repeatedly referring back to the routing equations.",
      "response": [
        "We have explicitly defined all four regions in the sample-routing text in Section III-C, immediately after Eqs. (6)–(7). Let E denote predictive entropy, s denote PCS, and ⟪\\upsilon_{\\mathrm{Ent}}⟫ and ⟪\\upsilon_{\\mathrm{PCS}}⟫ denote the two thresholds. The four regions are defined by the corresponding entropy/PCS inequalities shown below.",
        "Only Area 1 supplies trusted consistency supervision, while Areas 2–4 form the routed-away set used for geometry repair. The explicit inequalities also highlight the role of Area 3: these samples appear confident according to entropy but exhibit insufficient stress responsiveness, precisely the regime in which entropy-only selection can retain stress-inert predictions."
      ],
      "changes": [
        "regions",
        "pcs-definition"
      ],
      "metrics": [],
      "fullResponse": [
        {
          "kind": "paragraph",
          "html": "We have explicitly defined all four regions in the sample-routing text in Section III-C, immediately after Eqs. (6)–(7). Let E denote predictive entropy, s denote PCS, and <span data-response-math=\"\\upsilon_{\\mathrm{Ent}}\" data-display=\"false\">\\upsilon_{\\mathrm{Ent}}</span> and <span data-response-math=\"\\upsilon_{\\mathrm{PCS}}\" data-display=\"false\">\\upsilon_{\\mathrm{PCS}}</span> denote the two thresholds. The four regions are defined by the corresponding entropy/PCS inequalities shown below.",
          "text": "We have explicitly defined all four regions in the sample-routing text in Section III-C, immediately after Eqs. (6)–(7). Let E denote predictive entropy, s denote PCS, and ⟪\\upsilon_{\\mathrm{Ent}}⟫ and ⟪\\upsilon_{\\mathrm{PCS}}⟫ denote the two thresholds. The four regions are defined by the corresponding entropy/PCS inequalities shown below."
        },
        {
          "kind": "caption",
          "html": "<strong>Definitions added to revised Section III-C</strong>",
          "text": "Definitions added to revised Section III-C"
        },
        {
          "kind": "table",
          "rows": [
            [
              {
                "html": "<strong>Region</strong>",
                "text": "Region"
              },
              {
                "html": "<strong>Entropy condition</strong>",
                "text": "Entropy condition"
              },
              {
                "html": "<strong>PCS condition</strong>",
                "text": "PCS condition"
              },
              {
                "html": "<strong>Role</strong>",
                "text": "Role"
              }
            ],
            [
              {
                "html": "Area 1",
                "text": "Area 1"
              },
              {
                "html": "<span data-response-math=\"E &lt; \\upsilon_{\\mathrm{Ent}}\" data-display=\"false\">E &lt; \\upsilon_{\\mathrm{Ent}}</span>",
                "text": "⟪E < \\upsilon_{\\mathrm{Ent}}⟫"
              },
              {
                "html": "<span data-response-math=\"s &gt; \\upsilon_{\\mathrm{PCS}}\" data-display=\"false\">s &gt; \\upsilon_{\\mathrm{PCS}}</span>",
                "text": "⟪s > \\upsilon_{\\mathrm{PCS}}⟫"
              },
              {
                "html": "Trusted",
                "text": "Trusted"
              }
            ],
            [
              {
                "html": "Area 2",
                "text": "Area 2"
              },
              {
                "html": "<span data-response-math=\"E \\geq \\upsilon_{\\mathrm{Ent}}\" data-display=\"false\">E \\geq \\upsilon_{\\mathrm{Ent}}</span>",
                "text": "⟪E \\geq \\upsilon_{\\mathrm{Ent}}⟫"
              },
              {
                "html": "<span data-response-math=\"s &gt; \\upsilon_{\\mathrm{PCS}}\" data-display=\"false\">s &gt; \\upsilon_{\\mathrm{PCS}}</span>",
                "text": "⟪s > \\upsilon_{\\mathrm{PCS}}⟫"
              },
              {
                "html": "Routed away",
                "text": "Routed away"
              }
            ],
            [
              {
                "html": "Area 3",
                "text": "Area 3"
              },
              {
                "html": "<span data-response-math=\"E &lt; \\upsilon_{\\mathrm{Ent}}\" data-display=\"false\">E &lt; \\upsilon_{\\mathrm{Ent}}</span>",
                "text": "⟪E < \\upsilon_{\\mathrm{Ent}}⟫"
              },
              {
                "html": "<span data-response-math=\"s \\leq \\upsilon_{\\mathrm{PCS}}\" data-display=\"false\">s \\leq \\upsilon_{\\mathrm{PCS}}</span>",
                "text": "⟪s \\leq \\upsilon_{\\mathrm{PCS}}⟫"
              },
              {
                "html": "Routed away",
                "text": "Routed away"
              }
            ],
            [
              {
                "html": "Area 4",
                "text": "Area 4"
              },
              {
                "html": "<span data-response-math=\"E \\geq \\upsilon_{\\mathrm{Ent}}\" data-display=\"false\">E \\geq \\upsilon_{\\mathrm{Ent}}</span>",
                "text": "⟪E \\geq \\upsilon_{\\mathrm{Ent}}⟫"
              },
              {
                "html": "<span data-response-math=\"s \\leq \\upsilon_{\\mathrm{PCS}}\" data-display=\"false\">s \\leq \\upsilon_{\\mathrm{PCS}}</span>",
                "text": "⟪s \\leq \\upsilon_{\\mathrm{PCS}}⟫"
              },
              {
                "html": "Routed away",
                "text": "Routed away"
              }
            ]
          ]
        },
        {
          "kind": "paragraph",
          "html": "Only Area 1 supplies trusted consistency supervision, while Areas 2–4 form the routed-away set used for geometry repair. The explicit inequalities also highlight the role of Area 3: these samples appear confident according to entropy but exhibit insufficient stress responsiveness, precisely the regime in which entropy-only selection can retain stress-inert predictions.",
          "text": "Only Area 1 supplies trusted consistency supervision, while Areas 2–4 form the routed-away set used for geometry repair. The explicit inequalities also highlight the role of Area 3: these samples appear confident according to entropy but exhibit insufficient stress responsiveness, precisely the regime in which entropy-only selection can retain stress-inert predictions."
        },
        {
          "kind": "location",
          "html": "<strong>Changes in the manuscript:</strong> Section III-C, p. 4, following Eqs. (6)–(7); Fig. 7, p. 9, provides the corresponding PCS–entropy diagnostic visualization.",
          "text": "Changes in the manuscript: Section III-C, p. 4, following Eqs. (6)–(7); Fig. 7, p. 9, provides the corresponding PCS–entropy diagnostic visualization."
        }
      ],
      "responseWordCount": 169,
      "responseSourceSections": [
        "R2.2"
      ]
    },
    {
      "id": "r2-3",
      "group": "Reviewer 2",
      "label": "R2.3",
      "title": "Threshold guidance and OT settings",
      "comment": "The sensitivity analysis suggests that DCF remains effective across a reasonable range of routing hyperparameters. It would be useful to provide brief practical guidance, or a simple rule of thumb, for selecting the entropy and PCS thresholds when applying DCF to a new dataset. In addition, for reproducibility, please consider reporting the remaining implementation details of the optimal transport procedure, such as the number of Sinkhorn iterations and other relevant solver settings.",
      "response": [
        "We now provide a starting rule for the routing thresholds and specify the OT solver settings. For a new K-class dataset, we recommend ⟪\\upsilon_{\\mathrm{PCS}} = 0.2⟫ and ⟪\\upsilon_{\\mathrm{Ent}} = 0.6\\ln K⟫ as the default starting point, followed by only coarse adjustment if necessary. The entropy threshold scales with the maximum classification entropy, ln K, while the PCS threshold controls the required probability response to the Fourier stress probe. For the default OT solver, the revised manuscript specifies Sinkhorn–Knopp with ⟪N_{\\mathrm{sk}} = 3⟫ iterations and entropic regularization ⟪\\varepsilon_{\\mathrm{OT}} = 0.5⟫; Figure 12(d) additionally evaluates lower iteration counts and alternative regularization values.",
        "Figure 12(b) shows a broad high-accuracy region around this default setting, supporting its use as a practical initialization across datasets. The routing-ratio analysis in Table VIII further explains the trade-off between trusted-set selectivity and the amount of reliable supervision available to the online update."
      ],
      "changes": [
        "implementation",
        "threshold-guidance",
        "sinkhorn",
        "prior-safeguards"
      ],
      "metrics": [],
      "fullResponse": [
        {
          "kind": "paragraph",
          "html": "We now provide a starting rule for the routing thresholds and specify the OT solver settings. For a new K-class dataset, we recommend <span data-response-math=\"\\upsilon_{\\mathrm{PCS}} = 0.2\" data-display=\"false\">\\upsilon_{\\mathrm{PCS}} = 0.2</span> and <span data-response-math=\"\\upsilon_{\\mathrm{Ent}} = 0.6\\ln K\" data-display=\"false\">\\upsilon_{\\mathrm{Ent}} = 0.6\\ln K</span> as the default starting point, followed by only coarse adjustment if necessary. The entropy threshold scales with the maximum classification entropy, ln K, while the PCS threshold controls the required probability response to the Fourier stress probe. For the default OT solver, the revised manuscript specifies Sinkhorn–Knopp with <span data-response-math=\"N_{\\mathrm{sk}} = 3\" data-display=\"false\">N_{\\mathrm{sk}} = 3</span> iterations and entropic regularization <span data-response-math=\"\\varepsilon_{\\mathrm{OT}} = 0.5\" data-display=\"false\">\\varepsilon_{\\mathrm{OT}} = 0.5</span>; Figure 12(d) additionally evaluates lower iteration counts and alternative regularization values.",
          "text": "We now provide a starting rule for the routing thresholds and specify the OT solver settings. For a new K-class dataset, we recommend ⟪\\upsilon_{\\mathrm{PCS}} = 0.2⟫ and ⟪\\upsilon_{\\mathrm{Ent}} = 0.6\\ln K⟫ as the default starting point, followed by only coarse adjustment if necessary. The entropy threshold scales with the maximum classification entropy, ln K, while the PCS threshold controls the required probability response to the Fourier stress probe. For the default OT solver, the revised manuscript specifies Sinkhorn–Knopp with ⟪N_{\\mathrm{sk}} = 3⟫ iterations and entropic regularization ⟪\\varepsilon_{\\mathrm{OT}} = 0.5⟫; Figure 12(d) additionally evaluates lower iteration counts and alternative regularization values."
        },
        {
          "kind": "paragraph",
          "html": "Figure 12(b) shows a broad high-accuracy region around this default setting, supporting its use as a practical initialization across datasets. The routing-ratio analysis in Table VIII further explains the trade-off between trusted-set selectivity and the amount of reliable supervision available to the online update.",
          "text": "Figure 12(b) shows a broad high-accuracy region around this default setting, supporting its use as a practical initialization across datasets. The routing-ratio analysis in Table VIII further explains the trade-off between trusted-set selectivity and the amount of reliable supervision available to the online update."
        },
        {
          "kind": "caption",
          "html": "<strong>Implementation settings specified in the revised manuscript</strong>",
          "text": "Implementation settings specified in the revised manuscript"
        },
        {
          "kind": "table",
          "rows": [
            [
              {
                "html": "<strong>OT or routing quantity</strong>",
                "text": "OT or routing quantity"
              },
              {
                "html": "<strong>Value or specification</strong>",
                "text": "Value or specification"
              }
            ],
            [
              {
                "html": "Sinkhorn–Knopp iterations",
                "text": "Sinkhorn–Knopp iterations"
              },
              {
                "html": "<span data-response-math=\"N_{\\mathrm{sk}} = 3\" data-display=\"false\">N_{\\mathrm{sk}} = 3</span>",
                "text": "⟪N_{\\mathrm{sk}} = 3⟫"
              }
            ],
            [
              {
                "html": "Entropic regularization",
                "text": "Entropic regularization"
              },
              {
                "html": "<span data-response-math=\"\\varepsilon_{\\mathrm{OT}} = 0.5\" data-display=\"false\">\\varepsilon_{\\mathrm{OT}} = 0.5</span>",
                "text": "⟪\\varepsilon_{\\mathrm{OT}} = 0.5⟫"
              }
            ],
            [
              {
                "html": "Transport cost",
                "text": "Transport cost"
              },
              {
                "html": "1 - cosine similarity of normalized features and centroids",
                "text": "1 - cosine similarity of normalized features and centroids"
              }
            ],
            [
              {
                "html": "Sample marginal",
                "text": "Sample marginal"
              },
              {
                "html": "Uniform over the routed-away subset",
                "text": "Uniform over the routed-away subset"
              }
            ],
            [
              {
                "html": "Class marginal",
                "text": "Class marginal"
              },
              {
                "html": "EMA prediction prior mixed with the uniform prior",
                "text": "EMA prediction prior mixed with the uniform prior"
              }
            ],
            [
              {
                "html": "Prior EMA and uniform mixing",
                "text": "Prior EMA and uniform mixing"
              },
              {
                "html": "<span data-response-math=\"\\rho = 0.01;\\ \\alpha_{b} = 0.01\" data-display=\"false\">\\rho = 0.01;\\ \\alpha_{b} = 0.01</span>; uniform initialization",
                "text": "⟪\\rho = 0.01;\\ \\alpha_{b} = 0.01⟫; uniform initialization"
              }
            ],
            [
              {
                "html": "Centroid momentum",
                "text": "Centroid momentum"
              },
              {
                "html": "<span data-response-math=\"\\rho_M = 0.99\" data-display=\"false\">\\rho_M = 0.99</span>, followed by normalization",
                "text": "⟪\\rho_M = 0.99⟫, followed by normalization"
              }
            ],
            [
              {
                "html": "Gradient treatment",
                "text": "Gradient treatment"
              },
              {
                "html": "Transport plans and prior predictions are detached",
                "text": "Transport plans and prior predictions are detached"
              }
            ],
            [
              {
                "html": "Routing defaults",
                "text": "Routing defaults"
              },
              {
                "html": "<span data-response-math=\"\\upsilon_{\\mathrm{PCS}} = 0.2;\\ \\upsilon_{\\mathrm{Ent}} = 0.6\\ln K\" data-display=\"false\">\\upsilon_{\\mathrm{PCS}} = 0.2;\\ \\upsilon_{\\mathrm{Ent}} = 0.6\\ln K</span>",
                "text": "⟪\\upsilon_{\\mathrm{PCS}} = 0.2;\\ \\upsilon_{\\mathrm{Ent}} = 0.6\\ln K⟫"
              }
            ],
            [
              {
                "html": "Fourier amplitude default",
                "text": "Fourier amplitude default"
              },
              {
                "html": "<span data-response-math=\"\\lambda = 0.2\" data-display=\"false\">\\lambda = 0.2</span>",
                "text": "⟪\\lambda = 0.2⟫"
              }
            ]
          ]
        },
        {
          "kind": "paragraph",
          "html": "Section III-D further specifies the shared centroids, two-view transport plans, cross-view geometry objective, empty-subset safeguards, and negligible-class-mass handling. Figure 12(d) jointly studies Sinkhorn iterations and entropic regularization. Stable downstream accuracy across the tested configurations supports efficient finite-iteration OT for online geometry repair.",
          "text": "Section III-D further specifies the shared centroids, two-view transport plans, cross-view geometry objective, empty-subset safeguards, and negligible-class-mass handling. Figure 12(d) jointly studies Sinkhorn iterations and entropic regularization. Stable downstream accuracy across the tested configurations supports efficient finite-iteration OT for online geometry repair."
        },
        {
          "kind": "paragraph",
          "html": "<strong>Selected revised text</strong>",
          "text": "Selected revised text"
        },
        {
          "kind": "excerpt",
          "html": "\"Overall, DCF requires little hyperparameter tuning for stable performance.\"",
          "text": "\"Overall, DCF requires little hyperparameter tuning for stable performance.\""
        },
        {
          "kind": "location",
          "html": "<strong>Changes in the manuscript:</strong> Section IV-A, \"Models and Implementation Details,\" p. 6; Section III-D, pp. 4–5, Eqs. (10)–(16); \"Hyperparameter Sensitivity,\" p. 11, and Fig. 12(b), (d), p. 12.",
          "text": "Changes in the manuscript: Section IV-A, \"Models and Implementation Details,\" p. 6; Section III-D, pp. 4–5, Eqs. (10)–(16); \"Hyperparameter Sensitivity,\" p. 11, and Fig. 12(b), (d), p. 12."
        }
      ],
      "responseWordCount": 323,
      "responseSourceSections": [
        "R2.3"
      ]
    },
    {
      "id": "r2-4",
      "group": "Reviewer 2",
      "label": "R2.4",
      "title": "Recent continual TTA literature",
      "comment": "Given the rapid development of continual and long-horizon TTA, the related-work discussion could potentially be strengthened by briefly acknowledging very recent studies on long-horizon stability, where relevant. For example:\n[1] The Golden Subspace: Where Efficiency Meets Generalization in Continual Test-Time Adaptation, CVPR 2026.\n[2] Continual Test-Time Adaptation in Computer Vision: Methods, Benchmarks, and Future Directions, TMLR 2026.",
      "response": [
        "Section II now cites both suggested 2026 studies and explains how their approaches relate to DCF.",
        "[38] G. Lai, D.-W. Zhou, Z. Li, and H.-J. Ye, \"The Golden Subspace: Where Efficiency Meets Generalization in Continual Test-Time Adaptation,\" CVPR, 2026."
      ],
      "changes": [
        "recent-literature",
        "tcsvt-literature"
      ],
      "metrics": [],
      "fullResponse": [
        {
          "kind": "paragraph",
          "html": "Section II now cites both suggested 2026 studies and explains how their approaches relate to DCF.",
          "text": "Section II now cites both suggested 2026 studies and explains how their approaches relate to DCF."
        },
        {
          "kind": "paragraph",
          "html": "[38] G. Lai, D.-W. Zhou, Z. Li, and H.-J. Ye, \"The Golden Subspace: Where Efficiency Meets Generalization in Continual Test-Time Adaptation,\" CVPR, 2026.",
          "text": "[38] G. Lai, D.-W. Zhou, Z. Li, and H.-J. Ye, \"The Golden Subspace: Where Efficiency Meets Generalization in Continual Test-Time Adaptation,\" CVPR, 2026."
        },
        {
          "kind": "paragraph",
          "html": "GOLD constrains updates to a classifier-aligned low-rank subspace. DCF takes a complementary approach by controlling adaptation evidence, reusing routed-away geometry, and selectively retaining candidate updates across layer groups according to source mismatch.",
          "text": "GOLD constrains updates to a classifier-aligned low-rank subspace. DCF takes a complementary approach by controlling adaptation evidence, reusing routed-away geometry, and selectively retaining candidate updates across layer groups according to source mismatch."
        },
        {
          "kind": "paragraph",
          "html": "[28] S. K. Maharana et al., \"Continual Test-Time Adaptation in Computer Vision: Methods, Benchmarks, and Future Directions,\" Transactions on Machine Learning Research, 2026.",
          "text": "[28] S. K. Maharana et al., \"Continual Test-Time Adaptation in Computer Vision: Methods, Benchmarks, and Future Directions,\" Transactions on Machine Learning Research, 2026."
        },
        {
          "kind": "paragraph",
          "html": "The survey provides context for teacher models, memory, reset strategies, and long-horizon stability. DCF specifically links heterogeneous target evidence to layer-wise update retention.",
          "text": "The survey provides context for teacher models, memory, reset strategies, and long-horizon stability. DCF specifically links heterogeneous target evidence to layer-wise update retention."
        },
        {
          "kind": "paragraph",
          "html": "<strong>Selected revised text</strong>",
          "text": "Selected revised text"
        },
        {
          "kind": "excerpt",
          "html": "\"Unlike these approaches, DCF treats sample-side updates strictly as candidates and selectively retains them across depth according to layer-wise source mismatch.\"",
          "text": "\"Unlike these approaches, DCF treats sample-side updates strictly as candidates and selectively retains them across depth according to layer-wise source mismatch.\""
        },
        {
          "kind": "location",
          "html": "<strong>Changes in the manuscript:</strong> Section II, \"Test-Time adaptation\" and \"Reliability- and Stability-aware TTA,\" p. 3; references [28] and [38], p. 13.",
          "text": "Changes in the manuscript: Section II, \"Test-Time adaptation\" and \"Reliability- and Stability-aware TTA,\" p. 3; references [28] and [38], p. 13."
        }
      ],
      "responseWordCount": 162,
      "responseSourceSections": [
        "R2.4"
      ]
    }
  ],
  "changes": [
    {
      "id": "probe-definition",
      "title": "Fourier normalization and stress amplitude",
      "type": "Equation",
      "status": "modified",
      "section": "III-C",
      "original": {
        "page": 4,
        "label": "Eq. (4) and normalization",
        "image": "assets/crops/fourier-original.webp",
        "box": [
          50.49,
          36.932,
          41.993,
          18.838
        ],
        "aspect": 1.7192513368983957
      },
      "revised": {
        "page": 4,
        "label": "Eq. (4) and normalization",
        "image": "assets/crops/fourier-revised.webp",
        "box": [
          7.516,
          48.99,
          42.157,
          15.72
        ],
        "aspect": 2.0705128205128207
      },
      "summary": "The normalization is rewritten from unit L2 norm to unit per-pixel RMS. The revised text defines nominal cycles/image and interprets λ as the expected pre-clamp per-channel RMS amplitude.",
      "before": "Fourier-basis stress probe. At test-time step ⟪t⟫ , we apply a small additive Fourier-basis perturbation to the current batch ⟪x_t⟫ to obtain a stressed batch ⟪x_t^s=\\mathcal{A}^s(x_t)⟫ : ⟪\\displaystyle \\begin{aligned} \\Phi_{f,\\omega}(i,j) &= R\\sin\\!\\Big( 2\\pi f(i\\cos\\omega+j\\sin\\omega-\\pi/4) \\Big), \\\\ \\big[\\mathcal{A}^{s}(x_t)\\big]_{i,j,c} &= \\operatorname{Clamp}_{[0,1]}\\!\\Big( \\big[x_t\\big]_{i,j,c} + \\sigma_c \\Phi_{f_c,\\omega_c}(i,j) \\Big), \\\\ &\\hspace{2em} c\\in\\{1,2,3\\}. \\end{aligned}⟫ (4) Here, ⟪R⟫ is chosen such that ⟪\\|\\Phi_{f,\\omega}\\|_2=1⟫ . For each channel ⟪c⟫ , we independently sample the frequency and direction as ⟪f_c\\sim\\mathcal{U}[1,224]⟫ and ⟪\\omega_c\\sim\\mathcal{U}[0,\\pi]⟫ , and sample the perturbation strength as ⟪\\sigma_c\\sim\\mathrm{Exp}(1/\\lambda)⟫ .",
      "after": "Fourier-basis stress probe. At step ⟪t⟫, we generate a stressed batch ⟪x_t^s=\\mathcal{A}^{s}(x_t)⟫ via an additive Fourier basis perturbation: ⟪\\displaystyle \\begin{aligned} \\Phi_{f,\\omega}(i,j) &= R\\sin\\!\\big(2\\pi f(i\\cos\\omega+j\\sin\\omega-\\pi/4)\\big), \\\\ [\\mathcal{A}^{s}(x_t)]_{i,j,c} &= \\operatorname{Clamp}_{[0,1]}\\!\\big([x_t]_{i,j,c} + \\sigma_c \\Phi_{f_c,\\omega_c}(i,j)\\big). \\end{aligned}⟫ Here, ⟪(i,j)\\in[0,1]^2⟫ are normalized coordinates, and ⟪R⟫ ensures ⟪\\lVert\\Phi_{f,\\omega}\\rVert_2^2/(HW)=1⟫. Per channel, independently draw ⟪f_c\\sim\\mathcal{U}[1,224]⟫ (nominal cycles/image), ⟪\\omega_c\\sim\\mathcal{U}[0,\\pi]⟫, and ⟪\\sigma_c\\sim\\mathrm{Exp}(1/\\lambda)⟫ with rate ⟪1/\\lambda⟫. Thus, ⟪\\lambda⟫ is the expected pre-clamp per-channel RMS amplitude.",
      "diff": {
        "original": [
          {
            "kind": "same",
            "text": "Fourier-basis stress probe. At "
          },
          {
            "kind": "del",
            "text": "test-time "
          },
          {
            "kind": "same",
            "text": "step "
          },
          {
            "kind": "del",
            "text": "⟪t⟫ "
          },
          {
            "kind": "same",
            "text": ", we "
          },
          {
            "kind": "del",
            "text": "apply a small additive Fourier-basis perturbation to the current batch ⟪x_t⟫ to obtain "
          },
          {
            "kind": "same",
            "text": "a stressed batch "
          },
          {
            "kind": "del",
            "text": "⟪x_t^s=\\mathcal{A}^s(x_t)⟫ : ⟪\\displaystyle \\begin{aligned} \\Phi_{f,\\omega}(i,j) &= R\\sin\\!\\Big( 2\\pi f(i\\cos\\omega+j\\sin\\omega-\\pi/4) \\Big), \\\\ \\big[\\mathcal{A}^{s}(x_t)\\big]_{i,j,c} &= \\operatorname{Clamp}_{[0,1]}\\!\\Big( \\big[x_t\\big]_{i,j,c} + \\sigma_c \\Phi_{f_c,\\omega_c}(i,j) \\Big), \\\\ &\\hspace{2em} c\\in\\{1,2,3\\}. \\end{aligned}⟫ (4) "
          },
          {
            "kind": "same",
            "text": "Here, "
          },
          {
            "kind": "same",
            "text": "⟪R⟫ "
          },
          {
            "kind": "del",
            "text": "is chosen such that ⟪\\|\\Phi_{f,\\omega}\\|_2=1⟫ "
          },
          {
            "kind": "same",
            "text": ". "
          },
          {
            "kind": "del",
            "text": "For each channel ⟪c⟫ , we "
          },
          {
            "kind": "same",
            "text": "independently "
          },
          {
            "kind": "del",
            "text": "sample the frequency and direction as "
          },
          {
            "kind": "same",
            "text": "⟪f_c\\sim\\mathcal{U}[1,224]⟫ "
          },
          {
            "kind": "del",
            "text": "and ⟪\\omega_c\\sim\\mathcal{U}[0,\\pi]⟫ "
          },
          {
            "kind": "same",
            "text": ", and "
          },
          {
            "kind": "del",
            "text": "sample "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "del",
            "text": "perturbation strength as ⟪\\sigma_c\\sim\\mathrm{Exp}(1/\\lambda)⟫ ."
          }
        ],
        "revised": [
          {
            "kind": "same",
            "text": "Fourier-basis stress probe. At "
          },
          {
            "kind": "same",
            "text": "step "
          },
          {
            "kind": "add",
            "text": "⟪t⟫"
          },
          {
            "kind": "same",
            "text": ", we "
          },
          {
            "kind": "add",
            "text": "generate "
          },
          {
            "kind": "same",
            "text": "a stressed batch "
          },
          {
            "kind": "add",
            "text": "⟪x_t^s=\\mathcal{A}^{s}(x_t)⟫ via an additive Fourier basis perturbation: ⟪\\displaystyle \\begin{aligned} \\Phi_{f,\\omega}(i,j) &= R\\sin\\!\\big(2\\pi f(i\\cos\\omega+j\\sin\\omega-\\pi/4)\\big), \\\\ [\\mathcal{A}^{s}(x_t)]_{i,j,c} &= \\operatorname{Clamp}_{[0,1]}\\!\\big([x_t]_{i,j,c} + \\sigma_c \\Phi_{f_c,\\omega_c}(i,j)\\big). \\end{aligned}⟫ "
          },
          {
            "kind": "same",
            "text": "Here, "
          },
          {
            "kind": "add",
            "text": "⟪(i,j)\\in[0,1]^2⟫ are normalized coordinates, and "
          },
          {
            "kind": "same",
            "text": "⟪R⟫ "
          },
          {
            "kind": "add",
            "text": "ensures ⟪\\lVert\\Phi_{f,\\omega}\\rVert_2^2/(HW)=1⟫"
          },
          {
            "kind": "same",
            "text": ". "
          },
          {
            "kind": "add",
            "text": "Per channel, "
          },
          {
            "kind": "same",
            "text": "independently "
          },
          {
            "kind": "add",
            "text": "draw "
          },
          {
            "kind": "same",
            "text": "⟪f_c\\sim\\mathcal{U}[1,224]⟫ "
          },
          {
            "kind": "add",
            "text": "(nominal cycles/image), ⟪\\omega_c\\sim\\mathcal{U}[0,\\pi]⟫"
          },
          {
            "kind": "same",
            "text": ", and "
          },
          {
            "kind": "add",
            "text": "⟪\\sigma_c\\sim\\mathrm{Exp}(1/\\lambda)⟫ with rate ⟪1/\\lambda⟫. Thus, ⟪\\lambda⟫ is "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "add",
            "text": "expected pre-clamp per-channel RMS amplitude."
          }
        ]
      },
      "comments": [
        "r1-1"
      ]
    },
    {
      "id": "pcs-definition",
      "title": "One-sided PCS probability-drop definition",
      "type": "Equation",
      "status": "modified",
      "section": "III-C",
      "original": {
        "page": 4,
        "label": "Eq. (5)",
        "image": "assets/crops/pcs-original.webp",
        "box": [
          50.49,
          55.777,
          41.993,
          19.855
        ],
        "aspect": 1.631979695431472
      },
      "revised": {
        "page": 4,
        "label": "Eq. (5)",
        "image": "assets/crops/pcs-revised.webp",
        "box": [
          7.516,
          64.773,
          42.157,
          16.162
        ],
        "aspect": 2.012461059190031
      },
      "summary": "PCS retains the positive part of the original predicted-class probability drop. The revision clarifies its role as a complementary routing signal alongside entropy.",
      "before": "Given a sample ⟪x_{t,i}\\in x_t⟫ and its stressed counterpart ⟪x_{t,i}^s=\\mathcal{A}^s(x_{t,i})⟫ , we define the predicted class on the clean view and the Perturbation Consistency Score (PCS) as ⟪\\displaystyle \\begin{aligned} x_{t,i}^s &= \\mathcal{A}^s(x_{t,i}), \\qquad \\hat{y}_t(x_{t,i}) = \\arg\\max_y p_{\\theta_t}(y\\mid x_{t,i}), \\\\ s_{\\theta_t}(x_{t,i}) &= \\left[ p_{\\theta_t}(\\hat{y}_t(x_{t,i})\\mid x_{t,i}) - p_{\\theta_t}(\\hat{y}_t(x_{t,i})\\mid x_{t,i}^s) \\right]_+. \\end{aligned}⟫ (5) Here ⟪[a]_+ \\coloneqq \\max(a,0)⟫ . PCS measures how strongly the predicted-class confidence responds to controlled Fourier stress. A high PCS indicates that the prediction is stress-responsive and provides stronger evidence for adaptation, whereas a low PCS suggests that a confident prediction may be supported by stress-inert shortcuts.",
      "after": "For sample ⟪x_{t,i}⟫, let ⟪\\hat{y}_t(x_{t,i}) = \\arg\\max_y p_{\\theta_t}(y\\mid x_{t,i})⟫. The Perturbation Consistency Score (PCS) is formulated as: ⟪\\displaystyle s_{\\theta_t}(x_{t,i}) = \\left[ p_{\\theta_t}(\\hat{y}_t(x_{t,i})\\mid x_{t,i}) - p_{\\theta_t}(\\hat{y}_t(x_{t,i})\\mid \\mathcal{A}^{s}(x_{t,i})) \\right]_+.⟫ (5) Higher PCS indicates stronger responsiveness of the original prediction to the structured Fourier probe, whereas lower PCS indicates stress-inert behavior. Combined with predictive entropy, PCS therefore provides a complementary signal for distinguishing confident candidates according to how their predictive evidence responds to structured stress.",
      "diff": {
        "original": [
          {
            "kind": "del",
            "text": "Given a "
          },
          {
            "kind": "same",
            "text": "sample "
          },
          {
            "kind": "del",
            "text": "⟪x_{t,i}\\in x_t⟫ and its stressed counterpart ⟪x_{t,i}^s=\\mathcal{A}^s(x_{t,i})⟫ "
          },
          {
            "kind": "same",
            "text": ", "
          },
          {
            "kind": "del",
            "text": "we define the predicted class on the clean view and the "
          },
          {
            "kind": "same",
            "text": "Perturbation Consistency Score (PCS) "
          },
          {
            "kind": "del",
            "text": "as ⟪\\displaystyle \\begin{aligned} x_{t,i}^s &= \\mathcal{A}^s(x_{t,i}), \\qquad \\hat{y}_t(x_{t,i}) = \\arg\\max_y p_{\\theta_t}(y\\mid x_{t,i}), \\\\ s_{\\theta_t}(x_{t,i}) &= \\left[ p_{\\theta_t}(\\hat{y}_t(x_{t,i})\\mid x_{t,i}) - p_{\\theta_t}(\\hat{y}_t(x_{t,i})\\mid x_{t,i}^s) \\right]_+. \\end{aligned}⟫ "
          },
          {
            "kind": "same",
            "text": "(5) "
          },
          {
            "kind": "del",
            "text": "Here ⟪[a]_+ \\coloneqq \\max(a,0)⟫ . "
          },
          {
            "kind": "same",
            "text": "PCS "
          },
          {
            "kind": "del",
            "text": "measures "
          },
          {
            "kind": "same",
            "text": "how "
          },
          {
            "kind": "del",
            "text": "strongly the predicted-class confidence "
          },
          {
            "kind": "same",
            "text": "responds to "
          },
          {
            "kind": "del",
            "text": "controlled Fourier stress. A high PCS indicates that the prediction is stress-responsive and provides stronger evidence for adaptation, whereas a low PCS suggests that a confident prediction may be supported by stress-inert shortcuts."
          }
        ],
        "revised": [
          {
            "kind": "add",
            "text": "For "
          },
          {
            "kind": "same",
            "text": "sample "
          },
          {
            "kind": "add",
            "text": "⟪x_{t,i}⟫"
          },
          {
            "kind": "same",
            "text": ", "
          },
          {
            "kind": "add",
            "text": "let ⟪\\hat{y}_t(x_{t,i}) = \\arg\\max_y p_{\\theta_t}(y\\mid x_{t,i})⟫. The "
          },
          {
            "kind": "same",
            "text": "Perturbation Consistency Score (PCS) "
          },
          {
            "kind": "add",
            "text": "is formulated as: ⟪\\displaystyle s_{\\theta_t}(x_{t,i}) = \\left[ p_{\\theta_t}(\\hat{y}_t(x_{t,i})\\mid x_{t,i}) - p_{\\theta_t}(\\hat{y}_t(x_{t,i})\\mid \\mathcal{A}^{s}(x_{t,i})) \\right]_+.⟫ "
          },
          {
            "kind": "same",
            "text": "(5) "
          },
          {
            "kind": "add",
            "text": "Higher "
          },
          {
            "kind": "same",
            "text": "PCS "
          },
          {
            "kind": "add",
            "text": "indicates stronger responsiveness of the original prediction to the structured Fourier probe, whereas lower PCS indicates stress-inert behavior. Combined with predictive entropy, PCS therefore provides a complementary signal for distinguishing confident candidates according to "
          },
          {
            "kind": "same",
            "text": "how "
          },
          {
            "kind": "add",
            "text": "their predictive evidence "
          },
          {
            "kind": "same",
            "text": "responds to "
          },
          {
            "kind": "add",
            "text": "structured stress."
          }
        ]
      },
      "comments": [
        "r1-1",
        "r2-2"
      ]
    },
    {
      "id": "probe-theory",
      "title": "Local squared-response interpretation of PCS",
      "type": "Text",
      "status": "added",
      "section": "III-C",
      "original": null,
      "revised": {
        "page": 4,
        "label": "Theoretical interpretation",
        "image": "assets/crops/theory-revised.webp",
        "box": [
          7.516,
          80.808,
          42.157,
          13.889
        ],
        "boxes": [
          [
            7.516,
            80.808,
            42.157,
            13.889
          ],
          [
            50.49,
            32.576,
            42.4,
            13.7
          ]
        ],
        "aspect": 1.1607142857142858
      },
      "summary": "The local PCS expansion retains the positive-part truncation. Its leading squared response is bounded above by the gradient quadratic form under the actual post-clamp perturbation second moment.",
      "before": "",
      "after": "Theoretical interpretation. Motivated by frequency-dependent model sensitivity and texture bias [39, 40], we characterize PCS through a local probability expansion. For a fixed input ⟪x⟫, let ⟪\\delta=\\mathcal{A}^{s}(x)-x⟫, ⟪Q_q(x)=\\mathbb{E}_q[\\delta\\delta^\\top]⟫, and ⟪g_x=\\nabla_x p_{\\theta_t}(\\hat{y}_t(x)\\mid x)⟫, holding the original predicted class fixed. For a locally smooth probability function and sufficiently small perturbations, retaining the positive-part operation in Eq. (5) gives ⟪\\mathbb{E}_q[s_{\\theta_t}(x)^2]\n=\\mathbb{E}_q[(-g_x^\\top\\delta)_+^2]\n+O(\\mathbb{E}_q\\lVert\\delta\\rVert_2^3).⟫ The leading term is bounded above by ⟪g_x^\\top Q_q(x)g_x⟫, where ⟪Q_q(x)⟫ is the perturbation second-moment matrix; no zero-mean or symmetry assumption is imposed after clamping. Thus, this relation establishes PCS as a structured directional-sensitivity measure whose response depends jointly on the prediction gradient and the directions excited by the Fourier probe. The controlled shortcut interventions in Section IV-C provide the empirical bridge to routing: among confidence-matched candidates in the evaluated settings, task-relevant predictions exhibit stronger PCS responses and are preferentially retained by the joint entropy–PCS criterion.",
      "diff": {
        "original": [],
        "revised": [
          {
            "kind": "add",
            "text": "Theoretical interpretation. Motivated by frequency-dependent model sensitivity and texture bias [39, 40], we characterize PCS through a local probability expansion. For a fixed input ⟪x⟫, let ⟪\\delta=\\mathcal{A}^{s}(x)-x⟫, ⟪Q_q(x)=\\mathbb{E}_q[\\delta\\delta^\\top]⟫, and ⟪g_x=\\nabla_x p_{\\theta_t}(\\hat{y}_t(x)\\mid x)⟫, holding the original predicted class fixed. For a locally smooth probability function and sufficiently small perturbations, retaining the positive-part operation in Eq. (5) gives ⟪\\mathbb{E}_q[s_{\\theta_t}(x)^2]\n=\\mathbb{E}_q[(-g_x^\\top\\delta)_+^2]\n+O(\\mathbb{E}_q\\lVert\\delta\\rVert_2^3).⟫ The leading term is bounded above by ⟪g_x^\\top Q_q(x)g_x⟫, where ⟪Q_q(x)⟫ is the perturbation second-moment matrix; no zero-mean or symmetry assumption is imposed after clamping. Thus, this relation establishes PCS as a structured directional-sensitivity measure whose response depends jointly on the prediction gradient and the directions excited by the Fourier probe. The controlled shortcut interventions in Section IV-C provide the empirical bridge to routing: among confidence-matched candidates in the evaluated settings, task-relevant predictions exhibit stronger PCS responses and are preferentially retained by the joint entropy–PCS criterion."
          }
        ]
      },
      "comments": [
        "ae1",
        "r1-1"
      ]
    },
    {
      "id": "shape-texture",
      "title": "Controlled shape and texture diagnostics",
      "type": "Table",
      "status": "added",
      "section": "IV-C",
      "original": null,
      "revised": {
        "page": 8,
        "label": "Table IV",
        "image": "assets/crops/shape-revised.webp",
        "box": [
          50.49,
          61.237,
          41.993,
          22.727
        ],
        "aspect": 1.4257206208425721
      },
      "summary": "A new 224 × 224 shape–texture benchmark isolates known shortcut factors and compares nominal frequency bands with energy-matched pixel noise.",
      "before": "",
      "after": "TABLE IV: Factorized response diagnostics of the Fourier\nprobe. Shape agreement measures consistency between original and stressed shape predictions, while PCS measures the\nresponse of the corresponding factor-specific readout. The\nshape/texture PCS ratio characterizes the probe’s differential\nsensitivity across visual factors. Lower, middle, and upper\nnominal bands correspond to [1, 75), [75, 150), and [150, 224]\ncycles/image, respectively.\nProbe Shape agr.\n(%)\n⟪\\mathrm{PCS}_{\\mathrm{shape}}⟫\n(⟪\\times10^{-3}⟫)\n⟪\\mathrm{PCS}_{\\mathrm{texture}}⟫\n(⟪\\times10^{-3}⟫)\nShape/texture\nPCS ratio\nLower nominal band 99.40 241.0 69.0 3.49×\nMiddle nominal band 99.60 224.0 62.0 3.61×\nUpper nominal band 99.70 217.0 58.0 3.74×\nEnergy-matched pixel noise 99.80 112.0 98.0 1.14×\nDCF random Fourier 99.60 229.0 64.0 3.58×",
      "diff": {
        "original": [],
        "revised": [
          {
            "kind": "add",
            "text": "TABLE IV: Factorized response diagnostics of the Fourier\nprobe. Shape agreement measures consistency between original and stressed shape predictions, while PCS measures the\nresponse of the corresponding factor-specific readout. The\nshape/texture PCS ratio characterizes the probe’s differential\nsensitivity across visual factors. Lower, middle, and upper\nnominal bands correspond to [1, 75), [75, 150), and [150, 224]\ncycles/image, respectively.\nProbe Shape agr.\n(%)\n⟪\\mathrm{PCS}_{\\mathrm{shape}}⟫\n(⟪\\times10^{-3}⟫)\n⟪\\mathrm{PCS}_{\\mathrm{texture}}⟫\n(⟪\\times10^{-3}⟫)\nShape/texture\nPCS ratio\nLower nominal band 99.40 241.0 69.0 3.49×\nMiddle nominal band 99.60 224.0 62.0 3.61×\nUpper nominal band 99.70 217.0 58.0 3.74×\nEnergy-matched pixel noise 99.80 112.0 98.0 1.14×\nDCF random Fourier 99.60 229.0 64.0 3.58×"
          }
        ]
      },
      "comments": [
        "ae1",
        "sae",
        "r1-1"
      ]
    },
    {
      "id": "colored-mnist",
      "title": "Controlled color shortcut on Colored-MNIST",
      "type": "Table",
      "status": "added",
      "section": "IV-C",
      "original": null,
      "revised": {
        "page": 9,
        "label": "Table V",
        "image": "assets/crops/colored-revised.webp",
        "box": [
          7.516,
          6.313,
          42.157,
          15.404
        ],
        "aspect": 2.111111111111111
      },
      "summary": "An additional binary digit task tests a controlled color shortcut outside ImageNet.",
      "before": "",
      "after": "TABLE V: Controlled color shortcut on binary ColoredMNIST. Digit identity defines the semantic label, while color\nserves as a controlled spurious cue. Training labels contain\n25% noise, whereas test labels are clean, with approximately\n30% color–label agreement.\nMethod Source BN Tent CoTTA RoTTA SAR DeYO\nAcc. 50.93 47.21 44.36 47.21 50.23 47.21 62.37\nMethod AEA TRIBE LAW SPA PTTA DCF (Ours)\nAcc. 43.18 33.93 42.73 39.26 50.81 88.91",
      "diff": {
        "original": [],
        "revised": [
          {
            "kind": "add",
            "text": "TABLE V: Controlled color shortcut on binary ColoredMNIST. Digit identity defines the semantic label, while color\nserves as a controlled spurious cue. Training labels contain\n25% noise, whereas test labels are clean, with approximately\n30% color–label agreement.\nMethod Source BN Tent CoTTA RoTTA SAR DeYO\nAcc. 50.93 47.21 44.36 47.21 50.23 47.21 62.37\nMethod AEA TRIBE LAW SPA PTTA DCF (Ours)\nAcc. 43.18 33.93 42.73 39.26 50.81 88.91"
          }
        ]
      },
      "comments": [
        "r1-1"
      ]
    },
    {
      "id": "probe-sensitivity",
      "title": "Frequency and perturbation sensitivity",
      "type": "Figure",
      "status": "added",
      "section": "IV-C",
      "original": null,
      "revised": {
        "page": 12,
        "label": "Fig. 12(c)",
        "image": "assets/crops/freq-revised.webp",
        "box": [
          7.68,
          22.727,
          20.752,
          15.53
        ],
        "aspect": 1.0323624595469256
      },
      "summary": "The added panel varies nominal frequency sampling range and λ. The default configuration is λ = 0.2 with nominal frequency range [1, 224] cycles/image.",
      "before": "",
      "after": "Sampling range of fc (cycles/image)\n[1, 56]\n[1, 112]\n[1, 224]\n0.05 [56, 224]\n0.1\n0.15\n0.2\n0.4\nAvg. Acc. (%)\n0\n10\n20\n30\n40\n50\n42.6 42.8 43.0 43.2 43.4\n(c) fc range vs. λ",
      "diff": {
        "original": [],
        "revised": [
          {
            "kind": "add",
            "text": "Sampling range of fc (cycles/image)\n[1, 56]\n[1, 112]\n[1, 224]\n0.05 [56, 224]\n0.1\n0.15\n0.2\n0.4\nAvg. Acc. (%)\n0\n10\n20\n30\n40\n50\n42.6 42.8 43.0 43.2 43.4\n(c) fc range vs. λ"
          }
        ]
      },
      "figure": "f12",
      "comments": [
        "ae1",
        "r1-1",
        "sae"
      ]
    },
    {
      "id": "rgr-alternatives",
      "title": "OT versus simpler geometry repair",
      "type": "Table",
      "status": "added",
      "section": "IV-C",
      "original": null,
      "revised": {
        "page": 10,
        "label": "Table VII",
        "image": "assets/crops/rgr-revised.webp",
        "box": [
          7.516,
          31.944,
          42.157,
          14.773
        ],
        "aspect": 2.204778156996587
      },
      "summary": "New controlled alternatives keep PSR and CLR fixed, comparing discarding samples, moment matching, contrastive alignment, and OT with uniform or dynamic priors.",
      "before": "",
      "after": "TABLE VII: Comparison of alternative treatments for\nrouted-away samples on ImageNet-C. All variants share the\nsame PSR and CLR.\nTreatment of Ut T-CS T-CS-LS Long-horizon T-CS\n(Final Acc.) Avg.\nDiscard Ut (Trusted-only) 41.87 42.71 42.88 42.49\nMoment matching 42.81 42.82 41.51 42.38\nContrastive alignment 42.83 42.79 42.33 42.65\nRGR w/ fixed uniform prior 43.01 42.80 42.91 42.91\nRGR w/ dynamic prior 43.49 43.29 43.84 43.54",
      "diff": {
        "original": [],
        "revised": [
          {
            "kind": "add",
            "text": "TABLE VII: Comparison of alternative treatments for\nrouted-away samples on ImageNet-C. All variants share the\nsame PSR and CLR.\nTreatment of Ut T-CS T-CS-LS Long-horizon T-CS\n(Final Acc.) Avg.\nDiscard Ut (Trusted-only) 41.87 42.71 42.88 42.49\nMoment matching 42.81 42.82 41.51 42.38\nContrastive alignment 42.83 42.79 42.33 42.65\nRGR w/ fixed uniform prior 43.01 42.80 42.91 42.91\nRGR w/ dynamic prior 43.49 43.29 43.84 43.54"
          }
        ]
      },
      "comments": [
        "ae2",
        "sae",
        "r1-2"
      ]
    },
    {
      "id": "prior-safeguards",
      "title": "Prior smoothing and centroid safeguards",
      "type": "Text",
      "status": "modified",
      "section": "III-D",
      "original": {
        "page": 6,
        "label": "Dynamic-marginal OT",
        "image": "assets/crops/prior-original.webp",
        "box": [
          7.516,
          38.636,
          42.157,
          36.111
        ],
        "aspect": 0.9022346368715084
      },
      "revised": {
        "page": 5,
        "label": "Eqs. (10)–(12) and safeguards",
        "image": "assets/crops/prior-revised.webp",
        "box": [
          7.516,
          61.995,
          42.157,
          32.702
        ],
        "boxes": [
          [
            7.516,
            61.995,
            42.157,
            32.702
          ],
          [
            50.49,
            6.692,
            41.993,
            6.439
          ]
        ],
        "aspect": 0.8197969543147208
      },
      "summary": "Prior mixing is separated from the EMA rate, with explicit defaults, a bound on deviation from uniform, and limitations under noisy estimates.",
      "before": "Dynamic-marginal optimal transport. For each view, we compute an entropic OT assignment from routed-away features to the shared centroids. The cosine cost is ⟪\\displaystyle [\\mathbf{C}_t^V]_{ic} = 1-\\cos(\\mathbf{z}_{t,i}^{V},\\mathbf{M}_{t,c}), \\qquad V\\in\\{A,B\\}.⟫ (12) Let ⟪a_t=\\mathbf{1}_{n_t}/n_t\\in\\Delta^{n_t-1}⟫ be the sample marginal. To make the centroid marginal compatible with possible label shift, we estimate the current target class prior from stop-gradient predictions: ⟪\\displaystyle \\hat{\\pi}_{t} = \\frac{1}{N_t} \\sum_{i=1}^{N_t} \\operatorname{sg}\\!\\left[p_{\\theta_t}(\\cdot\\mid x_{t,i})\\right],⟫ (13) where ⟪\\operatorname{sg}[\\cdot]⟫ denotes stop-gradient. We maintain an exponential moving average of this prior: ⟪\\displaystyle \\bar{b}_t = (1-\\rho)\\bar{b}_{t-1} + \\rho\\hat{\\pi}_{t}, \\qquad \\bar{b}_0=\\frac{\\mathbf{1}_K}{K}.⟫ (14) The final centroid marginal used in the OT constraints is ⟪\\displaystyle b_t = \\rho\\bar{b}_t + (1-\\rho)\\frac{\\mathbf{1}_K}{K}.⟫ (15) The uniform component serves as an anti-collapse floor, discouraging routed-away samples from being concentrated on only a few categories.",
      "after": "Dynamic-marginal OT: For each view, we solve an entropic OT assignment to the shared centroids under the cosine cost ⟪[\\mathbf{C}_t^V]_{ic}=1-\\cos(\\mathbf{z}_{t,i}^{V},\\mathbf{M}_{t,c})⟫ (⟪V\\in\\{A,B\\}⟫). With uniform sample marginals ⟪a_t=\\mathbf{1}_{n_t}/n_t\\in\\Delta^{n_t-1}⟫, we allow the centroid marginal to adapt conservatively to potential changes in target class prevalence. Specifically, we first estimate the batch-level target prior from stop-gradient predictions and maintain its exponential moving average: ⟪\\displaystyle \\begin{aligned} \\hat{\\pi}_{t} &= \\frac{1}{N_t} \\sum_{i=1}^{N_t} \\operatorname{sg}\\!\\left[ p_{\\theta_t}(\\cdot\\mid x_{t,i}) \\right],\\\\ \\bar{b}_t &= (1-\\rho)\\bar{b}_{t-1} + \\rho\\hat{\\pi}_{t}, \\qquad \\bar{b}_0=\\mathbf{1}_K/K, \\end{aligned}⟫ where ⟪\\rho=0.01⟫ and the uniform initialization and slow EMA suppress transient errors in ⟪\\hat{\\pi}_t⟫ during early adaptation. We then interpolate the estimated prior with the uniform marginal: ⟪\\displaystyle b_t = \\alpha_b\\bar{b}_t + (1-\\alpha_b)\\frac{\\mathbf{1}_K}{K},⟫ where ⟪\\alpha_b=0.01⟫ limits deviation from the uniform marginal. For ⟪u=\\mathbf{1}_K/K⟫, ⟪\\lVert b_t-u\\rVert_1\\le2\\alpha_b⟫ and ⟪b_{t,c}\\ge(1-\\alpha_b)/K⟫, enabling gradual adaptation without severe imbalance. The slow EMA mitigates early fluctuations, though persistent bias may affect the estimated prior. A tiny routed-away set limits target support, while an overly dominant one reduces trusted supervision. If ⟪\\mathcal{R}_t=\\varnothing⟫, the update is skipped and ⟪\\bar{b}_t=\\bar{b}_{t-1}⟫.",
      "diff": {
        "original": [
          {
            "kind": "same",
            "text": "Dynamic-marginal "
          },
          {
            "kind": "del",
            "text": "optimal transport. "
          },
          {
            "kind": "same",
            "text": "For each view, we "
          },
          {
            "kind": "del",
            "text": "compute "
          },
          {
            "kind": "same",
            "text": "an entropic OT assignment "
          },
          {
            "kind": "del",
            "text": "from routed-away features "
          },
          {
            "kind": "same",
            "text": "to the shared "
          },
          {
            "kind": "del",
            "text": "centroids. The "
          },
          {
            "kind": "same",
            "text": "cosine cost "
          },
          {
            "kind": "del",
            "text": "is ⟪\\displaystyle [\\mathbf{C}_t^V]_{ic} = 1-\\cos(\\mathbf{z}_{t,i}^{V},\\mathbf{M}_{t,c}), \\qquad V\\in\\{A,B\\}.⟫ (12) Let ⟪a_t=\\mathbf{1}_{n_t}/n_t\\in\\Delta^{n_t-1}⟫ be the "
          },
          {
            "kind": "same",
            "text": "sample "
          },
          {
            "kind": "del",
            "text": "marginal. To make "
          },
          {
            "kind": "same",
            "text": "the centroid marginal "
          },
          {
            "kind": "del",
            "text": "compatible with possible label shift, "
          },
          {
            "kind": "same",
            "text": "we "
          },
          {
            "kind": "same",
            "text": "estimate the "
          },
          {
            "kind": "del",
            "text": "current "
          },
          {
            "kind": "same",
            "text": "target "
          },
          {
            "kind": "del",
            "text": "class "
          },
          {
            "kind": "same",
            "text": "prior from stop-gradient "
          },
          {
            "kind": "del",
            "text": "predictions: ⟪\\displaystyle \\hat{\\pi}_{t} = \\frac{1}{N_t} \\sum_{i=1}^{N_t} \\operatorname{sg}\\!\\left[p_{\\theta_t}(\\cdot\\mid x_{t,i})\\right],⟫ (13) where ⟪\\operatorname{sg}[\\cdot]⟫ denotes stop-gradient. We "
          },
          {
            "kind": "same",
            "text": "maintain "
          },
          {
            "kind": "del",
            "text": "an "
          },
          {
            "kind": "same",
            "text": "exponential moving "
          },
          {
            "kind": "del",
            "text": "average of this prior: ⟪\\displaystyle \\bar{b}_t = (1-\\rho)\\bar{b}_{t-1} + \\rho\\hat{\\pi}_{t}, \\qquad \\bar{b}_0=\\frac{\\mathbf{1}_K}{K}.⟫ (14) "
          },
          {
            "kind": "same",
            "text": "The "
          },
          {
            "kind": "del",
            "text": "final centroid marginal used in "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "del",
            "text": "OT constraints "
          },
          {
            "kind": "same",
            "text": "is "
          },
          {
            "kind": "del",
            "text": "⟪\\displaystyle b_t = \\rho\\bar{b}_t + (1-\\rho)\\frac{\\mathbf{1}_K}{K}.⟫ (15) The uniform component serves as an anti-collapse floor, discouraging routed-away samples from being concentrated on only a few categories."
          }
        ],
        "revised": [
          {
            "kind": "same",
            "text": "Dynamic-marginal "
          },
          {
            "kind": "add",
            "text": "OT: "
          },
          {
            "kind": "same",
            "text": "For each view, we "
          },
          {
            "kind": "add",
            "text": "solve "
          },
          {
            "kind": "same",
            "text": "an entropic OT assignment "
          },
          {
            "kind": "same",
            "text": "to the shared "
          },
          {
            "kind": "add",
            "text": "centroids under the "
          },
          {
            "kind": "same",
            "text": "cosine cost "
          },
          {
            "kind": "add",
            "text": "⟪[\\mathbf{C}_t^V]_{ic}=1-\\cos(\\mathbf{z}_{t,i}^{V},\\mathbf{M}_{t,c})⟫ (⟪V\\in\\{A,B\\}⟫). With uniform "
          },
          {
            "kind": "same",
            "text": "sample "
          },
          {
            "kind": "add",
            "text": "marginals ⟪a_t=\\mathbf{1}_{n_t}/n_t\\in\\Delta^{n_t-1}⟫, we allow "
          },
          {
            "kind": "same",
            "text": "the centroid marginal "
          },
          {
            "kind": "add",
            "text": "to adapt conservatively to potential changes in target class prevalence. Specifically, "
          },
          {
            "kind": "same",
            "text": "we "
          },
          {
            "kind": "add",
            "text": "first "
          },
          {
            "kind": "same",
            "text": "estimate the "
          },
          {
            "kind": "add",
            "text": "batch-level "
          },
          {
            "kind": "same",
            "text": "target "
          },
          {
            "kind": "same",
            "text": "prior from stop-gradient "
          },
          {
            "kind": "add",
            "text": "predictions and "
          },
          {
            "kind": "same",
            "text": "maintain "
          },
          {
            "kind": "add",
            "text": "its "
          },
          {
            "kind": "same",
            "text": "exponential moving "
          },
          {
            "kind": "add",
            "text": "average: ⟪\\displaystyle \\begin{aligned} \\hat{\\pi}_{t} &= \\frac{1}{N_t} \\sum_{i=1}^{N_t} \\operatorname{sg}\\!\\left[ p_{\\theta_t}(\\cdot\\mid x_{t,i}) \\right],\\\\ \\bar{b}_t &= (1-\\rho)\\bar{b}_{t-1} + \\rho\\hat{\\pi}_{t}, \\qquad \\bar{b}_0=\\mathbf{1}_K/K, \\end{aligned}⟫ where ⟪\\rho=0.01⟫ and the uniform initialization and slow EMA suppress transient errors in ⟪\\hat{\\pi}_t⟫ during early adaptation. We then interpolate the estimated prior with the uniform marginal: ⟪\\displaystyle b_t = \\alpha_b\\bar{b}_t + (1-\\alpha_b)\\frac{\\mathbf{1}_K}{K},⟫ where ⟪\\alpha_b=0.01⟫ limits deviation from the uniform marginal. For ⟪u=\\mathbf{1}_K/K⟫, ⟪\\lVert b_t-u\\rVert_1\\le2\\alpha_b⟫ and ⟪b_{t,c}\\ge(1-\\alpha_b)/K⟫, enabling gradual adaptation without severe imbalance. "
          },
          {
            "kind": "same",
            "text": "The "
          },
          {
            "kind": "add",
            "text": "slow EMA mitigates early fluctuations, though persistent bias may affect "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "add",
            "text": "estimated prior. A tiny routed-away set limits target support, while an overly dominant one reduces trusted supervision. If ⟪\\mathcal{R}_t=\\varnothing⟫, the update "
          },
          {
            "kind": "same",
            "text": "is "
          },
          {
            "kind": "add",
            "text": "skipped and ⟪\\bar{b}_t=\\bar{b}_{t-1}⟫."
          }
        ]
      },
      "comments": [
        "ae2",
        "r1-2",
        "r2-3"
      ]
    },
    {
      "id": "routing-ratio",
      "title": "Failure analysis across routed-away proportions",
      "type": "Table",
      "status": "added",
      "section": "IV-C",
      "original": null,
      "revised": {
        "page": 10,
        "label": "Table VIII",
        "image": "assets/crops/ratio-revised.webp",
        "box": [
          7.516,
          48.611,
          42.157,
          19.318
        ],
        "aspect": 1.6866840731070496
      },
      "summary": "The new stress test varies routed-away proportions from 10% to 90% and reports both accuracy and centroid displacement.",
      "before": "",
      "after": "TABLE VIII: Routing-ratio stress test on ImageNet-C (T-CS).\nControlled ratios are imposed per mini-batch using PSR-based\nranking; Native uses the original routing. Acc. denotes average\ntop-1 accuracy, and centroid drift denotes the mean ℓ2 prototype\ndisplacement from the initial online reference.\nRouted-away ratio Acc. Centroid drift\nNative 43.49 0.0518\n10% 42.98 0.0052\n25% 43.49 0.0217\n50% 43.18 0.0829\n75% 41.64 0.1268\n90% 22.12 0.0468",
      "diff": {
        "original": [],
        "revised": [
          {
            "kind": "add",
            "text": "TABLE VIII: Routing-ratio stress test on ImageNet-C (T-CS).\nControlled ratios are imposed per mini-batch using PSR-based\nranking; Native uses the original routing. Acc. denotes average\ntop-1 accuracy, and centroid drift denotes the mean ℓ2 prototype\ndisplacement from the initial online reference.\nRouted-away ratio Acc. Centroid drift\nNative 43.49 0.0518\n10% 42.98 0.0052\n25% 43.49 0.0217\n50% 43.18 0.0829\n75% 41.64 0.1268\n90% 22.12 0.0468"
          }
        ]
      },
      "comments": [
        "ae2",
        "sae",
        "r1-2"
      ]
    },
    {
      "id": "empty-sets",
      "title": "Explicit state preservation for empty subsets",
      "type": "Equation",
      "status": "modified",
      "section": "III-B–E",
      "original": {
        "page": 7,
        "label": "Algorithm 1",
        "image": "assets/crops/algorithm-original.webp",
        "box": [
          50.49,
          6.692,
          41.993,
          58.838
        ],
        "aspect": 0.5514579759862779
      },
      "revised": {
        "page": 6,
        "label": "Algorithm 1",
        "image": "assets/crops/algorithm-revised.webp",
        "box": [
          50.49,
          6.692,
          41.993,
          61.616
        ],
        "aspect": 0.5266175266175266
      },
      "summary": "The revised pseudocode preserves the model, centroids, and prior when the trusted set is empty, and initializes the next centroid state before conditionally applying geometry repair.",
      "before": "Algorithm 1: Proposed DCF algorithm\nRequire: Source parameters ⟪\\theta_0⟫ , learning rate ⟪\\eta⟫ , thresholds\n⟪\\upsilon_{\\mathrm{Ent}}, \\upsilon_{\\mathrm{PCS}}⟫\nInput: Unlabeled test stream ⟪\\{x_t\\}_{t=1}^{T}⟫\nInitialize class centroids ⟪\\mathbf{M}_0⟫ from source classifier\nfor each mini-batch ⟪x_t⟫ at time ⟪t=1,2,\\dots,T⟫ do\n// Stage 1: Route target samples\nInitialize ⟪\\mathcal{R}_t \\leftarrow \\emptyset⟫ ,\n⟪\\mathcal{U}_t \\leftarrow \\emptyset⟫\nfor each sample ⟪x_{t,i}\\in x_t⟫ do\nCompute predictive entropy ⟪E_{\\theta_t}(x_{t,i})⟫\nCompute PCS score ⟪s_{\\theta_t}(x_{t,i})⟫ via\nEq. 5\nif ⟪E_{\\theta_t}(x_{t,i})<\\upsilon_{\\mathrm{Ent}}⟫\nand\n⟪s_{\\theta_t}(x_{t,i})>\\upsilon_{\\mathrm{PCS}}⟫ then\n⟪\\mathcal{R}_t \\leftarrow \\mathcal{R}_t \\cup \\{x_{t,i}\\}⟫\nelse\n⟪\\mathcal{U}_t \\leftarrow \\mathcal{U}_t \\cup \\{x_{t,i}\\}⟫\nend\nend\n// Stage 2: Adapt routed subsets separately\nInitialize ⟪\\mathcal{L}_{\\mathrm{trust}}\\leftarrow 0⟫ ,\n⟪\\mathcal{L}_{\\mathrm{geo}}\\leftarrow 0⟫\nif ⟪|\\mathcal{R}_t|>0⟫ then\nCompute ⟪\\mathcal{L}_{\\mathrm{trust}}⟫ on ⟪\\mathcal{R}_t⟫ via\nEq. 10\nend\nif ⟪|\\mathcal{U}_t|>0⟫ then\nCompute dynamic marginal ⟪b_t⟫ via\nEq. 15\nSolve OT plans ⟪\\gamma_{t,A}^{*},\\gamma_{t,B}^{*}⟫ via\nEq. 16\nCompute ⟪\\mathcal{L}_{\\mathrm{geo}}⟫ on ⟪\\mathcal{U}_t⟫ via\nEq. 17\nUpdate centroids ⟪\\mathbf{M}_{t+1}⟫ via\nEq. 19\nend\nCompute candidate parameters:\n⟪\\theta_t^{+} = \\theta_t - \\eta\\nabla_{\\theta_t} (\\mathcal{L}_{\\mathrm{trust}}+\\mathcal{L}_{\\mathrm{geo}})⟫\n// Stage 3: Retain source-compatible layer updates\nfor each layer ⟪l\\in\\{1,\\dots,L\\}⟫ do\nEstimate curvature proxies ⟪I_t^l⟫ and ⟪I_0^l⟫ on current batch\nCompute retention gate ⟪\\mu_t^l⟫ via Eq. 23\nUpdate layer ⟪\\theta_{t+1}^l⟫ via Eq. 21\nend\nend\nOutput: Adapted model parameters ⟪\\theta_T⟫",
      "after": "Algorithm 1: Proposed DCF algorithm\nRequire: Source parameters ⟪\\theta_0⟫ , learning rate ⟪\\eta⟫ ,\nthresholds ⟪\\upsilon_{\\mathrm{Ent}},\\upsilon_{\\mathrm{PCS}}⟫\nInput: Unlabeled test stream ⟪\\{x_t\\}_{t=1}^{T}⟫\nInitialize ⟪\\theta_1\\gets\\theta_0⟫ , ⟪\\mathbf{M}_1\\gets\\mathbf{M}_0⟫ ,\nand ⟪\\bar b_0\\gets\\mathbf{1}_K/K⟫\nfor each mini-batch ⟪x_t⟫ at time ⟪t=1,2,\\dots,T⟫ do\n// Stage 1: Route: Probe-supported Sample Routing\nInitialize ⟪\\mathcal{R}_t \\leftarrow \\emptyset⟫ , ⟪\\mathcal{U}_t \\leftarrow \\emptyset⟫\nfor each sample ⟪x_{t,i}\\in x_t⟫ do\nCompute predictive entropy ⟪E_{\\theta_t}(x_{t,i})⟫\nCompute PCS score ⟪s_{\\theta_t}(x_{t,i})⟫ via\nEq. 5\nif ⟪E_{\\theta_t}(x_{t,i})<\\upsilon_{\\mathrm{Ent}}⟫\nand\n⟪s_{\\theta_t}(x_{t,i})>\\upsilon_{\\mathrm{PCS}}⟫ then\n⟪\\mathcal{R}_t \\leftarrow \\mathcal{R}_t \\cup \\{x_{t,i}\\}⟫\nelse\n⟪\\mathcal{U}_t \\leftarrow \\mathcal{U}_t \\cup \\{x_{t,i}\\}⟫\nend\nend\nif ⟪\\mathcal{R}_t=\\varnothing⟫ then\n⟪(\\theta_{t+1},\\mathbf{M}_{t+1},\\bar b_t) \\gets(\\theta_t,\\mathbf{M}_t,\\bar b_{t-1})⟫\ncontinue\nend\n// Stage 2: Adapt: Decoupled Sample-side Adaptation\n⟪\\mathcal{L}_{\\mathrm{trust}}, \\mathcal{L}_{\\mathrm{geo}} \\leftarrow 0⟫ ,\n⟪\\mathbf{M}_{t+1}\\leftarrow\\mathbf{M}_t⟫\nUpdate ⟪\\bar b_t⟫ using ⟪\\hat{\\pi}_t⟫ via Eq. 10, Eq. 11\nCompute ⟪\\mathcal{L}_{\\mathrm{trust}}⟫ on ⟪\\mathcal{R}_t⟫ via Eq. 9\nif ⟪\\mathcal{U}_t\\neq\\varnothing⟫ then\nCompute ⟪b_t⟫ and OT plans\n⟪\\gamma_{t,A}^{*},\\gamma_{t,B}^{*}⟫ via Eq. 12, Eq. 13\nCompute ⟪\\mathcal{L}_{\\mathrm{geo}}⟫ and update ⟪\\mathbf{M}_{t+1}⟫ via Eq. 14, Eq. 16\nend\n⟪\\theta_t^{+}\\gets \\theta_t-\\eta\\nabla_{\\theta_t} (\\mathcal{L}_{\\mathrm{trust}}+\\mathcal{L}_{\\mathrm{geo}})⟫\n// Stage 3: Retain: Curvature-aware Layer Retention\nfor ⟪l=1,\\dots,L⟫ do\nEstimate curvature-aware proxies ⟪I_t^l, I_0^l⟫ via Eq. 19\nCompute retention gate ⟪\\mu_t^l⟫ via Eq. 20\nUpdate layer ⟪\\theta_{t+1}^l⟫ via Eq. 18\nend\nend\nOutput: Adapted model parameters ⟪\\theta_{T+1}⟫",
      "diff": {
        "original": [
          {
            "kind": "same",
            "text": "Algorithm 1: Proposed DCF algorithm\nRequire: Source parameters ⟪\\theta_0⟫ , learning rate ⟪\\eta⟫ "
          },
          {
            "kind": "del",
            "text": ", thresholds\n⟪\\upsilon_{\\mathrm{Ent}}, \\upsilon_{\\mathrm{PCS}}⟫\n"
          },
          {
            "kind": "same",
            "text": "Input: Unlabeled test stream ⟪\\{x_t\\}_{t=1}^{T}⟫\nInitialize "
          },
          {
            "kind": "del",
            "text": "class centroids ⟪\\mathbf{M}_0⟫ from source classifier\n"
          },
          {
            "kind": "same",
            "text": "for each mini-batch ⟪x_t⟫ at time ⟪t=1,2,\\dots,T⟫ do\n// Stage 1: "
          },
          {
            "kind": "del",
            "text": "Route target samples\n"
          },
          {
            "kind": "same",
            "text": "Initialize ⟪\\mathcal{R}_t \\leftarrow \\emptyset⟫ "
          },
          {
            "kind": "del",
            "text": ",\n"
          },
          {
            "kind": "same",
            "text": "⟪\\mathcal{U}_t \\leftarrow \\emptyset⟫\nfor each sample ⟪x_{t,i}\\in x_t⟫ do\nCompute predictive entropy ⟪E_{\\theta_t}(x_{t,i})⟫\nCompute PCS score ⟪s_{\\theta_t}(x_{t,i})⟫ via\nEq. 5\nif ⟪E_{\\theta_t}(x_{t,i})<\\upsilon_{\\mathrm{Ent}}⟫\nand\n⟪s_{\\theta_t}(x_{t,i})>\\upsilon_{\\mathrm{PCS}}⟫ then\n⟪\\mathcal{R}_t \\leftarrow \\mathcal{R}_t \\cup \\{x_{t,i}\\}⟫\nelse\n⟪\\mathcal{U}_t \\leftarrow \\mathcal{U}_t \\cup \\{x_{t,i}\\}⟫\nend\nend\n"
          },
          {
            "kind": "same",
            "text": "// Stage 2: "
          },
          {
            "kind": "del",
            "text": "Adapt routed subsets separately\nInitialize ⟪\\mathcal{L}_{\\mathrm{trust}}\\leftarrow 0⟫ "
          },
          {
            "kind": "same",
            "text": ",\n"
          },
          {
            "kind": "del",
            "text": "⟪\\mathcal{L}_{\\mathrm{geo}}\\leftarrow 0⟫\nif ⟪|\\mathcal{R}_t|>0⟫ then\n"
          },
          {
            "kind": "same",
            "text": "Compute ⟪\\mathcal{L}_{\\mathrm{trust}}⟫ on ⟪\\mathcal{R}_t⟫ "
          },
          {
            "kind": "del",
            "text": "via\n"
          },
          {
            "kind": "same",
            "text": "Eq. "
          },
          {
            "kind": "del",
            "text": "10\nend\n"
          },
          {
            "kind": "same",
            "text": "if "
          },
          {
            "kind": "del",
            "text": "⟪|\\mathcal{U}_t|>0⟫ "
          },
          {
            "kind": "same",
            "text": "then\nCompute "
          },
          {
            "kind": "del",
            "text": "dynamic marginal "
          },
          {
            "kind": "same",
            "text": "⟪b_t⟫ "
          },
          {
            "kind": "del",
            "text": "via\n"
          },
          {
            "kind": "same",
            "text": "Eq. "
          },
          {
            "kind": "del",
            "text": "15\nSolve OT plans ⟪\\gamma_{t,A}^{*},\\gamma_{t,B}^{*}⟫ via\n"
          },
          {
            "kind": "same",
            "text": "Eq. 16\n"
          },
          {
            "kind": "del",
            "text": "Compute ⟪\\mathcal{L}_{\\mathrm{geo}}⟫ on ⟪\\mathcal{U}_t⟫ via\nEq. 17\nUpdate centroids ⟪\\mathbf{M}_{t+1}⟫ via\nEq. 19\n"
          },
          {
            "kind": "same",
            "text": "end\n"
          },
          {
            "kind": "del",
            "text": "Compute candidate parameters:\n⟪\\theta_t^{+} = \\theta_t - \\eta\\nabla_{\\theta_t} (\\mathcal{L}_{\\mathrm{trust}}+\\mathcal{L}_{\\mathrm{geo}})⟫\n"
          },
          {
            "kind": "same",
            "text": "// Stage 3: "
          },
          {
            "kind": "del",
            "text": "Retain source-compatible layer updates\n"
          },
          {
            "kind": "same",
            "text": "for "
          },
          {
            "kind": "del",
            "text": "each layer ⟪l\\in\\{1,\\dots,L\\}⟫ "
          },
          {
            "kind": "same",
            "text": "do\nEstimate "
          },
          {
            "kind": "del",
            "text": "curvature "
          },
          {
            "kind": "same",
            "text": "proxies "
          },
          {
            "kind": "del",
            "text": "⟪I_t^l⟫ and ⟪I_0^l⟫ on current batch\n"
          },
          {
            "kind": "same",
            "text": "Compute retention gate ⟪\\mu_t^l⟫ via Eq. "
          },
          {
            "kind": "del",
            "text": "23\n"
          },
          {
            "kind": "same",
            "text": "Update layer ⟪\\theta_{t+1}^l⟫ via Eq. "
          },
          {
            "kind": "del",
            "text": "21\n"
          },
          {
            "kind": "same",
            "text": "end\nend\nOutput: Adapted model parameters "
          },
          {
            "kind": "del",
            "text": "⟪\\theta_T⟫"
          }
        ],
        "revised": [
          {
            "kind": "same",
            "text": "Algorithm 1: Proposed DCF algorithm\nRequire: Source parameters ⟪\\theta_0⟫ , learning rate ⟪\\eta⟫ "
          },
          {
            "kind": "add",
            "text": ",\nthresholds ⟪\\upsilon_{\\mathrm{Ent}},\\upsilon_{\\mathrm{PCS}}⟫\n"
          },
          {
            "kind": "same",
            "text": "Input: Unlabeled test stream ⟪\\{x_t\\}_{t=1}^{T}⟫\nInitialize "
          },
          {
            "kind": "add",
            "text": "⟪\\theta_1\\gets\\theta_0⟫ , ⟪\\mathbf{M}_1\\gets\\mathbf{M}_0⟫ ,\nand ⟪\\bar b_0\\gets\\mathbf{1}_K/K⟫\n"
          },
          {
            "kind": "same",
            "text": "for each mini-batch ⟪x_t⟫ at time ⟪t=1,2,\\dots,T⟫ do\n// Stage 1: "
          },
          {
            "kind": "add",
            "text": "Route: Probe-supported Sample Routing\n"
          },
          {
            "kind": "same",
            "text": "Initialize ⟪\\mathcal{R}_t \\leftarrow \\emptyset⟫ "
          },
          {
            "kind": "add",
            "text": ", "
          },
          {
            "kind": "same",
            "text": "⟪\\mathcal{U}_t \\leftarrow \\emptyset⟫\nfor each sample ⟪x_{t,i}\\in x_t⟫ do\nCompute predictive entropy ⟪E_{\\theta_t}(x_{t,i})⟫\nCompute PCS score ⟪s_{\\theta_t}(x_{t,i})⟫ via\nEq. 5\nif ⟪E_{\\theta_t}(x_{t,i})<\\upsilon_{\\mathrm{Ent}}⟫\nand\n⟪s_{\\theta_t}(x_{t,i})>\\upsilon_{\\mathrm{PCS}}⟫ then\n⟪\\mathcal{R}_t \\leftarrow \\mathcal{R}_t \\cup \\{x_{t,i}\\}⟫\nelse\n⟪\\mathcal{U}_t \\leftarrow \\mathcal{U}_t \\cup \\{x_{t,i}\\}⟫\nend\nend\n"
          },
          {
            "kind": "add",
            "text": "if ⟪\\mathcal{R}_t=\\varnothing⟫ then\n⟪(\\theta_{t+1},\\mathbf{M}_{t+1},\\bar b_t) \\gets(\\theta_t,\\mathbf{M}_t,\\bar b_{t-1})⟫\ncontinue\nend\n"
          },
          {
            "kind": "same",
            "text": "// Stage 2: "
          },
          {
            "kind": "add",
            "text": "Adapt: Decoupled Sample-side Adaptation\n⟪\\mathcal{L}_{\\mathrm{trust}}, \\mathcal{L}_{\\mathrm{geo}} \\leftarrow 0⟫ "
          },
          {
            "kind": "same",
            "text": ",\n"
          },
          {
            "kind": "add",
            "text": "⟪\\mathbf{M}_{t+1}\\leftarrow\\mathbf{M}_t⟫\nUpdate ⟪\\bar b_t⟫ using ⟪\\hat{\\pi}_t⟫ via Eq. 10, Eq. 11\n"
          },
          {
            "kind": "same",
            "text": "Compute ⟪\\mathcal{L}_{\\mathrm{trust}}⟫ on ⟪\\mathcal{R}_t⟫ "
          },
          {
            "kind": "add",
            "text": "via "
          },
          {
            "kind": "same",
            "text": "Eq. "
          },
          {
            "kind": "add",
            "text": "9\n"
          },
          {
            "kind": "same",
            "text": "if "
          },
          {
            "kind": "add",
            "text": "⟪\\mathcal{U}_t\\neq\\varnothing⟫ "
          },
          {
            "kind": "same",
            "text": "then\nCompute "
          },
          {
            "kind": "same",
            "text": "⟪b_t⟫ "
          },
          {
            "kind": "add",
            "text": "and OT plans\n⟪\\gamma_{t,A}^{*},\\gamma_{t,B}^{*}⟫ via "
          },
          {
            "kind": "same",
            "text": "Eq. "
          },
          {
            "kind": "add",
            "text": "12, Eq. 13\nCompute ⟪\\mathcal{L}_{\\mathrm{geo}}⟫ and update ⟪\\mathbf{M}_{t+1}⟫ via Eq. 14, "
          },
          {
            "kind": "same",
            "text": "Eq. 16\n"
          },
          {
            "kind": "same",
            "text": "end\n"
          },
          {
            "kind": "add",
            "text": "⟪\\theta_t^{+}\\gets \\theta_t-\\eta\\nabla_{\\theta_t} (\\mathcal{L}_{\\mathrm{trust}}+\\mathcal{L}_{\\mathrm{geo}})⟫\n"
          },
          {
            "kind": "same",
            "text": "// Stage 3: "
          },
          {
            "kind": "add",
            "text": "Retain: Curvature-aware Layer Retention\n"
          },
          {
            "kind": "same",
            "text": "for "
          },
          {
            "kind": "add",
            "text": "⟪l=1,\\dots,L⟫ "
          },
          {
            "kind": "same",
            "text": "do\nEstimate "
          },
          {
            "kind": "add",
            "text": "curvature-aware "
          },
          {
            "kind": "same",
            "text": "proxies "
          },
          {
            "kind": "add",
            "text": "⟪I_t^l, I_0^l⟫ via Eq. 19\n"
          },
          {
            "kind": "same",
            "text": "Compute retention gate ⟪\\mu_t^l⟫ via Eq. "
          },
          {
            "kind": "add",
            "text": "20\n"
          },
          {
            "kind": "same",
            "text": "Update layer ⟪\\theta_{t+1}^l⟫ via Eq. "
          },
          {
            "kind": "add",
            "text": "18\n"
          },
          {
            "kind": "same",
            "text": "end\nend\nOutput: Adapted model parameters "
          },
          {
            "kind": "add",
            "text": "⟪\\theta_{T+1}⟫"
          }
        ]
      },
      "comments": [
        "r1-2"
      ]
    },
    {
      "id": "retention-heatmap",
      "title": "Retention gates over time and corruption type",
      "type": "Figure",
      "status": "added",
      "section": "IV-C",
      "original": null,
      "revised": {
        "page": 10,
        "label": "Fig. 9",
        "image": "assets/crops/gates-revised.webp",
        "box": [
          50.49,
          28.409,
          41.993,
          30.303
        ],
        "aspect": 1.0698835274542429
      },
      "summary": "A new heatmap directly shows the retention gate for initial_bn and layer1–layer4 across the 225-domain stream and across corruption types.",
      "before": "",
      "after": "Fig. 9: Per-layer retention gates ⟪\\mu_t^l⟫ of CLR (ResNet-50). (a) Gates over the long-horizon stream (Domain index ⟪0\\!\\to\\!225⟫). (b) Gates per corruption type on T-CS.",
      "diff": {
        "original": [],
        "revised": [
          {
            "kind": "add",
            "text": "Fig. 9: Per-layer retention gates ⟪\\mu_t^l⟫ of CLR (ResNet-50). (a) Gates over the long-horizon stream (Domain index ⟪0\\!\\to\\!225⟫). (b) Gates per corruption type on T-CS."
          }
        ]
      },
      "figure": "f9",
      "comments": [
        "ae4",
        "r1-4"
      ],
      "textScope": "caption"
    },
    {
      "id": "curvature-proxies",
      "title": "Control granularity and alternative curvature proxies",
      "type": "Table",
      "status": "added",
      "section": "IV-C",
      "original": null,
      "revised": {
        "page": 10,
        "label": "Table IX",
        "image": "assets/crops/clr-revised.webp",
        "box": [
          50.49,
          59.848,
          41.993,
          16.919
        ],
        "aspect": 1.9136904761904763
      },
      "summary": "New comparisons test normalization-layer versus block-level control, expected Fisher, and a Hutchinson-based diagonal approximation.",
      "before": "",
      "after": "TABLE IX: Ablation of design choices in CLR on ImageNetC (long-horizon T-CS). We compare different control granularities and curvature-aware proxy estimators.\nAvg. Acc. extra ms/img\n(a) Control granularity\nPer-normalization-layer 42.92 0\nPer-layer block (default) 43.48 0\n(b) Curvature-aware proxy estimator\nPer-sample gradient-square (default) 43.48 0\nExpected Fisher [51] 43.57 1.9\nHutchinson-based diagonal approximation 43.70 6.8",
      "diff": {
        "original": [],
        "revised": [
          {
            "kind": "add",
            "text": "TABLE IX: Ablation of design choices in CLR on ImageNetC (long-horizon T-CS). We compare different control granularities and curvature-aware proxy estimators.\nAvg. Acc. extra ms/img\n(a) Control granularity\nPer-normalization-layer 42.92 0\nPer-layer block (default) 43.48 0\n(b) Curvature-aware proxy estimator\nPer-sample gradient-square (default) 43.48 0\nExpected Fisher [51] 43.57 1.9\nHutchinson-based diagonal approximation 43.70 6.8"
          }
        ]
      },
      "comments": [
        "ae4",
        "sae",
        "r1-3",
        "r1-4",
        "r2-1"
      ]
    },
    {
      "id": "curvature-definition",
      "title": "Curvature proxy clarified and equations renumbered",
      "type": "Equation",
      "status": "modified",
      "section": "III-E",
      "original": {
        "page": 7,
        "label": "Eqs. (22)–(23)",
        "image": "assets/crops/proxy-original.webp",
        "box": [
          7.516,
          33.965,
          42.157,
          36.995
        ],
        "aspect": 0.8801089918256131
      },
      "revised": {
        "page": 6,
        "label": "Eqs. (19)–(20)",
        "image": "assets/crops/proxy-revised.webp",
        "box": [
          7.516,
          22.449,
          42.157,
          31.212
        ],
        "aspect": 1.0436187399030694
      },
      "summary": "The gradient-square estimator and retention-gate formula are retained. The surrounding text clarifies per-sample averaging and that the source proxy is recomputed on the same unlabeled batch.",
      "before": "Curvature proxy and retention gate. The raw curvature proxy for the candidate model is estimated from pseudo-label gradients on the current batch: ⟪\\displaystyle I_t^{l} = \\frac{1}{N_t} \\sum_{i=1}^{N_t} g_t^{l}(x_{t,i})\\odot g_t^{l}(x_{t,i}),⟫ (22) where ⟪g_t^{l}(x_{t,i})=\\nabla_{\\theta_t^{+,l}}\\log p_{\\theta_t^{+}}(\\hat{y}_t^{+}(x_{t,i})\\mid x_{t,i})⟫ , ⟪\\hat{y}_t^{+}(x_{t,i})=\\arg\\max_y p_{\\theta_t^{+}}(y\\mid x_{t,i}).⟫ The source curvature proxy ⟪I_0^l⟫ is computed analogously at the source parameters ⟪\\theta_0⟫ on the same unlabeled batch, which preserves the source-free test-time setting. The layer-wise retention gate is ⟪\\displaystyle \\mu_t^{l} = \\mu_0 \\exp\\!\\left( - \\frac{ \\|\\widetilde{I}_t^{l}-\\widetilde{I}_0^{l}\\|_2^2 }{d_l} \\right),⟫ (23) where ⟪d_l=\\dim(\\theta^l)⟫ and ⟪\\mu_0⟫ is the maximum retention strength. When the candidate and source curvature profiles are similar, ⟪\\mu_t^l⟫ is large and the candidate update is retained. When the mismatch is large, ⟪\\mu_t^l⟫ decreases and the layer is pulled back toward the source model. In this way, CLR turns the sample-side adaptation step into a layer-aware update: useful plasticity is preserved where it is safe, while source-sensitive drift is suppressed before it can accumulate over time.",
      "after": "Curvature-aware proxy and retention gate. The default curvature-aware proxy for the candidate model is estimated from pseudo-label gradients on the current batch: ⟪\\displaystyle I_t^{l} = \\frac{1}{N_t} \\sum_{i=1}^{N_t} g_t^{l}(x_{t,i})\\odot g_t^{l}(x_{t,i}),⟫ where ⟪g_t^{l}(x_{t,i})=\\nabla_{\\theta_t^{+,l}}\\log p_{\\theta_t^{+}}(\\hat{y}_t^{+}(x_{t,i})\\mid x_{t,i})⟫ and ⟪\\hat{y}_t^{+}(x_{t,i})=\\arg\\max_y p_{\\theta_t^{+}}(y\\mid x_{t,i})⟫. Thus, ⟪I_t^l⟫ averages element-wise squared per-sample gradients. The source proxy ⟪I_0^l⟫ is computed analogously at ⟪\\theta_0⟫ on the same unlabeled batch ⟪x_t⟫ with the time index omitted for brevity. The layer-wise retention gate is ⟪\\displaystyle \\mu_t^{l} = \\mu_0 \\exp\\!\\left( - \\frac{ \\|\\widetilde{I}_t^{l}-\\widetilde{I}_0^{l}\\|_2^2 }{d_l} \\right),⟫ where ⟪d_l=\\dim(\\theta^l)⟫, and ⟪\\mu_0⟫ is the maximum retention gate. Similar curvature-aware proxy profiles yield a large ⟪\\mu_t^l⟫ and retain the candidate update, whereas mismatch lowers ⟪\\mu_t^l⟫ and anchors the layer toward the source model. Thus, CLR preserves safe plasticity while suppressing source-sensitive drift.",
      "diff": {
        "original": [
          {
            "kind": "del",
            "text": "Curvature "
          },
          {
            "kind": "same",
            "text": "proxy and retention gate. The "
          },
          {
            "kind": "del",
            "text": "raw curvature "
          },
          {
            "kind": "same",
            "text": "proxy for the candidate model is estimated from pseudo-label gradients on the current batch: ⟪\\displaystyle I_t^{l} = \\frac{1}{N_t} \\sum_{i=1}^{N_t} g_t^{l}(x_{t,i})\\odot g_t^{l}(x_{t,i}),⟫ "
          },
          {
            "kind": "del",
            "text": "(22) "
          },
          {
            "kind": "same",
            "text": "where ⟪g_t^{l}(x_{t,i})=\\nabla_{\\theta_t^{+,l}}\\log p_{\\theta_t^{+}}(\\hat{y}_t^{+}(x_{t,i})\\mid x_{t,i})⟫ "
          },
          {
            "kind": "del",
            "text": ", ⟪\\hat{y}_t^{+}(x_{t,i})=\\arg\\max_y p_{\\theta_t^{+}}(y\\mid x_{t,i}).⟫ "
          },
          {
            "kind": "same",
            "text": "The source "
          },
          {
            "kind": "del",
            "text": "curvature "
          },
          {
            "kind": "same",
            "text": "proxy ⟪I_0^l⟫ is computed analogously at "
          },
          {
            "kind": "del",
            "text": "the source parameters "
          },
          {
            "kind": "same",
            "text": "⟪\\theta_0⟫ on the same unlabeled "
          },
          {
            "kind": "del",
            "text": "batch, which preserves "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "del",
            "text": "source-free test-time setting. "
          },
          {
            "kind": "same",
            "text": "The layer-wise retention gate is ⟪\\displaystyle \\mu_t^{l} = \\mu_0 \\exp\\!\\left( - \\frac{ \\|\\widetilde{I}_t^{l}-\\widetilde{I}_0^{l}\\|_2^2 }{d_l} \\right),⟫ "
          },
          {
            "kind": "del",
            "text": "(23) "
          },
          {
            "kind": "same",
            "text": "where "
          },
          {
            "kind": "del",
            "text": "⟪d_l=\\dim(\\theta^l)⟫ "
          },
          {
            "kind": "same",
            "text": "and ⟪\\mu_0⟫ is the maximum retention "
          },
          {
            "kind": "del",
            "text": "strength. When "
          },
          {
            "kind": "same",
            "text": "the candidate "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "del",
            "text": "source curvature profiles are similar, ⟪\\mu_t^l⟫ is large and the candidate update is retained. When the mismatch is large, ⟪\\mu_t^l⟫ decreases and "
          },
          {
            "kind": "same",
            "text": "the layer "
          },
          {
            "kind": "del",
            "text": "is pulled back "
          },
          {
            "kind": "same",
            "text": "toward the source model. "
          },
          {
            "kind": "del",
            "text": "In this way, "
          },
          {
            "kind": "same",
            "text": "CLR "
          },
          {
            "kind": "del",
            "text": "turns the sample-side adaptation step into a layer-aware update: useful "
          },
          {
            "kind": "same",
            "text": "plasticity "
          },
          {
            "kind": "del",
            "text": "is preserved where it is safe, "
          },
          {
            "kind": "same",
            "text": "while "
          },
          {
            "kind": "same",
            "text": "source-sensitive "
          },
          {
            "kind": "del",
            "text": "drift is suppressed before it can accumulate over time."
          }
        ],
        "revised": [
          {
            "kind": "add",
            "text": "Curvature-aware "
          },
          {
            "kind": "same",
            "text": "proxy and retention gate. The "
          },
          {
            "kind": "add",
            "text": "default curvature-aware "
          },
          {
            "kind": "same",
            "text": "proxy for the candidate model is estimated from pseudo-label gradients on the current batch: ⟪\\displaystyle I_t^{l} = \\frac{1}{N_t} \\sum_{i=1}^{N_t} g_t^{l}(x_{t,i})\\odot g_t^{l}(x_{t,i}),⟫ "
          },
          {
            "kind": "same",
            "text": "where ⟪g_t^{l}(x_{t,i})=\\nabla_{\\theta_t^{+,l}}\\log p_{\\theta_t^{+}}(\\hat{y}_t^{+}(x_{t,i})\\mid x_{t,i})⟫ "
          },
          {
            "kind": "add",
            "text": "and ⟪\\hat{y}_t^{+}(x_{t,i})=\\arg\\max_y p_{\\theta_t^{+}}(y\\mid x_{t,i})⟫. Thus, ⟪I_t^l⟫ averages element-wise squared per-sample gradients. "
          },
          {
            "kind": "same",
            "text": "The source "
          },
          {
            "kind": "same",
            "text": "proxy ⟪I_0^l⟫ is computed analogously at "
          },
          {
            "kind": "same",
            "text": "⟪\\theta_0⟫ on the same unlabeled "
          },
          {
            "kind": "add",
            "text": "batch ⟪x_t⟫ with "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "add",
            "text": "time index omitted for brevity. "
          },
          {
            "kind": "same",
            "text": "The layer-wise retention gate is ⟪\\displaystyle \\mu_t^{l} = \\mu_0 \\exp\\!\\left( - \\frac{ \\|\\widetilde{I}_t^{l}-\\widetilde{I}_0^{l}\\|_2^2 }{d_l} \\right),⟫ "
          },
          {
            "kind": "same",
            "text": "where "
          },
          {
            "kind": "add",
            "text": "⟪d_l=\\dim(\\theta^l)⟫, "
          },
          {
            "kind": "same",
            "text": "and ⟪\\mu_0⟫ is the maximum retention "
          },
          {
            "kind": "add",
            "text": "gate. Similar curvature-aware proxy profiles yield a large ⟪\\mu_t^l⟫ and retain "
          },
          {
            "kind": "same",
            "text": "the candidate "
          },
          {
            "kind": "add",
            "text": "update, whereas mismatch lowers ⟪\\mu_t^l⟫ "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "add",
            "text": "anchors "
          },
          {
            "kind": "same",
            "text": "the layer "
          },
          {
            "kind": "same",
            "text": "toward the source model. "
          },
          {
            "kind": "add",
            "text": "Thus, "
          },
          {
            "kind": "same",
            "text": "CLR "
          },
          {
            "kind": "add",
            "text": "preserves safe "
          },
          {
            "kind": "same",
            "text": "plasticity "
          },
          {
            "kind": "same",
            "text": "while "
          },
          {
            "kind": "add",
            "text": "suppressing "
          },
          {
            "kind": "same",
            "text": "source-sensitive "
          },
          {
            "kind": "add",
            "text": "drift."
          }
        ]
      },
      "comments": [
        "r1-4"
      ]
    },
    {
      "id": "efficiency",
      "title": "Resource accounting and DCF-Lite",
      "type": "Table",
      "status": "modified",
      "section": "IV-C",
      "original": {
        "page": 12,
        "label": "Original Fig. 12",
        "image": "assets/crops/efficiency-original.webp",
        "box": [
          7.516,
          78.535,
          42.157,
          15.909
        ],
        "aspect": 2.0443037974683542
      },
      "revised": {
        "page": 12,
        "label": "Table XI",
        "image": "assets/crops/efficiency-revised.webp",
        "box": [
          50.49,
          6.313,
          41.993,
          26.01
        ],
        "aspect": 1.2485436893203883
      },
      "summary": "The accuracy–runtime plot is replaced by a resource table reporting FLOPs, peak memory, latency, accuracy, and a DCF-Lite variant.",
      "before": "10 20 30 40\nAvg. Accuracy (%)\n0.000\n0.006\n0.012\n0.018\nTime (s)\nTent CoTTA\nRoTTA\nDeYO SAR\nAEA\nTRIBE\nSPA\nPTTA\nLAW Ours Fig. 12. Accuracy-runtime trade-off. Per-image GPU runtime vs. average\naccuracy on ImageNet-C (long-horizon T-CS). Better methods appear in the\nlower-right quadrant. Runtimes are averaged over 100 runs (single A100 GPU).",
      "after": "TABLE XI: Computational overhead and lightweight variant.\nComparison of FLOPs, peak memory, per-image runtime, and\naverage accuracy on ImageNet-C (long-horizon T-CS, ResNet50) measured on an NVIDIA A100.\nMethod FLOPs (G) Peak mem (MB) ms/img Avg. Acc.\nNo Adapt 4.1 1834 0.5 7.19\nBN Adapt 4.1 1944 0.5 29.83\nTent 8.2 5685 1.4 15.79\nCoTTA 24.6 13892 2.8 34.54\nSAR 16.4 6936 3.0 38.90\nDeYO 10.0 5895 2.1 24.18\nAEA 8.3 6936 1.6 7.60\nPTTA 16.4 11872 4.1 22.63\nRoTTA 28.9 12952 18.7 16.39\nLAW 16.4 13364 6.9 26.54\nTRIBE 65.6 18405 15.6 25.07\nSPA 49.1 9635 10.3 12.50\nDCF (full) 24.6 14690 5.2 43.48\nDCF-Lite 9.4 6080 3.19 42.06",
      "diff": {
        "original": [
          {
            "kind": "del",
            "text": "10 20 30 40\nAvg. Accuracy (%)\n0.000\n0.006\n0.012\n0.018\nTime (s)\nTent CoTTA\nRoTTA\nDeYO SAR\nAEA\nTRIBE\nSPA\nPTTA\nLAW Ours Fig. 12. Accuracy-runtime trade-off. Per-image GPU runtime vs. average\n"
          },
          {
            "kind": "same",
            "text": "accuracy on ImageNet-C (long-horizon "
          },
          {
            "kind": "del",
            "text": "T-CS). Better methods appear in the\nlower-right quadrant. Runtimes are averaged over 100 runs (single A100 GPU)."
          }
        ],
        "revised": [
          {
            "kind": "add",
            "text": "TABLE XI: Computational overhead and lightweight variant.\nComparison of FLOPs, peak memory, per-image runtime, and\naverage "
          },
          {
            "kind": "same",
            "text": "accuracy on ImageNet-C (long-horizon "
          },
          {
            "kind": "add",
            "text": "T-CS, ResNet50) measured on an NVIDIA A100.\nMethod FLOPs (G) Peak mem (MB) ms/img Avg. Acc.\nNo Adapt 4.1 1834 0.5 7.19\nBN Adapt 4.1 1944 0.5 29.83\nTent 8.2 5685 1.4 15.79\nCoTTA 24.6 13892 2.8 34.54\nSAR 16.4 6936 3.0 38.90\nDeYO 10.0 5895 2.1 24.18\nAEA 8.3 6936 1.6 7.60\nPTTA 16.4 11872 4.1 22.63\nRoTTA 28.9 12952 18.7 16.39\nLAW 16.4 13364 6.9 26.54\nTRIBE 65.6 18405 15.6 25.07\nSPA 49.1 9635 10.3 12.50\nDCF (full) 24.6 14690 5.2 43.48\nDCF-Lite 9.4 6080 3.19 42.06"
          }
        ]
      },
      "figure": "f-runtime",
      "comments": [
        "ae3",
        "sae",
        "r1-3"
      ]
    },
    {
      "id": "transfer",
      "title": "Five-run transfer variability and paired tests",
      "type": "Figure",
      "status": "modified",
      "section": "IV-C",
      "original": {
        "page": 11,
        "label": "Fig. 10",
        "image": "assets/crops/transfer-original.webp",
        "box": [
          50.49,
          45.833,
          41.993,
          27.525
        ],
        "aspect": 1.1776556776556777
      },
      "revised": {
        "page": 11,
        "label": "Fig. 11",
        "image": "assets/crops/transfer-revised.webp",
        "box": [
          50.49,
          17.4,
          42.4,
          50.3
        ],
        "aspect": 0.6519558676028084
      },
      "summary": "The cross-domain figure gains five-run mean ± SD and is expanded with DomainNet-126. The text adds aggregate paired tests against AEA and DeYO.",
      "before": "Fig. 10: Cross-domain Generalization. Each cell shows the average accuracy improvement compared to No Adapt when a method (row) is adapted to a source domain (column) and then evaluated on the remaining 14 unseen ImageNet-C domains.",
      "after": "Fig. 11: Cross-domain transfer. (a): ImageNet-C accuracy gains (in percentage points) over No Adapt, averaged across all unseen corruption domains. (b): DomainNet-126 accuracy gains over No Adapt for each cross-domain transfer pair (⟪\\text{Adaptation} \\to \\text{Evaluation}⟫, where C: Clipart, P: Painting, R: Real, and S: Sketch). Results are reported as mean ⟪\\pm⟫ standard deviation over five runs.",
      "diff": {
        "original": [
          {
            "kind": "same",
            "text": "Fig. "
          },
          {
            "kind": "del",
            "text": "10: "
          },
          {
            "kind": "same",
            "text": "Cross-domain "
          },
          {
            "kind": "del",
            "text": "Generalization. Each cell shows the average "
          },
          {
            "kind": "same",
            "text": "accuracy "
          },
          {
            "kind": "del",
            "text": "improvement compared to "
          },
          {
            "kind": "same",
            "text": "No Adapt "
          },
          {
            "kind": "del",
            "text": "when a method (row) is adapted to a source domain (column) "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "del",
            "text": "then evaluated on the remaining 14 unseen ImageNet-C domains."
          }
        ],
        "revised": [
          {
            "kind": "same",
            "text": "Fig. "
          },
          {
            "kind": "add",
            "text": "11: "
          },
          {
            "kind": "same",
            "text": "Cross-domain "
          },
          {
            "kind": "add",
            "text": "transfer. (a): ImageNet-C "
          },
          {
            "kind": "same",
            "text": "accuracy "
          },
          {
            "kind": "add",
            "text": "gains (in percentage points) over No Adapt, averaged across all unseen corruption domains. (b): DomainNet-126 accuracy gains over "
          },
          {
            "kind": "same",
            "text": "No Adapt "
          },
          {
            "kind": "add",
            "text": "for each cross-domain transfer pair (⟪\\text{Adaptation} \\to \\text{Evaluation}⟫, where C: Clipart, P: Painting, R: Real, "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "add",
            "text": "S: Sketch). Results are reported as mean ⟪\\pm⟫ standard deviation over five runs."
          }
        ]
      },
      "figure": "f11",
      "comments": [
        "ae5",
        "r1-6"
      ],
      "textScope": "caption"
    },
    {
      "id": "domainnet",
      "title": "Transfer evaluation on DomainNet-126",
      "type": "Figure",
      "status": "added",
      "section": "IV-C",
      "original": null,
      "revised": {
        "page": 11,
        "label": "Fig. 11(b)",
        "image": "assets/crops/domainnet-revised.webp",
        "box": [
          50.49,
          37.5,
          42.4,
          18.7
        ],
        "aspect": 1.752021563342318
      },
      "summary": "DomainNet-126 reports five-run accuracy gains over No Adapt for 12 transfer pairs and an average column. DCF exceeds DeYO on all pairs and achieves the highest mean gain on 10 of 12 pairs.",
      "before": "",
      "after": "C\nP\nC\nR\nC\nS\nP\nC\nP\nR\nP\nS\nR\nC\nR\nP\nR\nS\nS\nC\nS\nP\nS\nR\nAvg.\nCross-Domain Adaptation Task\nTent\nCoTTA\nRoTTA\nSAR\nDeYO\nTRIBE\nAEA\nSPA\nPTTA\nOurs\nMethod\n6.75\n±0.20\n4.82\n±0.22\n5.79\n±0.20\n6.56\n±0.28\n7.64\n±0.35\n6.80\n±0.30\n3.18\n±0.27\n6.53\n±0.22\n6.13\n±0.36\n8.37\n±0.23\n3.23\n±0.24\n4.42\n±0.36\n5.67\n±0.37\n5.09\n±0.26\n3.93\n±0.17\n3.53\n±0.29\n-40.41\n±0.26\n-0.44\n±0.19\n5.26\n±0.29\n6.21\n±0.21\n0.91\n±0.37\n1.18\n±0.16\n3.59\n±0.18\n3.71\n±0.20\n3.86\n±0.19\n1.16\n±0.29\n-44.61\n±0.21\n-6.59\n±0.20\n2.72\n±0.35\n6.37\n±0.13\n2.16\n±0.17\n0.22\n±0.25\n1.15\n±0.16\n1.86\n±0.25\n5.00\n±0.37\n2.39\n±0.17\n4.77\n±0.31\n3.92\n±0.34\n1.94\n±0.20\n5.86\n±0.27\n-0.33\n±0.26\n-0.81\n±0.28\n0.67\n±0.26\n-0.13\n±0.37\n-0.77\n±0.15\n-0.07\n±0.38\n-8.09\n±0.17\n-1.33\n±0.35\n0.01\n±0.36\n0.57\n±0.26\n9.96\n±0.38\n5.52\n±0.23\n8.01\n±0.31\n9.58\n±0.22\n11.94\n±0.26\n9.72\n±0.30\n-20.38\n±0.19\n5.56\n±0.17\n7.65\n±0.22\n12.38\n±0.26\n0.43\n±0.20\n-1.74\n±0.31\n-0.59\n±0.35\n-0.13\n±0.16\n2.26\n±0.16\n0.47\n±0.20\n0.18\n±0.34\n1.90\n±0.29\n0.04\n±0.36\n3.03\n±0.16\n2.37\n±0.36\n-0.04\n±0.36\n1.84\n±0.31\n1.50\n±0.21\n1.36\n±0.30\n2.62\n±0.36\n-15.96\n±0.32\n0.63\n±0.37\n1.23\n±0.25\n2.69\n±0.17\n6.83\n±0.28\n0.89\n±0.16\n5.11\n±0.27\n5.93\n±0.20\n8.18\n±0.38\n7.05\n±0.19\n-28.00\n±0.21\n2.82\n±0.31\n3.26\n±0.22\n9.35\n±0.19\n5.43\n±0.33\n3.90\n±0.18\n3.90\n±0.26\n5.19\n±0.20\n6.87\n±0.26\n5.50\n±0.23\n5.54\n±0.35\n6.07\n±0.16\n5.33\n±0.30\n7.06\n±0.28\n7.68\n±0.22\n7.91\n±0.20\n8.81\n±0.21\n8.71\n±0.30\n8.40\n±0.24\n8.12\n±0.27\n-9.68\n±0.32\n5.37\n±0.29\n8.57\n±0.30\n9.18\n±0.15\n2.23\n±0.24\n7.89\n±0.30\n9.37\n±0.27\n7.75\n±0.32\n6.31\n±0.30\n3.79\n±0.23\n-47.87\n±0.36\n1.19\n±0.37\n8.49\n±0.30\n9.21\n±0.20\n3.97\n±0.28\n2.85\n±0.26\n4.44\n±0.27\n4.64\n±0.25\n5.42\n±0.27\n4.26\n±0.27\n-16.78\n±0.28\n2.14\n±0.28\n4.22\n±0.30\n6.69\n±0.22\n7.5\n5.0\n2.5\n0.0\n2.5\n5.0\n7.5\n10.0\n12.5\nAccuracy Gain (pp)\n",
      "diff": {
        "original": [],
        "revised": [
          {
            "kind": "add",
            "text": "C\nP\nC\nR\nC\nS\nP\nC\nP\nR\nP\nS\nR\nC\nR\nP\nR\nS\nS\nC\nS\nP\nS\nR\nAvg.\nCross-Domain Adaptation Task\nTent\nCoTTA\nRoTTA\nSAR\nDeYO\nTRIBE\nAEA\nSPA\nPTTA\nOurs\nMethod\n6.75\n±0.20\n4.82\n±0.22\n5.79\n±0.20\n6.56\n±0.28\n7.64\n±0.35\n6.80\n±0.30\n3.18\n±0.27\n6.53\n±0.22\n6.13\n±0.36\n8.37\n±0.23\n3.23\n±0.24\n4.42\n±0.36\n5.67\n±0.37\n5.09\n±0.26\n3.93\n±0.17\n3.53\n±0.29\n-40.41\n±0.26\n-0.44\n±0.19\n5.26\n±0.29\n6.21\n±0.21\n0.91\n±0.37\n1.18\n±0.16\n3.59\n±0.18\n3.71\n±0.20\n3.86\n±0.19\n1.16\n±0.29\n-44.61\n±0.21\n-6.59\n±0.20\n2.72\n±0.35\n6.37\n±0.13\n2.16\n±0.17\n0.22\n±0.25\n1.15\n±0.16\n1.86\n±0.25\n5.00\n±0.37\n2.39\n±0.17\n4.77\n±0.31\n3.92\n±0.34\n1.94\n±0.20\n5.86\n±0.27\n-0.33\n±0.26\n-0.81\n±0.28\n0.67\n±0.26\n-0.13\n±0.37\n-0.77\n±0.15\n-0.07\n±0.38\n-8.09\n±0.17\n-1.33\n±0.35\n0.01\n±0.36\n0.57\n±0.26\n9.96\n±0.38\n5.52\n±0.23\n8.01\n±0.31\n9.58\n±0.22\n11.94\n±0.26\n9.72\n±0.30\n-20.38\n±0.19\n5.56\n±0.17\n7.65\n±0.22\n12.38\n±0.26\n0.43\n±0.20\n-1.74\n±0.31\n-0.59\n±0.35\n-0.13\n±0.16\n2.26\n±0.16\n0.47\n±0.20\n0.18\n±0.34\n1.90\n±0.29\n0.04\n±0.36\n3.03\n±0.16\n2.37\n±0.36\n-0.04\n±0.36\n1.84\n±0.31\n1.50\n±0.21\n1.36\n±0.30\n2.62\n±0.36\n-15.96\n±0.32\n0.63\n±0.37\n1.23\n±0.25\n2.69\n±0.17\n6.83\n±0.28\n0.89\n±0.16\n5.11\n±0.27\n5.93\n±0.20\n8.18\n±0.38\n7.05\n±0.19\n-28.00\n±0.21\n2.82\n±0.31\n3.26\n±0.22\n9.35\n±0.19\n5.43\n±0.33\n3.90\n±0.18\n3.90\n±0.26\n5.19\n±0.20\n6.87\n±0.26\n5.50\n±0.23\n5.54\n±0.35\n6.07\n±0.16\n5.33\n±0.30\n7.06\n±0.28\n7.68\n±0.22\n7.91\n±0.20\n8.81\n±0.21\n8.71\n±0.30\n8.40\n±0.24\n8.12\n±0.27\n-9.68\n±0.32\n5.37\n±0.29\n8.57\n±0.30\n9.18\n±0.15\n2.23\n±0.24\n7.89\n±0.30\n9.37\n±0.27\n7.75\n±0.32\n6.31\n±0.30\n3.79\n±0.23\n-47.87\n±0.36\n1.19\n±0.37\n8.49\n±0.30\n9.21\n±0.20\n3.97\n±0.28\n2.85\n±0.26\n4.44\n±0.27\n4.64\n±0.25\n5.42\n±0.27\n4.26\n±0.27\n-16.78\n±0.28\n2.14\n±0.28\n4.22\n±0.30\n6.69\n±0.22\n7.5\n5.0\n2.5\n0.0\n2.5\n5.0\n7.5\n10.0\n12.5\nAccuracy Gain (pp)\n"
          }
        ]
      },
      "figure": "f11",
      "comments": [
        "ae5",
        "r1-6"
      ]
    },
    {
      "id": "implementation",
      "title": "Trainable parameters and layer grouping",
      "type": "Text",
      "status": "modified",
      "section": "IV-A",
      "original": {
        "page": 8,
        "label": "Implementation details",
        "image": "assets/crops/impl-original.webp",
        "box": [
          7.516,
          6.692,
          42.157,
          16.919
        ],
        "aspect": 1.9226190476190477
      },
      "revised": {
        "page": 6,
        "label": "Implementation details",
        "image": "assets/crops/impl-revised.webp",
        "box": [
          50.49,
          74.747,
          41.993,
          19.949
        ],
        "aspect": 1.6237373737373737
      },
      "summary": "The implementation now explicitly states normalization-affine-only optimization, ResNet/ViT grouping, corrected threshold defaults, Fourier amplitude, and OT solver settings.",
      "before": "Models and Implementation Details. Following prior TTA works [17, 18, 20], we use a pre-trained ResNet-50 [1] backbone from RobustBench [48] and Torchvision [49], and set the batch size to 64 for all experiments. Unless otherwise specified, we follow the official implementation of Tent [9] and optimize the model with SGD (learning rate ⟪2.5\\times 10^{-4}⟫ , momentum ⟪0.9⟫ ). For hyperparameters in DCF, ⟪(\\upsilon_{\\mathrm{PCS}}, \\upsilon_{\\mathrm{Ent}}, \\mu_{0}, \\tau)⟫ are set to ⟪(0.15, 0.6, 0.99, 1.5)⟫ . The OT objective in Eq. 16 is solved via Sinkhorn iterations, and all results are averaged over 5 runs. All experiments are conducted on a single NVIDIA A100 GPU.",
      "after": "Models and Implementation Details. Following prior TTA works [12, 13, 15], we use pre-trained ResNet-50 [1] backbones from RobustBench [48] and Torchvision, with batch size 64. Following Tent [6], SGD optimizes only normalization affine parameters (learning rate ⟪2.5\\times10^{-4}⟫, momentum ⟪0.9⟫). For CLR, block groups correspond to ResNet layer blocks (stem BN (initial_bn) and layer1–layer4) or ViT encoder blocks. For DCF, hyperparameters ⟪(\\upsilon_{\\mathrm{PCS}}, \\upsilon_{\\mathrm{Ent}}, \\mu_{0}, \\tau, \\lambda)⟫ are set to ⟪(0.2, 0.6\\ln K, 0.99, 1.5, 0.2)⟫. The optimal transport problem in (13) is solved via Sinkhorn-Knopp iterations with entropic regularization ⟪\\varepsilon_{\\mathrm{OT}}=0.5⟫, and ⟪N_{\\mathrm{sk}}=3⟫ iterations. All results are averaged over 5 runs with random stream orderings on a single NVIDIA A100 GPU.",
      "diff": {
        "original": [
          {
            "kind": "same",
            "text": "Models and Implementation Details. Following prior TTA works "
          },
          {
            "kind": "del",
            "text": "[17, 18, 20], "
          },
          {
            "kind": "same",
            "text": "we use "
          },
          {
            "kind": "del",
            "text": "a "
          },
          {
            "kind": "same",
            "text": "pre-trained ResNet-50 [1] "
          },
          {
            "kind": "del",
            "text": "backbone "
          },
          {
            "kind": "same",
            "text": "from RobustBench [48] and "
          },
          {
            "kind": "del",
            "text": "Torchvision [49], and set the "
          },
          {
            "kind": "same",
            "text": "batch size "
          },
          {
            "kind": "del",
            "text": "to 64 for all experiments. Unless otherwise specified, we follow the official implementation of "
          },
          {
            "kind": "same",
            "text": "Tent "
          },
          {
            "kind": "del",
            "text": "[9] and optimize the model with "
          },
          {
            "kind": "same",
            "text": "SGD "
          },
          {
            "kind": "same",
            "text": "(learning rate "
          },
          {
            "kind": "del",
            "text": "⟪2.5\\times 10^{-4}⟫ "
          },
          {
            "kind": "same",
            "text": ", momentum "
          },
          {
            "kind": "del",
            "text": "⟪0.9⟫ "
          },
          {
            "kind": "same",
            "text": "). For "
          },
          {
            "kind": "same",
            "text": "hyperparameters "
          },
          {
            "kind": "del",
            "text": "in DCF, ⟪(\\upsilon_{\\mathrm{PCS}}, \\upsilon_{\\mathrm{Ent}}, \\mu_{0}, \\tau)⟫ "
          },
          {
            "kind": "same",
            "text": "are set to "
          },
          {
            "kind": "del",
            "text": "⟪(0.15, 0.6, 0.99, 1.5)⟫ "
          },
          {
            "kind": "same",
            "text": ". The "
          },
          {
            "kind": "del",
            "text": "OT objective "
          },
          {
            "kind": "same",
            "text": "in "
          },
          {
            "kind": "del",
            "text": "Eq. 16 "
          },
          {
            "kind": "same",
            "text": "is solved via "
          },
          {
            "kind": "del",
            "text": "Sinkhorn iterations, "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "del",
            "text": "all "
          },
          {
            "kind": "same",
            "text": "results are averaged over 5 "
          },
          {
            "kind": "del",
            "text": "runs. All experiments are conducted "
          },
          {
            "kind": "same",
            "text": "on a single NVIDIA A100 GPU."
          }
        ],
        "revised": [
          {
            "kind": "same",
            "text": "Models and Implementation Details. Following prior TTA works "
          },
          {
            "kind": "add",
            "text": "[12, 13, 15], "
          },
          {
            "kind": "same",
            "text": "we use "
          },
          {
            "kind": "same",
            "text": "pre-trained ResNet-50 [1] "
          },
          {
            "kind": "add",
            "text": "backbones "
          },
          {
            "kind": "same",
            "text": "from RobustBench [48] and "
          },
          {
            "kind": "add",
            "text": "Torchvision, with "
          },
          {
            "kind": "same",
            "text": "batch size "
          },
          {
            "kind": "add",
            "text": "64. Following "
          },
          {
            "kind": "same",
            "text": "Tent "
          },
          {
            "kind": "add",
            "text": "[6], "
          },
          {
            "kind": "same",
            "text": "SGD "
          },
          {
            "kind": "add",
            "text": "optimizes only normalization affine parameters "
          },
          {
            "kind": "same",
            "text": "(learning rate "
          },
          {
            "kind": "add",
            "text": "⟪2.5\\times10^{-4}⟫"
          },
          {
            "kind": "same",
            "text": ", momentum "
          },
          {
            "kind": "add",
            "text": "⟪0.9⟫"
          },
          {
            "kind": "same",
            "text": "). For "
          },
          {
            "kind": "add",
            "text": "CLR, block groups correspond to ResNet layer blocks (stem BN (initial_bn) and layer1–layer4) or ViT encoder blocks. For DCF, "
          },
          {
            "kind": "same",
            "text": "hyperparameters "
          },
          {
            "kind": "add",
            "text": "⟪(\\upsilon_{\\mathrm{PCS}}, \\upsilon_{\\mathrm{Ent}}, \\mu_{0}, \\tau, \\lambda)⟫ "
          },
          {
            "kind": "same",
            "text": "are set to "
          },
          {
            "kind": "add",
            "text": "⟪(0.2, 0.6\\ln K, 0.99, 1.5, 0.2)⟫"
          },
          {
            "kind": "same",
            "text": ". The "
          },
          {
            "kind": "add",
            "text": "optimal transport problem "
          },
          {
            "kind": "same",
            "text": "in "
          },
          {
            "kind": "add",
            "text": "(13) "
          },
          {
            "kind": "same",
            "text": "is solved via "
          },
          {
            "kind": "add",
            "text": "Sinkhorn-Knopp iterations with entropic regularization ⟪\\varepsilon_{\\mathrm{OT}}=0.5⟫, "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "add",
            "text": "⟪N_{\\mathrm{sk}}=3⟫ iterations. All "
          },
          {
            "kind": "same",
            "text": "results are averaged over 5 "
          },
          {
            "kind": "add",
            "text": "runs with random stream orderings "
          },
          {
            "kind": "same",
            "text": "on a single NVIDIA A100 GPU."
          }
        ]
      },
      "comments": [
        "r1-4",
        "r2-1",
        "r2-3"
      ]
    },
    {
      "id": "regions",
      "title": "All four entropy and PCS regions defined",
      "type": "Text",
      "status": "added",
      "section": "III-C",
      "original": null,
      "revised": {
        "page": 4,
        "label": "Following Eqs. (6)–(7)",
        "image": "assets/crops/regions-revised.webp",
        "box": [
          50.49,
          63.8,
          42.4,
          9.9
        ],
        "aspect": 3.299492385786802
      },
      "summary": "The revised routing text gives the four inequality conditions and their boundary cases.",
      "before": "",
      "after": "As illustrated in Fig. 3 (left), the two thresholds bisect the ⟪(E, s)⟫ diagnostic space into four quadrants: Area 1 (⟪E<\\upsilon_{\\mathrm{Ent}},\\,s>\\upsilon_{\\mathrm{PCS}}⟫), Area 2 (⟪E\\ge\\upsilon_{\\mathrm{Ent}},\\,s>\\upsilon_{\\mathrm{PCS}}⟫), Area 3 (⟪E<\\upsilon_{\\mathrm{Ent}},\\,s\\le\\upsilon_{\\mathrm{PCS}}⟫), and Area 4 (⟪E\\ge\\upsilon_{\\mathrm{Ent}},\\,s\\le\\upsilon_{\\mathrm{PCS}}⟫). For brevity, we denote the trusted and routed-away sets as ⟪\\mathcal{R}_t⟫ and ⟪\\mathcal{U}_t⟫ in subsequent sections.",
      "diff": {
        "original": [],
        "revised": [
          {
            "kind": "add",
            "text": "As illustrated in Fig. 3 (left), the two thresholds bisect the ⟪(E, s)⟫ diagnostic space into four quadrants: Area 1 (⟪E<\\upsilon_{\\mathrm{Ent}},\\,s>\\upsilon_{\\mathrm{PCS}}⟫), Area 2 (⟪E\\ge\\upsilon_{\\mathrm{Ent}},\\,s>\\upsilon_{\\mathrm{PCS}}⟫), Area 3 (⟪E<\\upsilon_{\\mathrm{Ent}},\\,s\\le\\upsilon_{\\mathrm{PCS}}⟫), and Area 4 (⟪E\\ge\\upsilon_{\\mathrm{Ent}},\\,s\\le\\upsilon_{\\mathrm{PCS}}⟫). For brevity, we denote the trusted and routed-away sets as ⟪\\mathcal{R}_t⟫ and ⟪\\mathcal{U}_t⟫ in subsequent sections."
          }
        ]
      },
      "comments": [
        "r2-2"
      ]
    },
    {
      "id": "threshold-guidance",
      "title": "Practical threshold starting rule",
      "type": "Text",
      "status": "modified",
      "section": "IV-C",
      "original": {
        "page": 12,
        "label": "Hyperparameter sensitivity",
        "image": "assets/crops/threshold-original.webp",
        "box": [
          7.516,
          31.061,
          42.157,
          23.232
        ],
        "aspect": 1.4013015184381779
      },
      "revised": {
        "page": 11,
        "label": "Hyperparameter sensitivity",
        "image": "assets/crops/threshold-revised.webp",
        "box": [
          50.49,
          68.6,
          42.4,
          21.5
        ],
        "aspect": 1.5258215962441315
      },
      "summary": "Practical guidance starts from υPCS = 0.2 and υEnt = 0.6 ln K, followed by coarse adjustment if necessary.",
      "before": "Hyperparameter Sensitivity. We analyze the joint landscapes of key control hyperparameters in Fig. 11. For sample routing, moderate thresholds ⟪(\\upsilon_{\\mathrm{PCS}}, \\upsilon_{\\mathrm{Ent}})⟫ best balance trusted-evidence purity and self-supervision volume. For parameter retention, performance is relatively stable to the weighting sharpness ⟪\\tau⟫ but sensitive to the fixed retention factor ⟪\\mu⟫ : small ⟪\\mu⟫ limits plasticity, whereas ⟪\\mu \\to 1.0⟫ amplifies error accumulation. Notably, our dynamic layer-wise stabilizer (CLR) surpasses the best static- ⟪\\mu⟫ baseline, reaching a peak average accuracy of 43.49%. This confirms the benefit of depth-aware, heterogeneous parameter control and supports our motivation (O3). Furthermore, DCF achieves a strong accuracy-runtime trade-off (Fig. 12): processing an image in 0.005s (A100 GPU), it rivals DeYO and SAR in speed while outpacing RoTTA, TRIBE, and SPA.",
      "after": "Hyperparameter Sensitivity. As shown in Fig. 12, DCF is generally insensitive to its key hyperparameters. In Fig. 12a, the proposed dynamic CLR consistently outperforms all static retention settings across different ⟪\\tau⟫ and ⟪\\mu⟫, highlighting the benefit of layer-wise adaptive retention. Fig. 12b shows a broad high-accuracy region for ⟪(\\upsilon_{\\mathrm{PCS}},\\upsilon_{\\mathrm{Ent}})⟫. For a new dataset, a practical rule is to start from ⟪\\upsilon_{\\mathrm{PCS}}=0.2⟫ and ⟪\\upsilon_{\\mathrm{Ent}}=0.6\\ln K⟫ and perform only coarse adjustment if necessary, rather than dataset-specific fine tuning. Likewise, performance varies only mildly across ⟪\\lambda⟫ and the frequency range in Fig. 12c. Finally, Fig. 12d shows stable accuracy across ⟪\\varepsilon_{\\mathrm{OT}}⟫ and ⟪N_{\\mathrm{sk}}⟫, suggesting that reliable OT alignment can be achieved with only a few Sinkhorn iterations. Overall, DCF requires little hyperparameter tuning for stable performance.",
      "diff": {
        "original": [
          {
            "kind": "same",
            "text": "Hyperparameter Sensitivity. "
          },
          {
            "kind": "del",
            "text": "We analyze the joint landscapes of key control hyperparameters "
          },
          {
            "kind": "same",
            "text": "in Fig. "
          },
          {
            "kind": "del",
            "text": "11. For sample routing, moderate thresholds ⟪(\\upsilon_{\\mathrm{PCS}}, \\upsilon_{\\mathrm{Ent}})⟫ best balance trusted-evidence purity "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "del",
            "text": "self-supervision volume. For parameter retention, performance is relatively stable to the weighting sharpness ⟪\\tau⟫ but sensitive to the fixed retention factor ⟪\\mu⟫ : small ⟪\\mu⟫ limits plasticity, whereas ⟪\\mu \\to 1.0⟫ amplifies error accumulation. Notably, our dynamic layer-wise stabilizer (CLR) surpasses the best static- ⟪\\mu⟫ baseline, reaching a peak average accuracy of 43.49%. This confirms "
          },
          {
            "kind": "same",
            "text": "the benefit of "
          },
          {
            "kind": "del",
            "text": "depth-aware, heterogeneous parameter control "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "del",
            "text": "supports our motivation (O3). Furthermore, "
          },
          {
            "kind": "same",
            "text": "DCF "
          },
          {
            "kind": "del",
            "text": "achieves a strong accuracy-runtime trade-off (Fig. 12): processing an image in 0.005s (A100 GPU), it rivals DeYO and SAR in speed while outpacing RoTTA, TRIBE, and SPA."
          }
        ],
        "revised": [
          {
            "kind": "same",
            "text": "Hyperparameter Sensitivity. "
          },
          {
            "kind": "add",
            "text": "As shown "
          },
          {
            "kind": "same",
            "text": "in Fig. "
          },
          {
            "kind": "add",
            "text": "12, DCF is generally insensitive to its key hyperparameters. In Fig. 12a, the proposed dynamic CLR consistently outperforms all static retention settings across different ⟪\\tau⟫ "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "add",
            "text": "⟪\\mu⟫, highlighting "
          },
          {
            "kind": "same",
            "text": "the benefit of "
          },
          {
            "kind": "add",
            "text": "layer-wise adaptive retention. Fig. 12b shows a broad high-accuracy region for ⟪(\\upsilon_{\\mathrm{PCS}},\\upsilon_{\\mathrm{Ent}})⟫. For a new dataset, a practical rule is to start from ⟪\\upsilon_{\\mathrm{PCS}}=0.2⟫ "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "add",
            "text": "⟪\\upsilon_{\\mathrm{Ent}}=0.6\\ln K⟫ and perform only coarse adjustment if necessary, rather than dataset-specific fine tuning. Likewise, performance varies only mildly across ⟪\\lambda⟫ and the frequency range in Fig. 12c. Finally, Fig. 12d shows stable accuracy across ⟪\\varepsilon_{\\mathrm{OT}}⟫ and ⟪N_{\\mathrm{sk}}⟫, suggesting that reliable OT alignment can be achieved with only a few Sinkhorn iterations. Overall, "
          },
          {
            "kind": "same",
            "text": "DCF "
          },
          {
            "kind": "add",
            "text": "requires little hyperparameter tuning for stable performance."
          }
        ]
      },
      "comments": [
        "r2-3"
      ]
    },
    {
      "id": "sinkhorn",
      "title": "Sinkhorn solver settings and sensitivity",
      "type": "Figure",
      "status": "added",
      "section": "IV-A / IV-C",
      "original": null,
      "revised": {
        "page": 12,
        "label": "Fig. 12(d)",
        "image": "assets/crops/sinkhorn-revised.webp",
        "box": [
          28.758,
          22.727,
          20.915,
          15.53
        ],
        "aspect": 1.0388349514563107
      },
      "summary": "The implementation specifies three Sinkhorn–Knopp iterations and εOT = 0.5. A new panel varies both settings.",
      "before": "",
      "after": "⟪\\varepsilon_{\\mathrm{OT}}⟫\n0.01\n0.05\n0.1\n0.25\n0.5\n⟪N_{\\mathrm{sk}}⟫\n1\n3\n5\n10\n20\nAvg. Acc. (%)\n0\n10\n20\n30\n40\n50\n43.0 43.2 43.4\n(d) ⟪N_{\\mathrm{sk}}⟫ vs. εOT",
      "diff": {
        "original": [],
        "revised": [
          {
            "kind": "add",
            "text": "⟪\\varepsilon_{\\mathrm{OT}}⟫\n0.01\n0.05\n0.1\n0.25\n0.5\n⟪N_{\\mathrm{sk}}⟫\n1\n3\n5\n10\n20\nAvg. Acc. (%)\n0\n10\n20\n30\n40\n50\n43.0 43.2 43.4\n(d) ⟪N_{\\mathrm{sk}}⟫ vs. εOT"
          }
        ]
      },
      "figure": "f12",
      "comments": [
        "ae3",
        "r1-3",
        "r2-3",
        "r1-1",
        "sae"
      ]
    },
    {
      "id": "tcsvt-literature",
      "title": "Positioning against closely related TCSVT papers",
      "type": "Text",
      "status": "modified",
      "section": "II",
      "original": {
        "page": 3,
        "label": "Related work",
        "image": "assets/crops/related-original.webp",
        "box": [
          7.516,
          42.298,
          42.157,
          52.399
        ],
        "boxes": [
          [
            7.516,
            42.298,
            42.157,
            52.399
          ],
          [
            50.49,
            6.692,
            41.993,
            76.01
          ]
        ],
        "aspect": 0.25273865414710484
      },
      "revised": {
        "page": 3,
        "label": "Related work",
        "image": "assets/crops/related-revised.webp",
        "box": [
          7.516,
          6.313,
          42.157,
          88.384
        ],
        "boxes": [
          [
            7.516,
            6.313,
            42.157,
            88.384
          ],
          [
            50.49,
            6.313,
            41.993,
            23.611
          ]
        ],
        "aspect": 0.289426523297491
      },
      "summary": "The revision positions DCF against QED, MetaBN, CMDA, and MS-TTA, explaining differences in sample roles and update retention.",
      "before": "II. Related work\nWe relate DCF to existing adaptation methods without and with target data, and further discuss sample reliability estimation, target-geometry preservation, and parameter stabilization for online test-time adaptation. Adaptation without Target Data. Mitigating distribution shifts has been widely studied at training time, including domain generalization (DG) [22], robust representation learning [23], and data augmentation strategies [24]. These methods aim to improve out-of-distribution robustness by learning source models that generalize to unseen test environments. However, deployment shifts are difficult to enumerate in advance, and training-time strategies usually require additional source-side objectives, augmentations, or training costs. In contrast, test-time adaptation updates the model directly from unlabeled target samples during deployment, making it attractive for source-free robustness under evolving test streams. Adaptation with Target Data. Methods that exploit target data include offline unsupervised domain adaptation and online test-time adaptation. ⟪\\bullet⟫ Unsupervised domain adaptation (UDA). Conventional UDA assumes access to labeled source data and unlabeled target data during adaptation, and reduces domain discrepancy through feature or moment alignment [25, 26, 27, 28], adversarial learning [29, 30], pseudo-label/self-training strategies [31, 32, 33], or optimal transport [4]. Source-free UDA further removes source data during adaptation and often relies on information maximization [5], pseudo-label refinement [34], or classifier-discrepancy/self-training objectives [35, 32]. Although effective when the target domain is available in advance, these methods usually adapt offline over the whole target set and often require multiple training epochs. Therefore, they are less suitable for online test streams, where samples arrive sequentially and the target distribution may evolve over time. ⟪\\bullet⟫ Test-time adaptation (TTA). TTA adapts a pre-trained model during inference using only unlabeled test samples. Some methods modify source training by introducing auxiliary objectives, as in test-time training [10]. Fully test-time adaptation does not alter source training and can be directly applied to a pre-trained model. Representative methods update batch-normalization statistics [36], minimize prediction entropy [9, 13], enforce consistency regularization [17], or use memory and teacher models for online adaptation [17, 18]. Recent studies further show that online TTA can be unstable under realistic streams, especially with temporal correlation, small batches, mixed domains, or imbalanced label distributions. NOTE [37] highlights the effect of temporal correlation, while continual and practical TTA methods improve robustness through teacher models, memory banks, reset strategies, normalization correction, or prior correction [17, 18, 20, 15, 16, 38, 39]. These methods significantly improve online robustness, but most of them still stabilize adaptation through relatively homogeneous sample filtering or global update control. In this paper, we mainly focus on fully test-time adaptation and study its long-horizon instability from a coupled sample–layer perspective. Reliability- and Stability-aware TTA. A central challenge in online TTA is to decide which unlabeled samples should drive adaptation and how the induced parameter updates should be stabilized over time. Existing methods often address the sample side by estimating reliability from confidence or entropy, assuming that low-entropy predictions provide trustworthy pseudo-label supervision. For example, EATA [13] and SAR [14] filter redundant or unreliable samples through entropy-based criteria, DeYO [40] introduces shape-aware sample selection beyond entropy, and ETAGE [21] further incorporates gradient-norm information to detect unstable samples. However, confidence does not necessarily imply reliability under temporally correlated shifts: a confident prediction may still be supported by shortcut-sensitive cues, and repeatedly adapting to such samples can reinforce confirmation bias. Another line of work stabilizes TTA from the parameter side. CoTTA [17] uses stochastic restoration to mitigate catastrophic drift, RoTTA [18] combines robust memory sampling with teacher-student updates, and LAW [41] studies learning-rate-based mechanisms for sustained adaptation. These methods reduce long-term drift, but their stabilization rules are usually global or nearly uniform across the network, overlooking that different layers may respond to distribution shifts in substantially different ways [42]. Overall, existing TTA methods mainly stabilize online adaptation through sample filtering or global update control. In contrast, DCF attributes long-horizon instability to coupled sample–layer feedback, and decouples sample routing, routed-away geometry repair, and layer-wise update retention.",
      "after": "We relate DCF to existing adaptation methods without and with target data, and further discuss sample reliability, target-geometry preservation, and parameter stabilization for TTA. Adaptation without Target Data. Mitigating distribution shifts has been widely studied at training time, including domain generalization (DG) [17] and robust representation learning [18]. Beyond visual tasks, uncertainty-aware modeling has also been explored to handle evolving environmental variations in non-stationary sensor streams [19, 20, 21]. Nonetheless, such source-side designs cannot exhaustively anticipate unpredictable test shifts. In contrast, TTA directly exploits unlabeled samples observed during deployment, enabling online adaptation to evolving distributions. Adaptation with Target Data. Target-data methods span offline unsupervised domain adaptation and online TTA. ⟪\\bullet⟫ Unsupervised domain adaptation (UDA). Conventional UDA accesses labeled source and unlabeled target data to reduce cross-domain discrepancies via moment alignment [22], adversarial learning [23], pseudo-label refinement [24], or optimal transport [3]. Source-free variants recover source structure or progressively refine target representations [25]. Recent studies such as VDM-DA [4], SFOCDA [5], and TAMAN [26] further explore virtual source construction, open compound adaptation, and video-oriented alignment. However, these methods assume offline or repeatedly accessible target data, whereas TTA must adapt and predict online as test samples arrive. ⟪\\bullet⟫ Test-Time adaptation (TTA). TTA adapts a pre-trained model during inference using only unlabeled test samples. Representative approaches update normalization statistics [27], minimize prediction entropy [6, 8], or exploit teacher models, memory mechanisms, and reset strategies for continual adaptation [12, 13, 28]. Test-time training [7] introduces auxiliary source-stage objectives. Recent studies extend TTA to diverse visual settings: MetaBN [29] leverages meta-trained normalization for adverse-weather video restoration, whereas CMDA [30] pairs model adaptation with diffusion-based data adaptation. In contrast, DCF requires neither meta-training nor generative translation, focusing on controlling self-training error accumulation in correlated streams. Other approaches explore sample bias [31], normalization or prior correction, and continual dynamics [32, 9, 15, 10, 11, 33, 34]. Despite these advances, self-training remains vulnerable to temporally correlated and label-imbalanced streams, where local adaptation errors can accumulate across successive updates. Reliability- and Stability-aware TTA. A central challenge in online TTA is governing how test samples drive adaptation and how the resulting updates are maintained. At the sample level, EATA [8] and SAR [9] filter redundant or unreliable samples via entropy criteria, while DeYO [35] and ETAGE [16] incorporate shape- or gradient-sensitive cues. Among closely related studies, QED [31] identifies biased instances via question-type entropy and negative perturbations, while MS-TTA [36] performs training-free mean-shift refinement over test features. CMDA [30] further couples model adaptation with diffusion-based data adaptation. In contrast, DCF assigns heterogeneous roles to target samples: trusted instances provide consistency supervision, whereas routed-away instances are retained for soft optimal-transport geometry repair. At the parameter level, MetaBN [29] reshapes updates via meta-training, while CoTTA [12], RoTTA [13], LAW [37], and GOLD [38] stabilize adaptation through weight restoration, teacher–student memory, layer-wise learning-rate modulation, or constrained update spaces. Unlike these approaches, DCF treats sample-side updates strictly as candidates and selectively retains them across depth according to layer-wise source mismatch. Overall, existing TTA methods largely treat sample-side adaptation and parameter-side stabilization independently. DCF instead models their interaction as a coupled sample–layer feedback process, jointly determining which samples drive adaptation, how routed-away samples preserve target structure, and which layers retain the resulting updates.",
      "diff": {
        "original": [
          {
            "kind": "del",
            "text": "II. Related work\n"
          },
          {
            "kind": "same",
            "text": "We relate DCF to existing adaptation methods without and with target data, and further discuss sample "
          },
          {
            "kind": "del",
            "text": "reliability estimation, "
          },
          {
            "kind": "same",
            "text": "target-geometry preservation, and parameter stabilization for "
          },
          {
            "kind": "del",
            "text": "online test-time adaptation. "
          },
          {
            "kind": "same",
            "text": "Adaptation without Target Data. Mitigating distribution shifts has been widely studied at training time, including domain generalization (DG) "
          },
          {
            "kind": "del",
            "text": "[22], "
          },
          {
            "kind": "same",
            "text": "robust representation learning "
          },
          {
            "kind": "del",
            "text": "[23], and data augmentation strategies [24]. These methods aim "
          },
          {
            "kind": "same",
            "text": "to "
          },
          {
            "kind": "del",
            "text": "improve out-of-distribution robustness by learning source models that generalize to unseen "
          },
          {
            "kind": "same",
            "text": "test "
          },
          {
            "kind": "del",
            "text": "environments. However, deployment shifts are difficult to enumerate in advance, and training-time strategies usually require additional source-side objectives, augmentations, or training costs. "
          },
          {
            "kind": "same",
            "text": "In contrast, "
          },
          {
            "kind": "del",
            "text": "test-time adaptation updates the model "
          },
          {
            "kind": "same",
            "text": "directly "
          },
          {
            "kind": "del",
            "text": "from "
          },
          {
            "kind": "same",
            "text": "unlabeled "
          },
          {
            "kind": "del",
            "text": "target "
          },
          {
            "kind": "same",
            "text": "samples "
          },
          {
            "kind": "same",
            "text": "during deployment, "
          },
          {
            "kind": "del",
            "text": "making it attractive for source-free robustness under "
          },
          {
            "kind": "same",
            "text": "evolving "
          },
          {
            "kind": "del",
            "text": "test streams. "
          },
          {
            "kind": "same",
            "text": "Adaptation with Target Data. "
          },
          {
            "kind": "del",
            "text": "Methods that exploit target data include "
          },
          {
            "kind": "same",
            "text": "offline unsupervised domain adaptation and online "
          },
          {
            "kind": "del",
            "text": "test-time adaptation. "
          },
          {
            "kind": "same",
            "text": "⟪\\bullet⟫ Unsupervised domain adaptation (UDA). Conventional UDA "
          },
          {
            "kind": "del",
            "text": "assumes access to "
          },
          {
            "kind": "same",
            "text": "labeled source "
          },
          {
            "kind": "del",
            "text": "data "
          },
          {
            "kind": "same",
            "text": "and unlabeled target data "
          },
          {
            "kind": "del",
            "text": "during adaptation, and reduces domain discrepancy through feature or "
          },
          {
            "kind": "same",
            "text": "moment alignment "
          },
          {
            "kind": "del",
            "text": "[25, 26, 27, 28], "
          },
          {
            "kind": "same",
            "text": "adversarial learning "
          },
          {
            "kind": "del",
            "text": "[29, 30], pseudo-label/self-training strategies [31, 32, 33], "
          },
          {
            "kind": "same",
            "text": "or optimal transport "
          },
          {
            "kind": "del",
            "text": "[4]. "
          },
          {
            "kind": "same",
            "text": "Source-free "
          },
          {
            "kind": "del",
            "text": "UDA "
          },
          {
            "kind": "same",
            "text": "further "
          },
          {
            "kind": "del",
            "text": "removes "
          },
          {
            "kind": "same",
            "text": "source "
          },
          {
            "kind": "del",
            "text": "data during adaptation "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "del",
            "text": "often relies on information maximization [5], pseudo-label refinement [34], or classifier-discrepancy/self-training objectives [35, 32]. Although effective when the target domain is available in advance, "
          },
          {
            "kind": "same",
            "text": "these methods "
          },
          {
            "kind": "del",
            "text": "usually "
          },
          {
            "kind": "same",
            "text": "adapt "
          },
          {
            "kind": "del",
            "text": "offline over the whole target set "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "del",
            "text": "often require multiple training epochs. Therefore, they are less suitable for "
          },
          {
            "kind": "same",
            "text": "online "
          },
          {
            "kind": "same",
            "text": "test "
          },
          {
            "kind": "del",
            "text": "streams, where "
          },
          {
            "kind": "same",
            "text": "samples "
          },
          {
            "kind": "del",
            "text": "arrive sequentially and the target distribution may evolve over time. "
          },
          {
            "kind": "same",
            "text": "⟪\\bullet⟫ "
          },
          {
            "kind": "del",
            "text": "Test-time "
          },
          {
            "kind": "same",
            "text": "adaptation (TTA). TTA adapts a pre-trained model during inference using only unlabeled test samples. "
          },
          {
            "kind": "del",
            "text": "Some methods modify source training by introducing auxiliary objectives, as in test-time training [10]. Fully test-time adaptation does not alter source training and can be directly applied to a pre-trained model. "
          },
          {
            "kind": "same",
            "text": "Representative "
          },
          {
            "kind": "del",
            "text": "methods "
          },
          {
            "kind": "same",
            "text": "update "
          },
          {
            "kind": "del",
            "text": "batch-normalization "
          },
          {
            "kind": "same",
            "text": "statistics "
          },
          {
            "kind": "del",
            "text": "[36], "
          },
          {
            "kind": "same",
            "text": "minimize prediction entropy "
          },
          {
            "kind": "del",
            "text": "[9, 13], enforce consistency regularization [17], "
          },
          {
            "kind": "same",
            "text": "or "
          },
          {
            "kind": "del",
            "text": "use memory and teacher models for online adaptation [17, 18]. Recent studies further show that online TTA can be unstable under realistic streams, especially with temporal correlation, small batches, mixed domains, or imbalanced label distributions. NOTE [37] highlights the effect of temporal correlation, while continual and practical TTA methods improve robustness through "
          },
          {
            "kind": "same",
            "text": "teacher models, memory "
          },
          {
            "kind": "del",
            "text": "banks, "
          },
          {
            "kind": "same",
            "text": "reset "
          },
          {
            "kind": "del",
            "text": "strategies, "
          },
          {
            "kind": "same",
            "text": "normalization "
          },
          {
            "kind": "del",
            "text": "correction, "
          },
          {
            "kind": "same",
            "text": "or prior "
          },
          {
            "kind": "del",
            "text": "correction [17, 18, 20, "
          },
          {
            "kind": "same",
            "text": "15, "
          },
          {
            "kind": "del",
            "text": "16, 38, 39]. These methods significantly improve online robustness, but most of them still stabilize "
          },
          {
            "kind": "same",
            "text": "adaptation "
          },
          {
            "kind": "del",
            "text": "through relatively homogeneous sample filtering or global update control. In this paper, we mainly focus on fully test-time adaptation and study its long-horizon instability from a coupled sample–layer perspective. "
          },
          {
            "kind": "same",
            "text": "Reliability- and Stability-aware TTA. A central challenge in online TTA is "
          },
          {
            "kind": "del",
            "text": "to decide which unlabeled "
          },
          {
            "kind": "same",
            "text": "samples "
          },
          {
            "kind": "del",
            "text": "should "
          },
          {
            "kind": "same",
            "text": "drive adaptation and how the "
          },
          {
            "kind": "del",
            "text": "induced parameter "
          },
          {
            "kind": "same",
            "text": "updates "
          },
          {
            "kind": "del",
            "text": "should be stabilized over time. Existing methods often address "
          },
          {
            "kind": "same",
            "text": "the sample "
          },
          {
            "kind": "del",
            "text": "side by estimating reliability from confidence or entropy, assuming that low-entropy predictions provide trustworthy pseudo-label supervision. For example, "
          },
          {
            "kind": "same",
            "text": "EATA "
          },
          {
            "kind": "del",
            "text": "[13] "
          },
          {
            "kind": "same",
            "text": "and SAR "
          },
          {
            "kind": "del",
            "text": "[14] "
          },
          {
            "kind": "same",
            "text": "filter redundant or unreliable samples "
          },
          {
            "kind": "del",
            "text": "through entropy-based "
          },
          {
            "kind": "same",
            "text": "criteria, "
          },
          {
            "kind": "same",
            "text": "DeYO "
          },
          {
            "kind": "del",
            "text": "[40] introduces shape-aware sample selection beyond entropy, "
          },
          {
            "kind": "same",
            "text": "and ETAGE "
          },
          {
            "kind": "del",
            "text": "[21] "
          },
          {
            "kind": "same",
            "text": "further "
          },
          {
            "kind": "del",
            "text": "incorporates gradient-norm information "
          },
          {
            "kind": "same",
            "text": "to "
          },
          {
            "kind": "del",
            "text": "detect unstable samples. However, confidence does not necessarily imply reliability under temporally correlated shifts: a confident prediction may still be supported by shortcut-sensitive cues, and repeatedly adapting to such samples can reinforce confirmation bias. Another line of work stabilizes TTA from "
          },
          {
            "kind": "same",
            "text": "the parameter "
          },
          {
            "kind": "del",
            "text": "side. "
          },
          {
            "kind": "same",
            "text": "CoTTA "
          },
          {
            "kind": "del",
            "text": "[17] uses stochastic restoration "
          },
          {
            "kind": "same",
            "text": "to "
          },
          {
            "kind": "del",
            "text": "mitigate catastrophic drift, RoTTA [18] combines robust memory sampling with teacher-student updates, and LAW [41] studies learning-rate-based mechanisms for sustained adaptation. These methods reduce long-term drift, but their stabilization rules are usually global or nearly uniform across the network, overlooking that different layers may respond to distribution shifts in substantially different ways [42]. "
          },
          {
            "kind": "same",
            "text": "Overall, existing TTA methods "
          },
          {
            "kind": "del",
            "text": "mainly stabilize online "
          },
          {
            "kind": "same",
            "text": "adaptation "
          },
          {
            "kind": "del",
            "text": "through sample filtering or global update control. In contrast, "
          },
          {
            "kind": "same",
            "text": "DCF "
          },
          {
            "kind": "del",
            "text": "attributes long-horizon instability to "
          },
          {
            "kind": "same",
            "text": "coupled sample–layer "
          },
          {
            "kind": "del",
            "text": "feedback, "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "del",
            "text": "decouples sample routing, routed-away geometry repair, and layer-wise update retention."
          }
        ],
        "revised": [
          {
            "kind": "same",
            "text": "We relate DCF to existing adaptation methods without and with target data, and further discuss sample "
          },
          {
            "kind": "add",
            "text": "reliability, "
          },
          {
            "kind": "same",
            "text": "target-geometry preservation, and parameter stabilization for "
          },
          {
            "kind": "add",
            "text": "TTA. "
          },
          {
            "kind": "same",
            "text": "Adaptation without Target Data. Mitigating distribution shifts has been widely studied at training time, including domain generalization (DG) "
          },
          {
            "kind": "add",
            "text": "[17] and "
          },
          {
            "kind": "same",
            "text": "robust representation learning "
          },
          {
            "kind": "add",
            "text": "[18]. Beyond visual tasks, uncertainty-aware modeling has also been explored "
          },
          {
            "kind": "same",
            "text": "to "
          },
          {
            "kind": "add",
            "text": "handle evolving environmental variations in non-stationary sensor streams [19, 20, 21]. Nonetheless, such source-side designs cannot exhaustively anticipate unpredictable "
          },
          {
            "kind": "same",
            "text": "test "
          },
          {
            "kind": "add",
            "text": "shifts. "
          },
          {
            "kind": "same",
            "text": "In contrast, "
          },
          {
            "kind": "add",
            "text": "TTA "
          },
          {
            "kind": "same",
            "text": "directly "
          },
          {
            "kind": "add",
            "text": "exploits "
          },
          {
            "kind": "same",
            "text": "unlabeled "
          },
          {
            "kind": "same",
            "text": "samples "
          },
          {
            "kind": "add",
            "text": "observed "
          },
          {
            "kind": "same",
            "text": "during deployment, "
          },
          {
            "kind": "add",
            "text": "enabling online adaptation to "
          },
          {
            "kind": "same",
            "text": "evolving "
          },
          {
            "kind": "add",
            "text": "distributions. "
          },
          {
            "kind": "same",
            "text": "Adaptation with Target Data. "
          },
          {
            "kind": "add",
            "text": "Target-data methods span "
          },
          {
            "kind": "same",
            "text": "offline unsupervised domain adaptation and online "
          },
          {
            "kind": "add",
            "text": "TTA. "
          },
          {
            "kind": "same",
            "text": "⟪\\bullet⟫ Unsupervised domain adaptation (UDA). Conventional UDA "
          },
          {
            "kind": "add",
            "text": "accesses "
          },
          {
            "kind": "same",
            "text": "labeled source "
          },
          {
            "kind": "same",
            "text": "and unlabeled target data "
          },
          {
            "kind": "add",
            "text": "to reduce cross-domain discrepancies via "
          },
          {
            "kind": "same",
            "text": "moment alignment "
          },
          {
            "kind": "add",
            "text": "[22], "
          },
          {
            "kind": "same",
            "text": "adversarial learning "
          },
          {
            "kind": "add",
            "text": "[23], pseudo-label refinement [24], "
          },
          {
            "kind": "same",
            "text": "or optimal transport "
          },
          {
            "kind": "add",
            "text": "[3]. "
          },
          {
            "kind": "same",
            "text": "Source-free "
          },
          {
            "kind": "add",
            "text": "variants recover source structure or progressively refine target representations [25]. Recent studies such as VDM-DA [4], SFOCDA [5], and TAMAN [26] "
          },
          {
            "kind": "same",
            "text": "further "
          },
          {
            "kind": "add",
            "text": "explore virtual "
          },
          {
            "kind": "same",
            "text": "source "
          },
          {
            "kind": "add",
            "text": "construction, open compound adaptation, "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "add",
            "text": "video-oriented alignment. However, "
          },
          {
            "kind": "same",
            "text": "these methods "
          },
          {
            "kind": "add",
            "text": "assume offline or repeatedly accessible target data, whereas TTA must "
          },
          {
            "kind": "same",
            "text": "adapt "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "add",
            "text": "predict "
          },
          {
            "kind": "same",
            "text": "online "
          },
          {
            "kind": "add",
            "text": "as "
          },
          {
            "kind": "same",
            "text": "test "
          },
          {
            "kind": "same",
            "text": "samples "
          },
          {
            "kind": "add",
            "text": "arrive. "
          },
          {
            "kind": "same",
            "text": "⟪\\bullet⟫ "
          },
          {
            "kind": "add",
            "text": "Test-Time "
          },
          {
            "kind": "same",
            "text": "adaptation (TTA). TTA adapts a pre-trained model during inference using only unlabeled test samples. "
          },
          {
            "kind": "same",
            "text": "Representative "
          },
          {
            "kind": "add",
            "text": "approaches "
          },
          {
            "kind": "same",
            "text": "update "
          },
          {
            "kind": "add",
            "text": "normalization "
          },
          {
            "kind": "same",
            "text": "statistics "
          },
          {
            "kind": "add",
            "text": "[27], "
          },
          {
            "kind": "same",
            "text": "minimize prediction entropy "
          },
          {
            "kind": "add",
            "text": "[6, 8], "
          },
          {
            "kind": "same",
            "text": "or "
          },
          {
            "kind": "add",
            "text": "exploit "
          },
          {
            "kind": "same",
            "text": "teacher models, memory "
          },
          {
            "kind": "add",
            "text": "mechanisms, and "
          },
          {
            "kind": "same",
            "text": "reset "
          },
          {
            "kind": "add",
            "text": "strategies for continual adaptation [12, 13, 28]. Test-time training [7] introduces auxiliary source-stage objectives. Recent studies extend TTA to diverse visual settings: MetaBN [29] leverages meta-trained "
          },
          {
            "kind": "same",
            "text": "normalization "
          },
          {
            "kind": "add",
            "text": "for adverse-weather video restoration, whereas CMDA [30] pairs model adaptation with diffusion-based data adaptation. In contrast, DCF requires neither meta-training nor generative translation, focusing on controlling self-training error accumulation in correlated streams. Other approaches explore sample bias [31], normalization "
          },
          {
            "kind": "same",
            "text": "or prior "
          },
          {
            "kind": "add",
            "text": "correction, and continual dynamics [32, 9, "
          },
          {
            "kind": "same",
            "text": "15, "
          },
          {
            "kind": "add",
            "text": "10, 11, 33, 34]. Despite these advances, self-training remains vulnerable to temporally correlated and label-imbalanced streams, where local "
          },
          {
            "kind": "same",
            "text": "adaptation "
          },
          {
            "kind": "add",
            "text": "errors can accumulate across successive updates. "
          },
          {
            "kind": "same",
            "text": "Reliability- and Stability-aware TTA. A central challenge in online TTA is "
          },
          {
            "kind": "add",
            "text": "governing how test "
          },
          {
            "kind": "same",
            "text": "samples "
          },
          {
            "kind": "same",
            "text": "drive adaptation and how the "
          },
          {
            "kind": "add",
            "text": "resulting "
          },
          {
            "kind": "same",
            "text": "updates "
          },
          {
            "kind": "add",
            "text": "are maintained. At "
          },
          {
            "kind": "same",
            "text": "the sample "
          },
          {
            "kind": "add",
            "text": "level, "
          },
          {
            "kind": "same",
            "text": "EATA "
          },
          {
            "kind": "add",
            "text": "[8] "
          },
          {
            "kind": "same",
            "text": "and SAR "
          },
          {
            "kind": "add",
            "text": "[9] "
          },
          {
            "kind": "same",
            "text": "filter redundant or unreliable samples "
          },
          {
            "kind": "add",
            "text": "via entropy "
          },
          {
            "kind": "same",
            "text": "criteria, "
          },
          {
            "kind": "add",
            "text": "while "
          },
          {
            "kind": "same",
            "text": "DeYO "
          },
          {
            "kind": "add",
            "text": "[35] "
          },
          {
            "kind": "same",
            "text": "and ETAGE "
          },
          {
            "kind": "add",
            "text": "[16] incorporate shape- or gradient-sensitive cues. Among closely related studies, QED [31] identifies biased instances via question-type entropy and negative perturbations, while MS-TTA [36] performs training-free mean-shift refinement over test features. CMDA [30] "
          },
          {
            "kind": "same",
            "text": "further "
          },
          {
            "kind": "add",
            "text": "couples model adaptation with diffusion-based data adaptation. In contrast, DCF assigns heterogeneous roles "
          },
          {
            "kind": "same",
            "text": "to "
          },
          {
            "kind": "add",
            "text": "target samples: trusted instances provide consistency supervision, whereas routed-away instances are retained for soft optimal-transport geometry repair. At "
          },
          {
            "kind": "same",
            "text": "the parameter "
          },
          {
            "kind": "add",
            "text": "level, MetaBN [29] reshapes updates via meta-training, while "
          },
          {
            "kind": "same",
            "text": "CoTTA "
          },
          {
            "kind": "add",
            "text": "[12], RoTTA [13], LAW [37], and GOLD [38] stabilize adaptation through weight restoration, teacher–student memory, layer-wise learning-rate modulation, or constrained update spaces. Unlike these approaches, DCF treats sample-side updates strictly as candidates and selectively retains them across depth according "
          },
          {
            "kind": "same",
            "text": "to "
          },
          {
            "kind": "add",
            "text": "layer-wise source mismatch. "
          },
          {
            "kind": "same",
            "text": "Overall, existing TTA methods "
          },
          {
            "kind": "add",
            "text": "largely treat sample-side "
          },
          {
            "kind": "same",
            "text": "adaptation "
          },
          {
            "kind": "add",
            "text": "and parameter-side stabilization independently. "
          },
          {
            "kind": "same",
            "text": "DCF "
          },
          {
            "kind": "add",
            "text": "instead models their interaction as a "
          },
          {
            "kind": "same",
            "text": "coupled sample–layer "
          },
          {
            "kind": "add",
            "text": "feedback process, jointly determining which samples drive adaptation, how routed-away samples preserve target structure, "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "add",
            "text": "which layers retain the resulting updates."
          }
        ]
      },
      "comments": [
        "eic",
        "r1-5",
        "r2-4"
      ]
    },
    {
      "id": "uncertainty-literature",
      "title": "Recommended uncertainty-aware sensor-stream work",
      "type": "Text",
      "status": "added",
      "section": "II",
      "original": null,
      "revised": {
        "page": 3,
        "label": "Uncertainty-aware sensor-stream context [19]–[21]",
        "image": "assets/crops/shm-revised.webp",
        "box": [
          11.831,
          18.695,
          37.356,
          1.51
        ],
        "boxes": [
          [
            11.831,
            18.695,
            37.356,
            1.51
          ],
          [
            7.837,
            20.204,
            41.349,
            1.51
          ],
          [
            7.837,
            21.714,
            31.359,
            1.51
          ]
        ],
        "aspect": 5.4655172413793105
      },
      "summary": "All three suggested structural-health-monitoring studies are cited as broader context for uncertainty under environmental change.",
      "before": "",
      "after": "Beyond visual tasks, uncertainty-aware modeling has\n\nalso been explored to handle evolving environmental variations\n\nin non-stationary sensor streams [19–21].",
      "diff": {
        "original": [],
        "revised": [
          {
            "kind": "add",
            "text": "Beyond visual tasks, uncertainty-aware modeling has\n\nalso been explored to handle evolving environmental variations\n\nin non-stationary sensor streams [19–21]."
          }
        ]
      },
      "comments": [
        "r1-5"
      ]
    },
    {
      "id": "recent-literature",
      "title": "GOLD and the continual TTA survey",
      "type": "Text",
      "status": "added",
      "section": "II",
      "original": null,
      "revised": {
        "page": 3,
        "label": "Continual-TTA survey [28] and GOLD [38]",
        "image": "assets/crops/recent-revised.webp",
        "box": [
          7.837,
          52.207,
          41.349,
          1.51
        ],
        "boxes": [
          [
            7.837,
            52.207,
            41.349,
            1.51
          ],
          [
            7.837,
            53.717,
            41.381,
            1.51
          ],
          [
            7.837,
            55.226,
            41.349,
            1.51
          ],
          [
            7.837,
            56.736,
            17.236,
            1.51
          ],
          [
            87.369,
            8.533,
            4.793,
            1.51
          ],
          [
            50.813,
            10.043,
            41.648,
            1.51
          ],
          [
            50.813,
            11.552,
            41.349,
            1.51
          ],
          [
            50.813,
            13.062,
            41.574,
            1.51
          ],
          [
            50.813,
            14.571,
            41.381,
            1.51
          ],
          [
            50.813,
            16.081,
            41.349,
            1.51
          ],
          [
            50.813,
            17.59,
            41.349,
            1.51
          ],
          [
            50.813,
            19.1,
            40.675,
            1.51
          ]
        ],
        "aspect": 1.2658730158730158
      },
      "summary": "The 2026 continual-TTA survey and GOLD are added. The discussion distinguishes classifier-aligned subspace adaptation from candidate–source layer retention.",
      "before": "",
      "after": "Representative approaches update normalization statistics [27], minimize prediction entropy [6, 8], or exploit teacher models, memory mechanisms, and reset strategies for continual adaptation [12, 13, 28].\n\nAt the parameter level, MetaBN [29] reshapes updates via meta-training, while CoTTA [12], RoTTA [13], LAW [37], and GOLD [38] stabilize adaptation through weight restoration, teacher–student memory, layer-wise learning-rate modulation, or constrained update spaces. Unlike these approaches, DCF treats sample-side updates strictly as candidates and selectively retains them across depth according to layer-wise source mismatch.",
      "diff": {
        "original": [],
        "revised": [
          {
            "kind": "add",
            "text": "Representative approaches update normalization statistics [27], minimize prediction entropy [6, 8], or exploit teacher models, memory mechanisms, and reset strategies for continual adaptation [12, 13, 28].\n\nAt the parameter level, MetaBN [29] reshapes updates via meta-training, while CoTTA [12], RoTTA [13], LAW [37], and GOLD [38] stabilize adaptation through weight restoration, teacher–student memory, layer-wise learning-rate modulation, or constrained update spaces. Unlike these approaches, DCF treats sample-side updates strictly as candidates and selectively retains them across depth according to layer-wise source mismatch."
          }
        ]
      },
      "comments": [
        "r2-4"
      ]
    },
    {
      "id": "purity-protocol",
      "title": "Matched-coverage selected-sample comparison",
      "type": "Table",
      "status": "modified",
      "section": "IV-C",
      "original": {
        "page": 10,
        "label": "Table V",
        "image": "assets/crops/purity-original.webp",
        "box": [
          50.49,
          66.414,
          41.993,
          16.288
        ],
        "aspect": 1.9845679012345678
      },
      "revised": {
        "page": 9,
        "label": "Table VI",
        "image": "assets/crops/purity-revised.webp",
        "box": [
          50.49,
          26.136,
          41.993,
          14.52
        ],
        "aspect": 2.232638888888889
      },
      "summary": "The numerical purity values are retained, while the caption and discussion explicitly describe matched trusted-set coverage and the same frozen model state.",
      "before": "TABLE V\nPSEUDO-LABEL PURITY (%) OF SELECTED RELIABLE SAMPLES ON\nIMAGENET-C (T-CS). THE COUPLED ENTROPY+PCS ROUTER ACHIEVES\nTHE HIGHEST PURITY, CONFIRMING THAT PCS EFFECTIVELY FILTERS OUT\nCONFIDENT YET INCORRECT PREDICTIONS THAT ENTROPY ALONE CANNOT\nEXCLUDE.\nMethod Pseudo-label Purity (%)\nTent Baseline 42.7\nTent + Entropy Filter 44.0\nTent + PCS Filter 47.1\nTent + Entropy + PCS Filter 49.9",
      "after": "TABLE VI: Selected-sample quality on ImageNet-C (T-CS)\nat matched trusted-set coverage. Pseudo-label purity measures\ncorrectness of selected pseudo-labels.\nMethod Pseudo-label Purity (%)\nTent 42.7\n+ Entropy Filter 44.0\n+ PCS Filter 47.1\n+ Entropy & PCS 49.9",
      "diff": {
        "original": [
          {
            "kind": "same",
            "text": "TABLE "
          },
          {
            "kind": "del",
            "text": "V\nPSEUDO-LABEL PURITY (%) OF SELECTED RELIABLE SAMPLES ON\nIMAGENET-C (T-CS). THE COUPLED ENTROPY+PCS ROUTER ACHIEVES\nTHE HIGHEST PURITY, CONFIRMING THAT PCS EFFECTIVELY FILTERS OUT\nCONFIDENT YET INCORRECT PREDICTIONS THAT ENTROPY ALONE CANNOT\nEXCLUDE.\n"
          },
          {
            "kind": "same",
            "text": "Method Pseudo-label Purity (%)\nTent "
          },
          {
            "kind": "del",
            "text": "Baseline "
          },
          {
            "kind": "same",
            "text": "42.7\n"
          },
          {
            "kind": "del",
            "text": "Tent "
          },
          {
            "kind": "same",
            "text": "+ Entropy Filter 44.0\n"
          },
          {
            "kind": "del",
            "text": "Tent "
          },
          {
            "kind": "same",
            "text": "+ PCS Filter 47.1\n"
          },
          {
            "kind": "del",
            "text": "Tent "
          },
          {
            "kind": "same",
            "text": "+ Entropy "
          },
          {
            "kind": "del",
            "text": "+ "
          },
          {
            "kind": "same",
            "text": "PCS "
          },
          {
            "kind": "del",
            "text": "Filter "
          },
          {
            "kind": "same",
            "text": "49.9"
          }
        ],
        "revised": [
          {
            "kind": "same",
            "text": "TABLE "
          },
          {
            "kind": "add",
            "text": "VI: Selected-sample quality on ImageNet-C (T-CS)\nat matched trusted-set coverage. Pseudo-label purity measures\ncorrectness of selected pseudo-labels.\n"
          },
          {
            "kind": "same",
            "text": "Method Pseudo-label Purity (%)\nTent "
          },
          {
            "kind": "same",
            "text": "42.7\n"
          },
          {
            "kind": "same",
            "text": "+ Entropy Filter 44.0\n"
          },
          {
            "kind": "same",
            "text": "+ PCS Filter 47.1\n"
          },
          {
            "kind": "same",
            "text": "+ Entropy "
          },
          {
            "kind": "add",
            "text": "& "
          },
          {
            "kind": "same",
            "text": "PCS "
          },
          {
            "kind": "same",
            "text": "49.9"
          }
        ]
      },
      "comments": [
        "r1-1"
      ]
    },
    {
      "id": "main-table-layout",
      "title": "Main benchmark tables consolidated",
      "type": "Layout",
      "status": "modified",
      "section": "IV-B",
      "original": {
        "page": 9,
        "label": "Tables I–III",
        "image": "assets/pages/original-9.webp"
      },
      "revised": {
        "page": 8,
        "label": "Tables I–IV",
        "image": "assets/pages/revised-8.webp"
      },
      "summary": "Synthetic and natural-shift results are consolidated into revised Table I. The long-horizon results remain Table II, while new diagnostic evidence occupies the lower part of the page.",
      "before": "",
      "after": "",
      "diff": {
        "original": [],
        "revised": []
      },
      "comments": []
    },
    {
      "id": "overview",
      "title": "Framework diagram updated and moved",
      "type": "Figure",
      "status": "modified",
      "section": "III-B",
      "original": {
        "page": 5,
        "label": "Fig. 3",
        "image": "assets/crops/overview-original.webp",
        "box": [
          7.516,
          6.313,
          84.967,
          22.98
        ],
        "aspect": 2.8468271334792123
      },
      "revised": {
        "page": 4,
        "label": "Fig. 3",
        "image": "assets/crops/overview-revised.webp",
        "box": [
          7.516,
          6.313,
          84.967,
          23.864
        ],
        "aspect": 2.7447257383966246
      },
      "summary": "The overview moves from p. 5 to p. 4, with revised captioning and a compact route–adapt–retain presentation.",
      "before": "Fig. 3: Overview of DCF. DCF implements a route–adapt–retain pipeline. Probe-supported Sample Routing routes target samples into trusted and routed-away subsets using entropy and a Fourier stress response. Trusted samples drive PCS-weighted consistency learning, whereas routed-away samples are reused by Routed-away Geometry Repair (RGR) for geometry repair. The resulting candidate update is then selectively retained by Curvature-aware Layer Retention (CLR) through curvature-aware layer-wise retention.",
      "after": "Fig. 3: Overview of DCF. DCF implements a route–adapt–retain pipeline. Probe-supported Sample Routing partitions instances into trusted (⟪\\mathcal{R}_t⟫, Area 1) and routed-away (⟪\\mathcal{U}_t⟫, Areas 2–4) sets via predictive entropy and Fourier stress response. Trusted instances supply PCS-weighted consistency supervision, while routed-away instances drive optimal-transport geometry repair via RGR. Finally, CLR selectively retains candidate parameter updates layer-by-layer via curvature-aware barycentric anchoring.",
      "diff": {
        "original": [
          {
            "kind": "same",
            "text": "Fig. 3: Overview of DCF. DCF implements a route–adapt–retain pipeline. Probe-supported Sample Routing "
          },
          {
            "kind": "del",
            "text": "routes target samples "
          },
          {
            "kind": "same",
            "text": "into trusted "
          },
          {
            "kind": "same",
            "text": "and routed-away "
          },
          {
            "kind": "del",
            "text": "subsets using "
          },
          {
            "kind": "same",
            "text": "entropy and "
          },
          {
            "kind": "del",
            "text": "a "
          },
          {
            "kind": "same",
            "text": "Fourier stress response. Trusted "
          },
          {
            "kind": "del",
            "text": "samples drive "
          },
          {
            "kind": "same",
            "text": "PCS-weighted consistency "
          },
          {
            "kind": "del",
            "text": "learning, whereas "
          },
          {
            "kind": "same",
            "text": "routed-away "
          },
          {
            "kind": "del",
            "text": "samples are reused by Routed-away Geometry Repair (RGR) for "
          },
          {
            "kind": "same",
            "text": "geometry "
          },
          {
            "kind": "del",
            "text": "repair. The resulting "
          },
          {
            "kind": "same",
            "text": "candidate "
          },
          {
            "kind": "del",
            "text": "update is then selectively retained by Curvature-aware Layer Retention (CLR) through "
          },
          {
            "kind": "same",
            "text": "curvature-aware "
          },
          {
            "kind": "del",
            "text": "layer-wise retention."
          }
        ],
        "revised": [
          {
            "kind": "same",
            "text": "Fig. 3: Overview of DCF. DCF implements a route–adapt–retain pipeline. Probe-supported Sample Routing "
          },
          {
            "kind": "add",
            "text": "partitions instances "
          },
          {
            "kind": "same",
            "text": "into trusted "
          },
          {
            "kind": "add",
            "text": "(⟪\\mathcal{R}_t⟫, Area 1) "
          },
          {
            "kind": "same",
            "text": "and routed-away "
          },
          {
            "kind": "add",
            "text": "(⟪\\mathcal{U}_t⟫, Areas 2–4) sets via predictive "
          },
          {
            "kind": "same",
            "text": "entropy and "
          },
          {
            "kind": "same",
            "text": "Fourier stress response. Trusted "
          },
          {
            "kind": "add",
            "text": "instances supply "
          },
          {
            "kind": "same",
            "text": "PCS-weighted consistency "
          },
          {
            "kind": "add",
            "text": "supervision, while "
          },
          {
            "kind": "same",
            "text": "routed-away "
          },
          {
            "kind": "add",
            "text": "instances drive optimal-transport "
          },
          {
            "kind": "same",
            "text": "geometry "
          },
          {
            "kind": "add",
            "text": "repair via RGR. Finally, CLR selectively retains "
          },
          {
            "kind": "same",
            "text": "candidate "
          },
          {
            "kind": "add",
            "text": "parameter updates layer-by-layer via "
          },
          {
            "kind": "same",
            "text": "curvature-aware "
          },
          {
            "kind": "add",
            "text": "barycentric anchoring."
          }
        ]
      },
      "figure": "f3",
      "comments": [
        "eic"
      ],
      "textScope": "caption"
    }
  ],
  "figures": [
    {
      "id": "f1",
      "title": "Long-horizon instability",
      "original": {
        "page": 1,
        "label": "Fig. 1",
        "image": "assets/crops/fig1-original.webp",
        "box": [
          50.49,
          26.136,
          41.993,
          28.03
        ],
        "aspect": 1.1564748201438848
      },
      "revised": {
        "page": 1,
        "label": "Fig. 1",
        "image": "assets/crops/fig1-revised.webp",
        "box": [
          50.49,
          26.263,
          41.993,
          28.157
        ],
        "aspect": 1.1523297491039426
      },
      "status": "context",
      "summary": "The early/late comparison remains Fig. 1. Compare caption and placement in the two PDFs.",
      "changes": [],
      "before": "Fig. 1: Long-horizon instability of existing TTA methods. Each point represents a method’s average accuracy at the early stage (x-axis, Domain index 15) and late stage (y-axis, Domain index 225) of adaptation on a temporally correlated stream. The diagonal line indicates equal performance at both stages. Many methods that achieve strong early performance later fall below the diagonal, indicating unstable long-horizon adaptation.",
      "after": "Fig. 1: Long-horizon instability of existing TTA methods. Each point represents a method’s average accuracy at the early stage (x-axis, Domain index 15) and late stage (y-axis, Domain index 225) of adaptation on a temporally correlated stream. Many methods that achieve strong early performance later fall below the diagonal, indicating unstable long-horizon adaptation.",
      "diff": {
        "original": [
          {
            "kind": "same",
            "text": "Fig. 1: Long-horizon instability of existing TTA methods. Each point represents a method’s average accuracy at the early stage (x-axis, Domain index 15) and late stage (y-axis, Domain index 225) of adaptation on a temporally correlated stream. "
          },
          {
            "kind": "del",
            "text": "The diagonal line indicates equal performance at both stages. "
          },
          {
            "kind": "same",
            "text": "Many methods that achieve strong early performance later fall below the diagonal, indicating unstable long-horizon adaptation."
          }
        ],
        "revised": [
          {
            "kind": "same",
            "text": "Fig. 1: Long-horizon instability of existing TTA methods. Each point represents a method’s average accuracy at the early stage (x-axis, Domain index 15) and late stage (y-axis, Domain index 225) of adaptation on a temporally correlated stream. "
          },
          {
            "kind": "same",
            "text": "Many methods that achieve strong early performance later fall below the diagonal, indicating unstable long-horizon adaptation."
          }
        ]
      },
      "textScope": "caption"
    },
    {
      "id": "f2",
      "title": "Motivation diagnostics",
      "original": {
        "page": 2,
        "label": "Fig. 2",
        "image": "assets/crops/fig2-original.webp",
        "box": [
          7.516,
          6.187,
          84.967,
          22.475
        ],
        "aspect": 2.9170403587443947
      },
      "revised": {
        "page": 2,
        "label": "Fig. 2",
        "image": "assets/crops/fig2-revised.webp",
        "box": [
          7.516,
          6.061,
          84.967,
          24.747
        ],
        "aspect": 2.6551020408163266
      },
      "status": "modified",
      "summary": "The diagnostic terminology and explanatory caption are revised. The composite remains Fig. 2.",
      "changes": [],
      "before": "Fig. 2: Why homogeneous TTA fails. (a) Low entropy does not guarantee reliability: even highly confident predictions can be wrong and may be driven by spurious cues. (b) High-entropy samples are weak pseudo-label candidates, but their centroid entropy deficit indicates that they still capture shifting target geometry. Discarding them accelerates representation bias and removes useful structural anchors. (c) Layer drift, measured by KL divergence from the source model, is heterogeneous across depth, with different magnitudes and even opposite trends.",
      "after": "Fig. 2: Why homogeneous TTA fails. (a) Low entropy does not guarantee reliability: even highly confident predictions can be wrong and may be driven by spurious cues. (b) High-entropy samples are weak pseudo-label candidates, but their centroid entropy deficit indicates that they still capture shifting target geometry. Discarding them accelerates representation bias and removes useful structural anchors. (c) Layer drift, measured by KL divergence from the source model, is heterogeneous across depth, with different magnitudes and even opposite trends.",
      "diff": {
        "original": [
          {
            "kind": "same",
            "text": "Fig. 2: Why homogeneous TTA fails. (a) Low entropy does not guarantee reliability: even highly confident predictions can be wrong and may be driven by spurious cues. (b) High-entropy samples are weak pseudo-label candidates, but their centroid entropy deficit indicates that they still capture shifting target geometry. Discarding them accelerates representation bias and removes useful structural anchors. (c) Layer drift, measured by KL divergence from the source model, is heterogeneous across depth, with different magnitudes and even opposite trends."
          }
        ],
        "revised": [
          {
            "kind": "same",
            "text": "Fig. 2: Why homogeneous TTA fails. (a) Low entropy does not guarantee reliability: even highly confident predictions can be wrong and may be driven by spurious cues. (b) High-entropy samples are weak pseudo-label candidates, but their centroid entropy deficit indicates that they still capture shifting target geometry. Discarding them accelerates representation bias and removes useful structural anchors. (c) Layer drift, measured by KL divergence from the source model, is heterogeneous across depth, with different magnitudes and even opposite trends."
          }
        ]
      },
      "textScope": "caption"
    },
    {
      "id": "f3",
      "title": "Route–adapt–retain overview",
      "original": {
        "page": 5,
        "label": "Fig. 3",
        "image": "assets/crops/fig3-original.webp",
        "box": [
          7.516,
          6.313,
          84.967,
          22.98
        ],
        "aspect": 2.8468271334792123
      },
      "revised": {
        "page": 4,
        "label": "Fig. 3",
        "image": "assets/crops/fig3-revised.webp",
        "box": [
          7.516,
          6.313,
          84.967,
          23.864
        ],
        "aspect": 2.7447257383966246
      },
      "status": "modified",
      "summary": "The framework overview and caption move from p. 5 to p. 4.",
      "changes": [
        "overview"
      ],
      "before": "Fig. 3: Overview of DCF. DCF implements a route–adapt–retain pipeline. Probe-supported Sample Routing routes target samples into trusted and routed-away subsets using entropy and a Fourier stress response. Trusted samples drive PCS-weighted consistency learning, whereas routed-away samples are reused by Routed-away Geometry Repair (RGR) for geometry repair. The resulting candidate update is then selectively retained by Curvature-aware Layer Retention (CLR) through curvature-aware layer-wise retention.",
      "after": "Fig. 3: Overview of DCF. DCF implements a route–adapt–retain pipeline. Probe-supported Sample Routing partitions instances into trusted (⟪\\mathcal{R}_t⟫, Area 1) and routed-away (⟪\\mathcal{U}_t⟫, Areas 2–4) sets via predictive entropy and Fourier stress response. Trusted instances supply PCS-weighted consistency supervision, while routed-away instances drive optimal-transport geometry repair via RGR. Finally, CLR selectively retains candidate parameter updates layer-by-layer via curvature-aware barycentric anchoring.",
      "diff": {
        "original": [
          {
            "kind": "same",
            "text": "Fig. 3: Overview of DCF. DCF implements a route–adapt–retain pipeline. Probe-supported Sample Routing "
          },
          {
            "kind": "del",
            "text": "routes target samples "
          },
          {
            "kind": "same",
            "text": "into trusted "
          },
          {
            "kind": "same",
            "text": "and routed-away "
          },
          {
            "kind": "del",
            "text": "subsets using "
          },
          {
            "kind": "same",
            "text": "entropy and "
          },
          {
            "kind": "del",
            "text": "a "
          },
          {
            "kind": "same",
            "text": "Fourier stress response. Trusted "
          },
          {
            "kind": "del",
            "text": "samples drive "
          },
          {
            "kind": "same",
            "text": "PCS-weighted consistency "
          },
          {
            "kind": "del",
            "text": "learning, whereas "
          },
          {
            "kind": "same",
            "text": "routed-away "
          },
          {
            "kind": "del",
            "text": "samples are reused by Routed-away Geometry Repair (RGR) for "
          },
          {
            "kind": "same",
            "text": "geometry "
          },
          {
            "kind": "del",
            "text": "repair. The resulting "
          },
          {
            "kind": "same",
            "text": "candidate "
          },
          {
            "kind": "del",
            "text": "update is then selectively retained by Curvature-aware Layer Retention (CLR) through "
          },
          {
            "kind": "same",
            "text": "curvature-aware "
          },
          {
            "kind": "del",
            "text": "layer-wise retention."
          }
        ],
        "revised": [
          {
            "kind": "same",
            "text": "Fig. 3: Overview of DCF. DCF implements a route–adapt–retain pipeline. Probe-supported Sample Routing "
          },
          {
            "kind": "add",
            "text": "partitions instances "
          },
          {
            "kind": "same",
            "text": "into trusted "
          },
          {
            "kind": "add",
            "text": "(⟪\\mathcal{R}_t⟫, Area 1) "
          },
          {
            "kind": "same",
            "text": "and routed-away "
          },
          {
            "kind": "add",
            "text": "(⟪\\mathcal{U}_t⟫, Areas 2–4) sets via predictive "
          },
          {
            "kind": "same",
            "text": "entropy and "
          },
          {
            "kind": "same",
            "text": "Fourier stress response. Trusted "
          },
          {
            "kind": "add",
            "text": "instances supply "
          },
          {
            "kind": "same",
            "text": "PCS-weighted consistency "
          },
          {
            "kind": "add",
            "text": "supervision, while "
          },
          {
            "kind": "same",
            "text": "routed-away "
          },
          {
            "kind": "add",
            "text": "instances drive optimal-transport "
          },
          {
            "kind": "same",
            "text": "geometry "
          },
          {
            "kind": "add",
            "text": "repair via RGR. Finally, CLR selectively retains "
          },
          {
            "kind": "same",
            "text": "candidate "
          },
          {
            "kind": "add",
            "text": "parameter updates layer-by-layer via "
          },
          {
            "kind": "same",
            "text": "curvature-aware "
          },
          {
            "kind": "add",
            "text": "barycentric anchoring."
          }
        ]
      },
      "textScope": "caption"
    },
    {
      "id": "f4",
      "title": "Temporally correlated streams",
      "original": {
        "page": 8,
        "label": "Fig. 4",
        "image": "assets/crops/fig4-original.webp",
        "box": [
          50.49,
          6.692,
          41.993,
          22.348
        ],
        "aspect": 1.4514672686230248
      },
      "revised": {
        "page": 7,
        "label": "Fig. 4",
        "image": "assets/crops/fig4-revised.webp",
        "box": [
          7.516,
          48.611,
          42.157,
          20.581
        ],
        "aspect": 1.5794621026894866
      },
      "status": "moved",
      "summary": "The stream illustration is retained and the scenario naming in the caption is clarified.",
      "changes": [],
      "before": "Fig. 4: Illustration of the challenging test data streams considered in our experiments. T-CS denotes temporally-correlated covariate shift, *LS denotes label shift, and *MSL denotes mixed severity levels.",
      "after": "Fig. 4: Illustration of temporally correlated test streams. T-CS, T-CS-LS, and T-CS-MSL denote covariate shifts, added label shifts, and mixed severities, respectively.",
      "diff": {
        "original": [
          {
            "kind": "same",
            "text": "Fig. 4: Illustration of "
          },
          {
            "kind": "del",
            "text": "the challenging "
          },
          {
            "kind": "same",
            "text": "test "
          },
          {
            "kind": "del",
            "text": "data streams considered in our experiments. T-CS denotes temporally-correlated "
          },
          {
            "kind": "same",
            "text": "covariate "
          },
          {
            "kind": "del",
            "text": "shift, *LS denotes "
          },
          {
            "kind": "same",
            "text": "label "
          },
          {
            "kind": "del",
            "text": "shift, "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "del",
            "text": "*MSL denotes "
          },
          {
            "kind": "same",
            "text": "mixed "
          },
          {
            "kind": "del",
            "text": "severity levels."
          }
        ],
        "revised": [
          {
            "kind": "same",
            "text": "Fig. 4: Illustration of "
          },
          {
            "kind": "add",
            "text": "temporally correlated "
          },
          {
            "kind": "same",
            "text": "test "
          },
          {
            "kind": "add",
            "text": "streams. T-CS, T-CS-LS, and T-CS-MSL denote "
          },
          {
            "kind": "same",
            "text": "covariate "
          },
          {
            "kind": "add",
            "text": "shifts, added "
          },
          {
            "kind": "same",
            "text": "label "
          },
          {
            "kind": "add",
            "text": "shifts, "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "same",
            "text": "mixed "
          },
          {
            "kind": "add",
            "text": "severities, respectively."
          }
        ]
      },
      "textScope": "caption"
    },
    {
      "id": "f5",
      "title": "Stress probe and routing variants",
      "original": {
        "page": 10,
        "label": "Fig. 5",
        "image": "assets/crops/fig5-original.webp",
        "box": [
          7.516,
          60.606,
          42.157,
          32.955
        ],
        "aspect": 0.9877675840978594
      },
      "revised": {
        "page": 9,
        "label": "Fig. 5",
        "image": "assets/crops/fig5-revised.webp",
        "box": [
          7.516,
          34.722,
          42.157,
          18.687
        ],
        "aspect": 1.7412398921832883
      },
      "status": "modified",
      "summary": "Compare the revised line-plot styling, labeling, and caption against the original design-choice plots.",
      "changes": [
        "probe-definition",
        "pcs-definition"
      ],
      "before": "Fig. 5: Ablation of design choices in stress probe and router. Fourier probing and entropy-PCS routing perform best, showing that structured frequency cues and joint criteria provide more reliable adaptation signals.",
      "after": "Fig. 5: Ablation of design choices in stress probe and router on ImageNet-C (T-CS). Our Fourier probing and entropy-PCS routing perform best, showing that structured frequency cues and joint criteria provide more reliable adaptation signals.",
      "diff": {
        "original": [
          {
            "kind": "same",
            "text": "Fig. 5: Ablation of design choices in stress probe and "
          },
          {
            "kind": "del",
            "text": "router. "
          },
          {
            "kind": "same",
            "text": "Fourier probing and entropy-PCS routing perform best, showing that structured frequency cues and joint criteria provide more reliable adaptation signals."
          }
        ],
        "revised": [
          {
            "kind": "same",
            "text": "Fig. 5: Ablation of design choices in stress probe and "
          },
          {
            "kind": "add",
            "text": "router on ImageNet-C (T-CS). Our "
          },
          {
            "kind": "same",
            "text": "Fourier probing and entropy-PCS routing perform best, showing that structured frequency cues and joint criteria provide more reliable adaptation signals."
          }
        ]
      },
      "textScope": "caption"
    },
    {
      "id": "f6",
      "title": "Qualitative stress responses",
      "original": {
        "page": 10,
        "label": "Fig. 6",
        "image": "assets/crops/fig6-original.webp",
        "box": [
          50.49,
          6.818,
          41.993,
          29.924
        ],
        "aspect": 1.0824915824915824
      },
      "revised": {
        "page": 9,
        "label": "Fig. 6",
        "image": "assets/crops/fig6-revised.webp",
        "box": [
          7.516,
          55.934,
          42.157,
          31.061
        ],
        "aspect": 1.0487012987012987
      },
      "status": "modified",
      "summary": "The response panels are retained. The new caption clarifies that the two panels show different image examples.",
      "changes": [
        "probe-definition",
        "shape-texture"
      ],
      "before": "Fig. 6: Qualitative comparison of stress probes and routing variants. The left panel compares candidate stress probes, and the right panel compares routing variants. Both support the design choices used in DCF.",
      "after": "Fig. 6: Qualitative comparison of model responses to stress probes. The two panels show different image examples. Each compares augmented inputs and the responses of Tent and DCF under the same stress probes.",
      "diff": {
        "original": [
          {
            "kind": "same",
            "text": "Fig. 6: Qualitative comparison of "
          },
          {
            "kind": "same",
            "text": "stress "
          },
          {
            "kind": "del",
            "text": "probes and routing variants. "
          },
          {
            "kind": "same",
            "text": "The "
          },
          {
            "kind": "del",
            "text": "left panel "
          },
          {
            "kind": "same",
            "text": "compares "
          },
          {
            "kind": "del",
            "text": "candidate stress probes, "
          },
          {
            "kind": "same",
            "text": "and the "
          },
          {
            "kind": "del",
            "text": "right panel compares routing variants. Both support "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "del",
            "text": "design choices used in DCF."
          }
        ],
        "revised": [
          {
            "kind": "same",
            "text": "Fig. 6: Qualitative comparison of "
          },
          {
            "kind": "add",
            "text": "model responses to "
          },
          {
            "kind": "same",
            "text": "stress "
          },
          {
            "kind": "add",
            "text": "probes. "
          },
          {
            "kind": "same",
            "text": "The "
          },
          {
            "kind": "add",
            "text": "two panels show different image examples. Each "
          },
          {
            "kind": "same",
            "text": "compares "
          },
          {
            "kind": "add",
            "text": "augmented inputs "
          },
          {
            "kind": "same",
            "text": "and the "
          },
          {
            "kind": "add",
            "text": "responses of Tent and DCF under "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "add",
            "text": "same stress probes."
          }
        ]
      },
      "textScope": "caption"
    },
    {
      "id": "f7",
      "title": "PCS–entropy diagnostic regions",
      "original": {
        "page": 11,
        "label": "Fig. 7",
        "image": "assets/crops/fig7-original.webp",
        "box": [
          7.516,
          6.692,
          42.157,
          38.51
        ],
        "aspect": 0.8466579292267365
      },
      "revised": {
        "page": 9,
        "label": "Fig. 7",
        "image": "assets/crops/fig7-revised.webp",
        "box": [
          50.49,
          42.929,
          41.993,
          41.288
        ],
        "aspect": 0.7851037851037851
      },
      "status": "context",
      "summary": "The retained diagnostic plots visualize the four routing regions explicitly defined in revised Section III-C.",
      "changes": [
        "regions"
      ],
      "before": "Fig. 7: PCS-Entropy distribution of samples (ImageNet-C, long-horizon T-CS). Our method stably maintains high accuracy in the trusted region (Area 1: low entropy, high PCS) across stages, effectively isolating confident but incorrect predictions into Area 3. In contrast, unconstrained self-training (Tent) suffers catastrophic collapse by the late stage.",
      "after": "Fig. 7: PCS-Entropy distribution of samples (ImageNet-C, long-horizon T-CS). For DCF, the low-entropy, high-PCS diagnostic region (Area 1) remains reliable throughout adaptation, whereas Tent degrades markedly across all regions at the late stage. This comparison highlights the complementary roles of entropy and PCS in identifying reliable adaptation evidence and the superior long-horizon stability of DCF.",
      "diff": {
        "original": [
          {
            "kind": "same",
            "text": "Fig. 7: PCS-Entropy distribution of samples (ImageNet-C, long-horizon T-CS). "
          },
          {
            "kind": "del",
            "text": "Our method stably maintains high accuracy in "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "del",
            "text": "trusted "
          },
          {
            "kind": "same",
            "text": "region (Area "
          },
          {
            "kind": "del",
            "text": "1: low entropy, high PCS) "
          },
          {
            "kind": "same",
            "text": "across "
          },
          {
            "kind": "del",
            "text": "stages, effectively isolating confident but incorrect predictions into Area 3. In contrast, unconstrained self-training (Tent) suffers catastrophic collapse by "
          },
          {
            "kind": "same",
            "text": "the late "
          },
          {
            "kind": "del",
            "text": "stage."
          }
        ],
        "revised": [
          {
            "kind": "same",
            "text": "Fig. 7: PCS-Entropy distribution of samples (ImageNet-C, long-horizon T-CS). "
          },
          {
            "kind": "add",
            "text": "For DCF, "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "add",
            "text": "low-entropy, high-PCS diagnostic "
          },
          {
            "kind": "same",
            "text": "region (Area "
          },
          {
            "kind": "add",
            "text": "1) remains reliable throughout adaptation, whereas Tent degrades markedly "
          },
          {
            "kind": "same",
            "text": "across "
          },
          {
            "kind": "add",
            "text": "all regions at "
          },
          {
            "kind": "same",
            "text": "the late "
          },
          {
            "kind": "add",
            "text": "stage. This comparison highlights the complementary roles of entropy and PCS in identifying reliable adaptation evidence and the superior long-horizon stability of DCF."
          }
        ]
      },
      "textScope": "caption"
    },
    {
      "id": "f8",
      "title": "Layer-wise parameter drift",
      "original": {
        "page": 11,
        "label": "Fig. 8",
        "image": "assets/crops/fig8-original.webp",
        "box": [
          7.516,
          43.561,
          42.157,
          22.601
        ],
        "aspect": 1.4387527839643652
      },
      "revised": {
        "page": 10,
        "label": "Fig. 8",
        "image": "assets/crops/fig8-revised.webp",
        "box": [
          50.49,
          6.692,
          41.993,
          20.455
        ],
        "aspect": 1.583743842364532
      },
      "status": "modified",
      "summary": "The drift diagnostic remains Fig. 8 with revised explanation; gate values are shown separately in new Fig. 9.",
      "changes": [
        "curvature-definition"
      ],
      "before": "Fig. 8: Layer-wise parameter drift on ImageNet-C (T-CS). DCF shows a pulse-and-recover pattern, avoiding the progressive forgetting (drift accumulation) seen in Tent [9].",
      "after": "Fig. 8: Layer-wise parameter drift on ImageNet-C (T-CS, ResNet-50), measured by ⟪\\Delta_{t,l}^{\\mathrm{param}} = \\lVert\\theta_t^l-\\theta_0^l\\rVert_2^2/d_l⟫ (averaged per layer block). DCF exhibits a pulse-and-recover behavior, avoiding the persistent drift accumulation observed in Tent.",
      "diff": {
        "original": [
          {
            "kind": "same",
            "text": "Fig. 8: Layer-wise parameter drift on ImageNet-C "
          },
          {
            "kind": "del",
            "text": "(T-CS). "
          },
          {
            "kind": "same",
            "text": "DCF "
          },
          {
            "kind": "del",
            "text": "shows "
          },
          {
            "kind": "same",
            "text": "a pulse-and-recover "
          },
          {
            "kind": "del",
            "text": "pattern, "
          },
          {
            "kind": "same",
            "text": "avoiding the "
          },
          {
            "kind": "del",
            "text": "progressive forgetting (drift accumulation) seen "
          },
          {
            "kind": "same",
            "text": "in "
          },
          {
            "kind": "del",
            "text": "Tent [9]."
          }
        ],
        "revised": [
          {
            "kind": "same",
            "text": "Fig. 8: Layer-wise parameter drift on ImageNet-C "
          },
          {
            "kind": "add",
            "text": "(T-CS, ResNet-50), measured by ⟪\\Delta_{t,l}^{\\mathrm{param}} = \\lVert\\theta_t^l-\\theta_0^l\\rVert_2^2/d_l⟫ (averaged per layer block). "
          },
          {
            "kind": "same",
            "text": "DCF "
          },
          {
            "kind": "add",
            "text": "exhibits "
          },
          {
            "kind": "same",
            "text": "a pulse-and-recover "
          },
          {
            "kind": "add",
            "text": "behavior, "
          },
          {
            "kind": "same",
            "text": "avoiding the "
          },
          {
            "kind": "add",
            "text": "persistent drift accumulation observed "
          },
          {
            "kind": "same",
            "text": "in "
          },
          {
            "kind": "add",
            "text": "Tent."
          }
        ]
      },
      "textScope": "caption"
    },
    {
      "id": "f9",
      "title": "Layer retention gate heatmaps",
      "original": null,
      "revised": {
        "page": 10,
        "label": "Fig. 9",
        "image": "assets/crops/fig9-revised.webp",
        "box": [
          50.49,
          28.409,
          41.993,
          30.303
        ],
        "aspect": 1.0698835274542429
      },
      "status": "added",
      "summary": "New direct visualization of gate values over time and corruption type.",
      "changes": [
        "retention-heatmap"
      ],
      "before": "",
      "after": "Fig. 9: Per-layer retention gates ⟪\\mu_t^l⟫ of CLR (ResNet-50). (a) Gates over the long-horizon stream (Domain index ⟪0\\!\\to\\!225⟫). (b) Gates per corruption type on T-CS.",
      "diff": {
        "original": [],
        "revised": [
          {
            "kind": "add",
            "text": "Fig. 9: Per-layer retention gates ⟪\\mu_t^l⟫ of CLR (ResNet-50). (a) Gates over the long-horizon stream (Domain index ⟪0\\!\\to\\!225⟫). (b) Gates per corruption type on T-CS."
          }
        ]
      },
      "textScope": "caption"
    },
    {
      "id": "f10",
      "title": "Static versus correlated streams",
      "original": {
        "page": 11,
        "label": "Fig. 9",
        "image": "assets/crops/fig10-original.webp",
        "box": [
          50.49,
          6.692,
          41.993,
          19.444
        ],
        "aspect": 1.66580310880829
      },
      "revised": {
        "page": 11,
        "label": "Fig. 10",
        "image": "assets/crops/fig10-revised.webp",
        "box": [
          7.516,
          12.626,
          42.157,
          21.086
        ],
        "aspect": 1.541766109785203
      },
      "status": "moved",
      "summary": "Original Fig. 9 becomes Fig. 10 with clarified protocol wording. Its renumbering is separated from newly added evidence.",
      "changes": [],
      "before": "Fig. 9: Static vs. Temporally-Correlated Streams. Accuracy (%) on ImageNet-C under independently sampled test streams (Static, average accuracy) and temporally-correlated long-horizon test streams (Long-horizon T-CS, final round accuracy).",
      "after": "Fig. 10: Static vs. Temporally Correlated Streams. Comparison on ImageNet-C between independently sampled streams (Static setting) and temporally correlated long-horizon streams (Long-horizon T-CS, final round accuracy).",
      "diff": {
        "original": [
          {
            "kind": "same",
            "text": "Fig. "
          },
          {
            "kind": "del",
            "text": "9: "
          },
          {
            "kind": "same",
            "text": "Static vs. "
          },
          {
            "kind": "del",
            "text": "Temporally-Correlated "
          },
          {
            "kind": "same",
            "text": "Streams. "
          },
          {
            "kind": "del",
            "text": "Accuracy (%) "
          },
          {
            "kind": "same",
            "text": "on ImageNet-C "
          },
          {
            "kind": "del",
            "text": "under "
          },
          {
            "kind": "same",
            "text": "independently sampled "
          },
          {
            "kind": "del",
            "text": "test "
          },
          {
            "kind": "same",
            "text": "streams "
          },
          {
            "kind": "del",
            "text": "(Static, average accuracy) "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "del",
            "text": "temporally-correlated "
          },
          {
            "kind": "same",
            "text": "long-horizon "
          },
          {
            "kind": "del",
            "text": "test "
          },
          {
            "kind": "same",
            "text": "streams (Long-horizon T-CS, final round accuracy)."
          }
        ],
        "revised": [
          {
            "kind": "same",
            "text": "Fig. "
          },
          {
            "kind": "add",
            "text": "10: "
          },
          {
            "kind": "same",
            "text": "Static vs. "
          },
          {
            "kind": "add",
            "text": "Temporally Correlated "
          },
          {
            "kind": "same",
            "text": "Streams. "
          },
          {
            "kind": "add",
            "text": "Comparison "
          },
          {
            "kind": "same",
            "text": "on ImageNet-C "
          },
          {
            "kind": "add",
            "text": "between "
          },
          {
            "kind": "same",
            "text": "independently sampled "
          },
          {
            "kind": "same",
            "text": "streams "
          },
          {
            "kind": "add",
            "text": "(Static setting) "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "add",
            "text": "temporally correlated "
          },
          {
            "kind": "same",
            "text": "long-horizon "
          },
          {
            "kind": "same",
            "text": "streams (Long-horizon T-CS, final round accuracy)."
          }
        ]
      },
      "textScope": "caption"
    },
    {
      "id": "f11",
      "title": "Cross-domain transfer and variability",
      "original": {
        "page": 11,
        "label": "Fig. 10",
        "image": "assets/crops/fig11-original.webp",
        "box": [
          50.49,
          45.833,
          41.993,
          27.525
        ],
        "aspect": 1.1776556776556777
      },
      "revised": {
        "page": 11,
        "label": "Fig. 11",
        "image": "assets/crops/fig11-revised.webp",
        "box": [
          50.49,
          17.4,
          42.4,
          50.3
        ],
        "aspect": 0.6519558676028084
      },
      "status": "modified",
      "summary": "The revised figure adds mean ± SD, updated transfer results, and the DomainNet-126 panel.",
      "changes": [
        "transfer",
        "domainnet"
      ],
      "before": "Fig. 10: Cross-domain Generalization. Each cell shows the average accuracy improvement compared to No Adapt when a method (row) is adapted to a source domain (column) and then evaluated on the remaining 14 unseen ImageNet-C domains.",
      "after": "Fig. 11: Cross-domain transfer. (a): ImageNet-C accuracy gains (in percentage points) over No Adapt, averaged across all unseen corruption domains. (b): DomainNet-126 accuracy gains over No Adapt for each cross-domain transfer pair (⟪\\text{Adaptation} \\to \\text{Evaluation}⟫, where C: Clipart, P: Painting, R: Real, and S: Sketch). Results are reported as mean ⟪\\pm⟫ standard deviation over five runs.",
      "diff": {
        "original": [
          {
            "kind": "same",
            "text": "Fig. "
          },
          {
            "kind": "del",
            "text": "10: "
          },
          {
            "kind": "same",
            "text": "Cross-domain "
          },
          {
            "kind": "del",
            "text": "Generalization. Each cell shows the average "
          },
          {
            "kind": "same",
            "text": "accuracy "
          },
          {
            "kind": "del",
            "text": "improvement compared to "
          },
          {
            "kind": "same",
            "text": "No Adapt "
          },
          {
            "kind": "del",
            "text": "when a method (row) is adapted to a source domain (column) "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "del",
            "text": "then evaluated on the remaining 14 unseen ImageNet-C domains."
          }
        ],
        "revised": [
          {
            "kind": "same",
            "text": "Fig. "
          },
          {
            "kind": "add",
            "text": "11: "
          },
          {
            "kind": "same",
            "text": "Cross-domain "
          },
          {
            "kind": "add",
            "text": "transfer. (a): ImageNet-C "
          },
          {
            "kind": "same",
            "text": "accuracy "
          },
          {
            "kind": "add",
            "text": "gains (in percentage points) over No Adapt, averaged across all unseen corruption domains. (b): DomainNet-126 accuracy gains over "
          },
          {
            "kind": "same",
            "text": "No Adapt "
          },
          {
            "kind": "add",
            "text": "for each cross-domain transfer pair (⟪\\text{Adaptation} \\to \\text{Evaluation}⟫, where C: Clipart, P: Painting, R: Real, "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "add",
            "text": "S: Sketch). Results are reported as mean ⟪\\pm⟫ standard deviation over five runs."
          }
        ]
      },
      "textScope": "caption"
    },
    {
      "id": "f12",
      "title": "Expanded hyperparameter analysis",
      "original": {
        "page": 12,
        "label": "Fig. 11",
        "image": "assets/crops/fig12-original.webp",
        "box": [
          7.516,
          54.924,
          42.157,
          22.096
        ],
        "aspect": 1.4748858447488584
      },
      "revised": {
        "page": 12,
        "label": "Fig. 12",
        "image": "assets/crops/fig12-revised.webp",
        "box": [
          7.516,
          6.313,
          42.157,
          46.338
        ],
        "aspect": 0.7029379760609358
      },
      "status": "modified",
      "summary": "The original two-panel study expands to four panels, adding frequency/amplitude and Sinkhorn/regularization sensitivity.",
      "changes": [
        "probe-sensitivity",
        "sinkhorn",
        "threshold-guidance"
      ],
      "before": "Fig. 11: Hyperparameter sensitivity. (a) PCS sharpness ⟪\\tau⟫ and fixed retention factor ⟪\\mu⟫ show a non-monotonic joint effect, highlighting the limitations of static retention and motivating the dynamic layer-wise retention in DCF (red plane). (b) Moderate PCS and entropy thresholds form a broad high-performing region, whereas overly loose or strict routing impairs adaptation.",
      "after": "Fig. 12: Hyperparameter sensitivity. (a) PCS sharpness ⟪\\tau⟫ vs. static retention ⟪\\mu⟫, where dynamic layer-wise retention (CLR, red plane) strictly surpasses static retention baselines. (b) Joint routing thresholds ⟪(\\upsilon_{\\mathrm{PCS}}, \\upsilon_{\\mathrm{Ent}})⟫, showing a broad optimal zone balancing trusted evidence and sample volume. (c) Sensitivity to perturbation strength ⟪\\lambda⟫ and nominal frequency sampling range ⟪f_c⟫ (cycles/image). (d) Stability across Sinkhorn iterations ⟪N_{\\mathrm{sk}}⟫ and entropic regularization ⟪\\varepsilon_{\\mathrm{OT}}⟫, confirming reliable OT alignment with low iteration counts.",
      "diff": {
        "original": [
          {
            "kind": "same",
            "text": "Fig. "
          },
          {
            "kind": "del",
            "text": "11: "
          },
          {
            "kind": "same",
            "text": "Hyperparameter sensitivity. (a) PCS sharpness ⟪\\tau⟫ "
          },
          {
            "kind": "del",
            "text": "and fixed retention factor ⟪\\mu⟫ show a non-monotonic joint effect, highlighting the limitations of "
          },
          {
            "kind": "same",
            "text": "static retention "
          },
          {
            "kind": "del",
            "text": "and motivating the "
          },
          {
            "kind": "same",
            "text": "dynamic layer-wise retention "
          },
          {
            "kind": "del",
            "text": "in DCF (red plane). "
          },
          {
            "kind": "same",
            "text": "(b) "
          },
          {
            "kind": "del",
            "text": "Moderate PCS and entropy "
          },
          {
            "kind": "same",
            "text": "thresholds "
          },
          {
            "kind": "del",
            "text": "form "
          },
          {
            "kind": "same",
            "text": "a broad "
          },
          {
            "kind": "del",
            "text": "high-performing region, whereas overly loose or strict routing impairs adaptation."
          }
        ],
        "revised": [
          {
            "kind": "same",
            "text": "Fig. "
          },
          {
            "kind": "add",
            "text": "12: "
          },
          {
            "kind": "same",
            "text": "Hyperparameter sensitivity. (a) PCS sharpness ⟪\\tau⟫ "
          },
          {
            "kind": "add",
            "text": "vs. "
          },
          {
            "kind": "same",
            "text": "static retention "
          },
          {
            "kind": "add",
            "text": "⟪\\mu⟫, where "
          },
          {
            "kind": "same",
            "text": "dynamic layer-wise retention "
          },
          {
            "kind": "add",
            "text": "(CLR, red plane) strictly surpasses static retention baselines. "
          },
          {
            "kind": "same",
            "text": "(b) "
          },
          {
            "kind": "add",
            "text": "Joint routing "
          },
          {
            "kind": "same",
            "text": "thresholds "
          },
          {
            "kind": "add",
            "text": "⟪(\\upsilon_{\\mathrm{PCS}}, \\upsilon_{\\mathrm{Ent}})⟫, showing "
          },
          {
            "kind": "same",
            "text": "a broad "
          },
          {
            "kind": "add",
            "text": "optimal zone balancing trusted evidence and sample volume. (c) Sensitivity to perturbation strength ⟪\\lambda⟫ and nominal frequency sampling range ⟪f_c⟫ (cycles/image). (d) Stability across Sinkhorn iterations ⟪N_{\\mathrm{sk}}⟫ and entropic regularization ⟪\\varepsilon_{\\mathrm{OT}}⟫, confirming reliable OT alignment with low iteration counts."
          }
        ]
      },
      "textScope": "caption"
    },
    {
      "id": "f-runtime",
      "title": "Runtime plot replaced by resource table",
      "original": {
        "page": 12,
        "label": "Fig. 12",
        "image": "assets/crops/fig-runtime-original.webp",
        "box": [
          7.516,
          78.535,
          42.157,
          15.909
        ],
        "aspect": 2.0443037974683542
      },
      "revised": {
        "page": 12,
        "label": "Table XI",
        "image": "assets/crops/fig-runtime-revised.webp",
        "box": [
          50.49,
          6.313,
          41.993,
          26.01
        ],
        "aspect": 1.2485436893203883
      },
      "status": "removed",
      "summary": "The revision replaces the scatter plot with explicit FLOPs, memory, runtime, accuracy, and DCF-Lite measurements.",
      "changes": [
        "efficiency"
      ],
      "before": "Fig. 12: Accuracy-runtime trade-off. Per-image GPU runtime vs. average accuracy on ImageNet-C (long-horizon T-CS). Better methods appear in the lower-right quadrant. Runtimes are averaged over 100 runs (single A100 GPU).",
      "after": "Table XI: Computational overhead and lightweight variant. Comparison of FLOPs, peak memory, per-image runtime, and average accuracy on ImageNet-C (long-horizon T-CS, ResNet-50) measured on an NVIDIA A100.",
      "diff": {
        "original": [
          {
            "kind": "del",
            "text": "Fig. 12: Accuracy-runtime trade-off. Per-image GPU runtime vs. "
          },
          {
            "kind": "same",
            "text": "average accuracy on ImageNet-C (long-horizon "
          },
          {
            "kind": "del",
            "text": "T-CS). Better methods appear in the lower-right quadrant. Runtimes are averaged over 100 runs (single A100 GPU)."
          }
        ],
        "revised": [
          {
            "kind": "add",
            "text": "Table XI: Computational overhead and lightweight variant. Comparison of FLOPs, peak memory, per-image runtime, and "
          },
          {
            "kind": "same",
            "text": "average accuracy on ImageNet-C (long-horizon "
          },
          {
            "kind": "add",
            "text": "T-CS, ResNet-50) measured on an NVIDIA A100."
          }
        ]
      },
      "textScope": "object"
    }
  ],
  "sections": [
    {
      "title": "Abstract",
      "originalPage": 1,
      "revisedPage": 1,
      "before": "Test-Time Adaptation (TTA) enables pre-trained models to adapt online to distribution shifts during inference, but its self-training dynamics are fragile under temporally correlated streams. Once biased target evidence is used for adaptation, the resulting errors can accumulate over time, distort target representations, and persist unevenly across network layers. Existing methods typically mitigate this problem with confidence filtering or global parameter regularization, but these homogeneous controls overlook two forms of heterogeneity: target samples differ in whether they provide trustworthy adaptation evidence, and layers differ in whether they can safely absorb the induced updates. We propose DCF, a ecoupled ontrol ramework that stabilizes TTA by jointly controlling which samples drive adaptation and which layers retain the resulting update. At the sample level, DCF uses Probe-supported Sample Routing (PSR) to identify probe-supported trusted evidence via entropy and a Fourier stress response, while Routed-away Geometry Repair (RGR) reuses routed-away samples for optimal-transport-based geometry repair instead of discarding them. At the parameter level, the sample-side update is treated as only a candidate update: Curvature-aware Layer Retention (CLR) then performs layer retention, preserving plasticity in layers and suppressing updates in layers that exhibit high source mismatch. This route–adapt–retain design prevents unreliable evidence from dominating adaptation while avoiding indiscriminate rollback of useful plasticity. Extensive experiments on temporally correlated corruptions, natural shifts, and long-horizon streams demonstrate that DCF consistently improves test-time robustness and prevents the late-stage collapse of existing TTA methods. Code is available at https://github.com/ioslide/DCF.",
      "after": "Test-Time Adaptation (TTA) enables pre-trained models to adapt online to distribution shifts during inference, but its self-training dynamics are fragile under temporally correlated streams. Once biased target evidence is used for adaptation, the resulting errors can accumulate over time, distort target representations, and persist unevenly across network layers. Existing methods typically mitigate this problem with confidence filtering or global parameter regularization, but these homogeneous controls overlook two forms of heterogeneity: target samples differ in whether they provide trustworthy adaptation evidence, and layers differ in whether they can safely absorb the induced updates. We propose DCF, a ecoupled ontrol ramework that stabilizes TTA by jointly controlling which samples drive adaptation and which layers retain the resulting update. At the sample level, DCF uses Probe-supported Sample Routing (PSR) to identify probe-supported trusted evidence via entropy and a Fourier stress response, while Routed-away Geometry Repair (RGR) reuses routed-away samples for optimal-transport-based geometry repair instead of discarding them. At the parameter level, the sample-side update is treated as only a candidate update: Curvature-aware Layer Retention (CLR) then performs layer retention, preserving plasticity in layers while suppressing updates in layers that exhibit high source mismatch. This route–adapt–retain design prevents unreliable evidence from dominating adaptation while avoiding indiscriminate rollback of useful plasticity. Extensive experiments on temporally correlated corruptions, natural shifts, and long-horizon streams demonstrate that DCF consistently improves test-time robustness and avoids the late-stage collapse of existing TTA methods. Code is available at https://github.com/ioslide/DCF.",
      "diff": {
        "original": [
          {
            "kind": "same",
            "text": "Test-Time Adaptation (TTA) enables pre-trained models to adapt online to distribution shifts during inference, but its self-training dynamics are fragile under temporally correlated streams. Once biased target evidence is used for adaptation, the resulting errors can accumulate over time, distort target representations, and persist unevenly across network layers. Existing methods typically mitigate this problem with confidence filtering or global parameter regularization, but these homogeneous controls overlook two forms of heterogeneity: target samples differ in whether they provide trustworthy adaptation evidence, and layers differ in whether they can safely absorb the induced updates. We propose DCF, a ecoupled ontrol ramework that stabilizes TTA by jointly controlling which samples drive adaptation and which layers retain the resulting update. At the sample level, DCF uses Probe-supported Sample Routing (PSR) to identify probe-supported trusted evidence via entropy and a Fourier stress response, while Routed-away Geometry Repair (RGR) reuses routed-away samples for optimal-transport-based geometry repair instead of discarding them. At the parameter level, the sample-side update is treated as only a candidate update: Curvature-aware Layer Retention (CLR) then performs layer retention, preserving plasticity in layers "
          },
          {
            "kind": "del",
            "text": "and "
          },
          {
            "kind": "same",
            "text": "suppressing updates in layers that exhibit high source mismatch. This route–adapt–retain design prevents unreliable evidence from dominating adaptation while avoiding indiscriminate rollback of useful plasticity. Extensive experiments on temporally correlated corruptions, natural shifts, and long-horizon streams demonstrate that DCF consistently improves test-time robustness and "
          },
          {
            "kind": "del",
            "text": "prevents "
          },
          {
            "kind": "same",
            "text": "the late-stage collapse of existing TTA methods. Code is available at https://github.com/ioslide/DCF."
          }
        ],
        "revised": [
          {
            "kind": "same",
            "text": "Test-Time Adaptation (TTA) enables pre-trained models to adapt online to distribution shifts during inference, but its self-training dynamics are fragile under temporally correlated streams. Once biased target evidence is used for adaptation, the resulting errors can accumulate over time, distort target representations, and persist unevenly across network layers. Existing methods typically mitigate this problem with confidence filtering or global parameter regularization, but these homogeneous controls overlook two forms of heterogeneity: target samples differ in whether they provide trustworthy adaptation evidence, and layers differ in whether they can safely absorb the induced updates. We propose DCF, a ecoupled ontrol ramework that stabilizes TTA by jointly controlling which samples drive adaptation and which layers retain the resulting update. At the sample level, DCF uses Probe-supported Sample Routing (PSR) to identify probe-supported trusted evidence via entropy and a Fourier stress response, while Routed-away Geometry Repair (RGR) reuses routed-away samples for optimal-transport-based geometry repair instead of discarding them. At the parameter level, the sample-side update is treated as only a candidate update: Curvature-aware Layer Retention (CLR) then performs layer retention, preserving plasticity in layers "
          },
          {
            "kind": "add",
            "text": "while "
          },
          {
            "kind": "same",
            "text": "suppressing updates in layers that exhibit high source mismatch. This route–adapt–retain design prevents unreliable evidence from dominating adaptation while avoiding indiscriminate rollback of useful plasticity. Extensive experiments on temporally correlated corruptions, natural shifts, and long-horizon streams demonstrate that DCF consistently improves test-time robustness and "
          },
          {
            "kind": "add",
            "text": "avoids "
          },
          {
            "kind": "same",
            "text": "the late-stage collapse of existing TTA methods. Code is available at https://github.com/ioslide/DCF."
          }
        ]
      }
    },
    {
      "title": "Introduction",
      "originalPage": 1,
      "revisedPage": 1,
      "before": "Deep neural networks [1, 2] have achieved remarkable performance when training and test data are independently and identically distributed (i.i.d.). However, their reliability often degrades sharply once deployment environments deviate from the training distribution [3, 4, 5, 6, 7]. In practical visual recognition systems, test samples rarely arrive as randomly shuffled instances from a fixed target domain. Instead, they are often observed as temporally correlated streams, where sensor noise, illumination, weather, corruption type, rendering style, and scene statistics evolve gradually over time [8]. Test-time adaptation (TTA) [9, 10, 11, 12] addresses this deployment setting by updating a pre-trained source model online using only unlabeled test samples, making it an appealing paradigm for source-free robustness under distribution shift. Despite its promise, online adaptation introduces a critical instability that is especially severe in temporally correlated streams. Since the model adapts from its own predictions, local mistakes may be repeatedly reinforced by subsequent updates. As adaptation continues, biased target evidence can distort feature representations, alter the model’s sensitivity to future samples, and eventually accumulate into long-horizon performance degradation. As shown in Fig. 1, several TTA methods achieve competitive accuracy in the early stage of adaptation but deteriorate substantially in the late stage. This phenomenon raises a central question: Why does test-time adaptation under temporally correlated shifts become unstable over time? Existing methods [9, 13, 14, 15, 16, 17, 18, 19, 20, 21] typically address this instability through two forms of homogeneous control. The first filters samples according to prediction confidence, implicitly assuming that confident predictions provide reliable pseudo-label supervision. The second regularizes parameter movement, implicitly assuming that adaptation-induced drift can be controlled by a global or nearly uniform stabilization rule. Although these strategies are effective in certain settings, they do not fully explain or resolve the failure pattern observed in long temporally correlated streams. We argue that the instability of temporally correlated TTA is not merely caused by pseudo-label noise or parameter drift in isolation. Instead, it is better understood as a coupled sample–layer feedback process. At the sample level, unreliable target evidence may induce biased self-training updates. At the parameter level, these biased updates are not absorbed uniformly across network depth: some layers may require plasticity to adapt to benign appearance changes, whereas others may suffer from semantic forgetting when pushed away from the source model. Once retained in source-sensitive layers, such drift changes the model’s future predictions and makes subsequent sample selection even more biased. This feedback loop can gradually amplify local adaptation errors into long-horizon collapse. This coupled failure process reveals two overlooked forms of heterogeneity in online TTA. First, target samples differ in whether they provide trustworthy adaptation evidence. A low-entropy prediction is not necessarily reliable: it may be driven by shortcut-sensitive cues and still produce a systematically biased update. Conversely, high-entropy samples may be unsafe for direct pseudo-label supervision but can still encode useful structural information about the evolving target distribution. Second, network layers differ in whether they can safely retain the induced update. Some layers should remain plastic, while others should be constrained toward the source model to prevent irreversible semantic drift. Therefore, stable TTA requires joint control over which samples drive adaptation, how non-trusted samples are reused, and which layers retain the resulting update. We summarize these findings into three observations: O1: Confidence is not reliability. Low-entropy predictions can still be incorrect when they are supported by spurious or shortcut-sensitive cues. Thus, entropy alone is an insufficient criterion for selecting safe adaptation evidence (Fig. 2a). O2: Uncertainty is not useless. Although high-entropy samples are unreliable for hard pseudo-label supervision, they may still contain target-domain structural information. Tracking their centroid entropy deficit shows that routed-away samples can reflect the evolving target geometry. Discarding them may accelerate representation bias and remove useful structural anchors (Fig. 2b). O3: Drift is not uniform across depth. Adaptation-induced drift is strongly layer-dependent, with different magnitudes and even opposite trends across layers. Therefore, a single global stabilization rule is too coarse to prevent long-horizon degradation (Fig. 2c). Motivated by these observations, we propose DCF, a Decoupled Control Framework for stable test-time adaptation in temporally correlated image streams. The key idea is to decouple online adaptation into three control stages: route, adapt, and retain. This design separates three decisions that are often entangled in previous TTA methods: which samples should provide label-like adaptation evidence, how routed-away samples should be reused without hard pseudo-labeling, and where the resulting parameter update should be allowed to persist. By making these decisions separately, DCF prevents unreliable evidence from dominating adaptation while avoiding indiscriminate rollback of useful plasticity. Concretely, DCF follows a route–adapt–retain principle. First, Probe-supported Sample Routing (PSR) routes target samples into trusted and routed-away subsets by combining predictive entropy with a Fourier stress response. This stress response probes whether a confident prediction is supported by adaptation-relevant evidence rather than by stress-inert shortcut cues. Second, Routed-away Geometry Repair (RGR) performs decoupled sample-side adaptation: trusted samples provide conservative consistency signals, whereas routed-away samples are reused to repair target feature geometry through soft optimal-transport-based alignment. Third, Curvature-aware Layer Retention (CLR) treats the sample-side update as only a candidate update and selectively retains it at the layer level. Layers whose curvature profiles remain compatible with the source model are allowed to preserve plasticity, while layers with high source mismatch are pulled back toward the source anchor. Through this route–adapt–retain design, DCF mitigates the coupled sample–layer feedback that causes long-horizon TTA instability. Our contributions are summarized as follows: We provide a systematic analysis of long-horizon failure in temporally correlated TTA and show that instability arises from a coupled sample–layer feedback process rather than from pseudo-label noise or parameter drift alone. We reveal three forms of overlooked heterogeneity in online TTA: confident predictions can be unreliable, routed-away uncertain samples can still preserve target geometry, and adaptation-induced drift is highly layer-dependent. We introduce DCF, a Decoupled Control Framework that implements a route–adapt–retain design by decoupling trusted-evidence routing, routed-away geometry repair, and curvature-aware layer retention. We conduct extensive experiments on synthetic corruptions, natural distribution shifts, label-shifted streams, mixed-severity streams, and long-horizon temporally correlated streams, demonstrating that DCF consistently improves robustness and prevents the late-stage collapse observed in strong TTA baselines.",
      "after": "Deep neural networks [1, 2] excel when training and test data are independently and identically distributed (i.i.d.), yet their reliability degrades sharply once deployment environments deviate from the training distribution [3, 4, 5]. In practical visual recognition systems, test samples rarely arrive as randomly shuffled instances from a fixed target domain. Instead, they typically form temporally correlated streams in which sensor noise, illumination, weather, corruption type, and rendering style evolve gradually over time. Test-Time adaptation (TTA) [6, 7] addresses this setting by updating a pre-trained source model online using only unlabeled test samples, making it an appealing paradigm for source-free robustness under distribution shift. Despite its promise, self-training dynamics in online TTA are inherently fragile under temporal correlation. Since updates rely on the model’s own predictions, local classification errors are easily reinforced. Over extended horizons, biased target evidence distorts internal representations and alters the model’s sensitivity to future samples, potentially causing catastrophic late-stage collapse. As shown in Fig. 1, several TTA methods achieve competitive early-stage accuracy yet deteriorate substantially in the late stage, raising a central question: Why does test-time adaptation under temporally correlated shifts become unstable over time? Existing methods [6, 8, 9, 10, 11, 12, 13, 14, 15, 16] typically mitigate this instability through two forms of homogeneous control: 1) filtering samples by prediction confidence, which implicitly assumes that confident predictions provide reliable pseudo-label supervision, and 2) regularizing parameter movement, which implicitly assumes that adaptation-induced drift can be suppressed by a global or nearly uniform stabilization rule. Although effective in certain settings, these strategies neither fully explain nor resolve the failure pattern observed on long temporally correlated streams. We argue that the instability of temporally correlated TTA is not merely caused by pseudo-label noise or parameter drift in isolation. Instead, it is better understood as a coupled sample–layer feedback process. At the sample level, unreliable target evidence induces biased self-training updates: a low-entropy prediction may not be reliable and may be driven by shortcut-sensitive cues, whereas high-entropy samples, although unsafe for direct pseudo-label supervision, may still encode useful structural information about the evolving target distribution. At the parameter level, such biased updates are not absorbed uniformly across network depth: some layers require plasticity to absorb benign appearance changes, whereas others suffer semantic forgetting once pushed away from the source model. Once retained in source-sensitive layers, the drift alters future predictions and biases subsequent sample selection, gradually amplifying local adaptation errors into long-horizon collapse. This analysis reveals two overlooked forms of heterogeneity—samples differ in whether they provide trustworthy adaptation evidence, and layers differ in whether they can safely retain the induced update—and implies that stable TTA requires joint control over which samples drive adaptation, how non-trusted samples are reused, and which layers retain the resulting update. We summarize these findings into three observations: O1: Confidence is not reliability. Low-entropy predictions can still be incorrect when they are supported by spurious or shortcut-sensitive cues. Thus, entropy alone is an insufficient criterion for selecting safe adaptation evidence (Fig. 2a). O2: Uncertainty is not useless. Although high-entropy samples are unreliable for hard pseudo-label supervision, they may still contain target-domain structural information. Tracking their centroid entropy deficit shows that routed-away samples can reflect the evolving target geometry. Discarding them may accelerate representation bias and remove useful structural anchors (Fig. 2b). O3: Drift is depth-heterogeneous. Adaptation-induced drift is strongly layer-dependent, with different magnitudes and even opposite trends across layers. Therefore, a single global stabilization rule is too coarse to prevent long-horizon degradation (Fig. 2c). Motivated by these insights, we propose DCF, a Decoupled Control Framework for stable TTA in temporally correlated streams that decouples online TTA into three coordinated stages following a Route-Adapt-Retain principle: 1) Route: Probe-supported Sample Routing (PSR) partitions instances into trusted and routed-away sets by joint evaluation of predictive entropy and a Fourier-basis stress response, screening for confident, stress-responsive predictions; 2) Adapt: Decoupled sample-side adaptation is then conducted: trusted instances supply conservative consistency signals, while routed-away instances are repurposed by Routed-away Geometry Repair (RGR) for soft optimal-transport geometry repair rather than discarded; 3) Retain: The sample-side update is then passed to Curvature-aware Layer Retention (CLR), which performs closed-form, curvature-aware layer retention by balancing the candidate parameters and the source prior across layers. This decoupled control mitigates the error-amplifying sample–layer feedback loop, supporting sustained stability without sacrificing adaptive capacity. Our main contributions are summarized as follows: We provide a systematic analysis of long-horizon failure in temporally correlated TTA, attributing instability to a coupled sample–layer feedback process rather than pseudo-label noise or parameter drift alone, and distilling three observations (O1–O3) that expose the heterogeneity of both adaptation evidence and layer-wise drift. We introduce DCF, a Decoupled Control Framework that implements a route–adapt–retain design by decoupling trusted-evidence routing, routed-away geometry repair, and curvature-aware layer retention. We conduct extensive experiments on synthetic corruptions, natural distribution shifts, label-shifted streams, mixed-severity streams, and long-horizon temporally correlated streams, demonstrating that DCF consistently improves robustness and avoids the late-stage collapse observed in strong TTA baselines.",
      "diff": {
        "original": [
          {
            "kind": "same",
            "text": "Deep neural networks [1, 2] "
          },
          {
            "kind": "del",
            "text": "have achieved remarkable performance "
          },
          {
            "kind": "same",
            "text": "when training and test data are independently and identically distributed "
          },
          {
            "kind": "del",
            "text": "(i.i.d.). However, "
          },
          {
            "kind": "same",
            "text": "their reliability "
          },
          {
            "kind": "del",
            "text": "often "
          },
          {
            "kind": "same",
            "text": "degrades sharply once deployment environments deviate from the training distribution [3, 4, "
          },
          {
            "kind": "del",
            "text": "5, 6, 7]. "
          },
          {
            "kind": "same",
            "text": "In practical visual recognition systems, test samples rarely arrive as randomly shuffled instances from a fixed target domain. Instead, they "
          },
          {
            "kind": "del",
            "text": "are often observed as "
          },
          {
            "kind": "same",
            "text": "temporally correlated "
          },
          {
            "kind": "del",
            "text": "streams, where "
          },
          {
            "kind": "same",
            "text": "sensor noise, illumination, weather, corruption type, "
          },
          {
            "kind": "same",
            "text": "rendering "
          },
          {
            "kind": "del",
            "text": "style, and scene statistics "
          },
          {
            "kind": "same",
            "text": "evolve gradually over "
          },
          {
            "kind": "del",
            "text": "time [8]. Test-time "
          },
          {
            "kind": "same",
            "text": "adaptation (TTA) "
          },
          {
            "kind": "del",
            "text": "[9, 10, 11, 12] "
          },
          {
            "kind": "same",
            "text": "addresses this "
          },
          {
            "kind": "del",
            "text": "deployment "
          },
          {
            "kind": "same",
            "text": "setting by updating a pre-trained source model online using only unlabeled test samples, making it an appealing paradigm for source-free robustness under distribution shift. Despite its promise, "
          },
          {
            "kind": "same",
            "text": "online "
          },
          {
            "kind": "del",
            "text": "adaptation introduces a critical instability that is especially severe in temporally correlated streams. "
          },
          {
            "kind": "same",
            "text": "Since "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "del",
            "text": "model adapts from its "
          },
          {
            "kind": "same",
            "text": "own predictions, local "
          },
          {
            "kind": "del",
            "text": "mistakes may be repeatedly reinforced by subsequent updates. As adaptation continues, "
          },
          {
            "kind": "same",
            "text": "biased target evidence "
          },
          {
            "kind": "del",
            "text": "can distort feature representations, alter "
          },
          {
            "kind": "same",
            "text": "the model’s sensitivity to future samples, "
          },
          {
            "kind": "del",
            "text": "and eventually accumulate into long-horizon performance degradation. "
          },
          {
            "kind": "same",
            "text": "As shown in Fig. 1, several TTA methods achieve competitive "
          },
          {
            "kind": "same",
            "text": "accuracy "
          },
          {
            "kind": "del",
            "text": "in the early stage of adaptation but "
          },
          {
            "kind": "same",
            "text": "deteriorate substantially in the late "
          },
          {
            "kind": "del",
            "text": "stage. This phenomenon raises "
          },
          {
            "kind": "same",
            "text": "a central question: Why does test-time adaptation under temporally correlated shifts become unstable over time? Existing methods "
          },
          {
            "kind": "del",
            "text": "[9, "
          },
          {
            "kind": "same",
            "text": "13, 14, 15, "
          },
          {
            "kind": "del",
            "text": "16, 17, 18, 19, 20, 21] "
          },
          {
            "kind": "same",
            "text": "typically "
          },
          {
            "kind": "del",
            "text": "address "
          },
          {
            "kind": "same",
            "text": "this instability through two forms of homogeneous "
          },
          {
            "kind": "del",
            "text": "control. The first filters "
          },
          {
            "kind": "same",
            "text": "samples "
          },
          {
            "kind": "del",
            "text": "according to "
          },
          {
            "kind": "same",
            "text": "prediction confidence, "
          },
          {
            "kind": "same",
            "text": "implicitly "
          },
          {
            "kind": "del",
            "text": "assuming "
          },
          {
            "kind": "same",
            "text": "that confident predictions provide reliable pseudo-label "
          },
          {
            "kind": "del",
            "text": "supervision. The second regularizes "
          },
          {
            "kind": "same",
            "text": "parameter movement, "
          },
          {
            "kind": "same",
            "text": "implicitly "
          },
          {
            "kind": "del",
            "text": "assuming "
          },
          {
            "kind": "same",
            "text": "that adaptation-induced drift can be "
          },
          {
            "kind": "del",
            "text": "controlled "
          },
          {
            "kind": "same",
            "text": "by a global or nearly uniform stabilization rule. Although "
          },
          {
            "kind": "del",
            "text": "these strategies are "
          },
          {
            "kind": "same",
            "text": "effective in certain settings, "
          },
          {
            "kind": "del",
            "text": "they do not "
          },
          {
            "kind": "same",
            "text": "fully explain "
          },
          {
            "kind": "del",
            "text": "or "
          },
          {
            "kind": "same",
            "text": "resolve the failure pattern observed "
          },
          {
            "kind": "del",
            "text": "in "
          },
          {
            "kind": "same",
            "text": "long temporally correlated streams. We argue that the instability of temporally correlated TTA is not merely caused by pseudo-label noise or parameter drift in isolation. Instead, it is better understood as a coupled sample–layer feedback process. At the sample level, unreliable target evidence "
          },
          {
            "kind": "del",
            "text": "may induce "
          },
          {
            "kind": "same",
            "text": "biased self-training "
          },
          {
            "kind": "del",
            "text": "updates. "
          },
          {
            "kind": "same",
            "text": "At the parameter level, "
          },
          {
            "kind": "del",
            "text": "these "
          },
          {
            "kind": "same",
            "text": "biased updates are not absorbed uniformly across network depth: some layers "
          },
          {
            "kind": "del",
            "text": "may "
          },
          {
            "kind": "same",
            "text": "require plasticity to "
          },
          {
            "kind": "del",
            "text": "adapt to "
          },
          {
            "kind": "same",
            "text": "benign appearance changes, whereas others "
          },
          {
            "kind": "del",
            "text": "may "
          },
          {
            "kind": "same",
            "text": "suffer "
          },
          {
            "kind": "del",
            "text": "from "
          },
          {
            "kind": "same",
            "text": "semantic forgetting "
          },
          {
            "kind": "del",
            "text": "when "
          },
          {
            "kind": "same",
            "text": "pushed away from the source model. Once retained in source-sensitive layers, "
          },
          {
            "kind": "del",
            "text": "such "
          },
          {
            "kind": "same",
            "text": "drift "
          },
          {
            "kind": "del",
            "text": "changes the model’s "
          },
          {
            "kind": "same",
            "text": "future predictions and "
          },
          {
            "kind": "del",
            "text": "makes "
          },
          {
            "kind": "same",
            "text": "subsequent sample "
          },
          {
            "kind": "del",
            "text": "selection even more biased. This feedback loop can "
          },
          {
            "kind": "same",
            "text": "gradually "
          },
          {
            "kind": "del",
            "text": "amplify "
          },
          {
            "kind": "same",
            "text": "local adaptation errors into long-horizon collapse. This "
          },
          {
            "kind": "del",
            "text": "coupled failure process "
          },
          {
            "kind": "same",
            "text": "reveals two overlooked forms of "
          },
          {
            "kind": "del",
            "text": "heterogeneity in online TTA. First, target samples "
          },
          {
            "kind": "same",
            "text": "differ in whether they provide trustworthy adaptation "
          },
          {
            "kind": "del",
            "text": "evidence. A low-entropy prediction is not necessarily reliable: it may be driven by shortcut-sensitive cues "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "del",
            "text": "still produce a systematically biased update. Conversely, high-entropy samples may be unsafe for direct pseudo-label supervision but can still encode useful structural information about the evolving target distribution. Second, network "
          },
          {
            "kind": "same",
            "text": "layers differ in whether they can safely retain the induced "
          },
          {
            "kind": "del",
            "text": "update. Some layers should remain plastic, while others should be constrained toward the source model to prevent irreversible semantic drift. Therefore, "
          },
          {
            "kind": "same",
            "text": "stable TTA requires joint control over which samples drive adaptation, how non-trusted samples are reused, and which layers retain the resulting update. We summarize these findings into three observations: O1: Confidence is not reliability. Low-entropy predictions can still be incorrect when they are supported by spurious or shortcut-sensitive cues. Thus, entropy alone is an insufficient criterion for selecting safe adaptation evidence (Fig. 2a). O2: Uncertainty is not useless. Although high-entropy samples are unreliable for hard pseudo-label supervision, they may still contain target-domain structural information. Tracking their centroid entropy deficit shows that routed-away samples can reflect the evolving target geometry. Discarding them may accelerate representation bias and remove useful structural anchors (Fig. 2b). O3: Drift is "
          },
          {
            "kind": "del",
            "text": "not uniform across depth. "
          },
          {
            "kind": "same",
            "text": "Adaptation-induced drift is strongly layer-dependent, with different magnitudes and even opposite trends across layers. Therefore, a single global stabilization rule is too coarse to prevent long-horizon degradation (Fig. 2c). Motivated by these "
          },
          {
            "kind": "del",
            "text": "observations, "
          },
          {
            "kind": "same",
            "text": "we propose DCF, a Decoupled Control Framework for stable "
          },
          {
            "kind": "del",
            "text": "test-time adaptation "
          },
          {
            "kind": "same",
            "text": "in temporally correlated "
          },
          {
            "kind": "del",
            "text": "image streams. The key idea is to decouple "
          },
          {
            "kind": "same",
            "text": "online "
          },
          {
            "kind": "del",
            "text": "adaptation "
          },
          {
            "kind": "same",
            "text": "into three "
          },
          {
            "kind": "del",
            "text": "control stages: route, adapt, and retain. This design separates three decisions that are often entangled in previous TTA methods: which samples should provide label-like adaptation evidence, how routed-away samples should be reused without hard pseudo-labeling, and where the resulting parameter update should be allowed to persist. By making these decisions separately, DCF prevents unreliable evidence from dominating adaptation while avoiding indiscriminate rollback of useful plasticity. Concretely, DCF follows "
          },
          {
            "kind": "same",
            "text": "a "
          },
          {
            "kind": "del",
            "text": "route–adapt–retain principle. First, "
          },
          {
            "kind": "same",
            "text": "Probe-supported Sample Routing (PSR) "
          },
          {
            "kind": "del",
            "text": "routes target samples "
          },
          {
            "kind": "same",
            "text": "into trusted and routed-away "
          },
          {
            "kind": "del",
            "text": "subsets "
          },
          {
            "kind": "same",
            "text": "by "
          },
          {
            "kind": "del",
            "text": "combining "
          },
          {
            "kind": "same",
            "text": "predictive entropy "
          },
          {
            "kind": "del",
            "text": "with "
          },
          {
            "kind": "same",
            "text": "a "
          },
          {
            "kind": "del",
            "text": "Fourier "
          },
          {
            "kind": "same",
            "text": "stress "
          },
          {
            "kind": "del",
            "text": "response. This stress response probes whether a confident prediction "
          },
          {
            "kind": "same",
            "text": "is "
          },
          {
            "kind": "del",
            "text": "supported "
          },
          {
            "kind": "same",
            "text": "by "
          },
          {
            "kind": "del",
            "text": "adaptation-relevant evidence rather than by stress-inert shortcut cues. Second, "
          },
          {
            "kind": "same",
            "text": "Routed-away Geometry Repair (RGR) "
          },
          {
            "kind": "del",
            "text": "performs decoupled "
          },
          {
            "kind": "same",
            "text": "sample-side "
          },
          {
            "kind": "del",
            "text": "adaptation: trusted samples provide conservative consistency signals, whereas routed-away samples are reused "
          },
          {
            "kind": "same",
            "text": "to "
          },
          {
            "kind": "del",
            "text": "repair target feature geometry through soft optimal-transport-based alignment. Third, "
          },
          {
            "kind": "same",
            "text": "Curvature-aware Layer Retention "
          },
          {
            "kind": "del",
            "text": "(CLR) treats "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "del",
            "text": "sample-side update as only a "
          },
          {
            "kind": "same",
            "text": "candidate "
          },
          {
            "kind": "del",
            "text": "update "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "del",
            "text": "selectively retains it at the layer level. Layers whose curvature profiles remain compatible with "
          },
          {
            "kind": "same",
            "text": "the source "
          },
          {
            "kind": "del",
            "text": "model are allowed to preserve plasticity, while layers with high source mismatch are pulled back toward the source anchor. Through this route–adapt–retain design, DCF "
          },
          {
            "kind": "same",
            "text": "mitigates the "
          },
          {
            "kind": "del",
            "text": "coupled "
          },
          {
            "kind": "same",
            "text": "sample–layer feedback "
          },
          {
            "kind": "del",
            "text": "that causes long-horizon TTA instability. "
          },
          {
            "kind": "same",
            "text": "Our "
          },
          {
            "kind": "same",
            "text": "contributions are summarized as follows: We provide a systematic analysis of long-horizon failure in temporally correlated "
          },
          {
            "kind": "del",
            "text": "TTA and show that "
          },
          {
            "kind": "same",
            "text": "instability "
          },
          {
            "kind": "del",
            "text": "arises from "
          },
          {
            "kind": "same",
            "text": "a coupled sample–layer feedback process rather than "
          },
          {
            "kind": "del",
            "text": "from "
          },
          {
            "kind": "same",
            "text": "pseudo-label noise or parameter drift "
          },
          {
            "kind": "del",
            "text": "alone. We reveal "
          },
          {
            "kind": "same",
            "text": "three "
          },
          {
            "kind": "del",
            "text": "forms "
          },
          {
            "kind": "same",
            "text": "of "
          },
          {
            "kind": "del",
            "text": "overlooked heterogeneity in online TTA: confident predictions can be unreliable, routed-away uncertain samples can still preserve target geometry, "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "del",
            "text": "adaptation-induced drift is highly layer-dependent. "
          },
          {
            "kind": "same",
            "text": "We introduce DCF, a Decoupled Control Framework that implements a route–adapt–retain design by decoupling trusted-evidence routing, routed-away geometry repair, and curvature-aware layer retention. We conduct extensive experiments on synthetic corruptions, natural distribution shifts, label-shifted streams, mixed-severity streams, and long-horizon temporally correlated streams, demonstrating that DCF consistently improves robustness and "
          },
          {
            "kind": "del",
            "text": "prevents "
          },
          {
            "kind": "same",
            "text": "the late-stage collapse observed in strong TTA baselines."
          }
        ],
        "revised": [
          {
            "kind": "same",
            "text": "Deep neural networks [1, 2] "
          },
          {
            "kind": "add",
            "text": "excel "
          },
          {
            "kind": "same",
            "text": "when training and test data are independently and identically distributed "
          },
          {
            "kind": "add",
            "text": "(i.i.d.), yet "
          },
          {
            "kind": "same",
            "text": "their reliability "
          },
          {
            "kind": "same",
            "text": "degrades sharply once deployment environments deviate from the training distribution [3, 4, "
          },
          {
            "kind": "add",
            "text": "5]. "
          },
          {
            "kind": "same",
            "text": "In practical visual recognition systems, test samples rarely arrive as randomly shuffled instances from a fixed target domain. Instead, they "
          },
          {
            "kind": "add",
            "text": "typically form "
          },
          {
            "kind": "same",
            "text": "temporally correlated "
          },
          {
            "kind": "add",
            "text": "streams in which "
          },
          {
            "kind": "same",
            "text": "sensor noise, illumination, weather, corruption type, "
          },
          {
            "kind": "add",
            "text": "and "
          },
          {
            "kind": "same",
            "text": "rendering "
          },
          {
            "kind": "add",
            "text": "style "
          },
          {
            "kind": "same",
            "text": "evolve gradually over "
          },
          {
            "kind": "add",
            "text": "time. Test-Time "
          },
          {
            "kind": "same",
            "text": "adaptation (TTA) "
          },
          {
            "kind": "add",
            "text": "[6, 7] "
          },
          {
            "kind": "same",
            "text": "addresses this "
          },
          {
            "kind": "same",
            "text": "setting by updating a pre-trained source model online using only unlabeled test samples, making it an appealing paradigm for source-free robustness under distribution shift. Despite its promise, "
          },
          {
            "kind": "add",
            "text": "self-training dynamics in "
          },
          {
            "kind": "same",
            "text": "online "
          },
          {
            "kind": "add",
            "text": "TTA are inherently fragile under temporal correlation. "
          },
          {
            "kind": "same",
            "text": "Since "
          },
          {
            "kind": "add",
            "text": "updates rely on "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "add",
            "text": "model’s "
          },
          {
            "kind": "same",
            "text": "own predictions, local "
          },
          {
            "kind": "add",
            "text": "classification errors are easily reinforced. Over extended horizons, "
          },
          {
            "kind": "same",
            "text": "biased target evidence "
          },
          {
            "kind": "add",
            "text": "distorts internal representations and alters "
          },
          {
            "kind": "same",
            "text": "the model’s sensitivity to future samples, "
          },
          {
            "kind": "add",
            "text": "potentially causing catastrophic late-stage collapse. "
          },
          {
            "kind": "same",
            "text": "As shown in Fig. 1, several TTA methods achieve competitive "
          },
          {
            "kind": "add",
            "text": "early-stage "
          },
          {
            "kind": "same",
            "text": "accuracy "
          },
          {
            "kind": "add",
            "text": "yet "
          },
          {
            "kind": "same",
            "text": "deteriorate substantially in the late "
          },
          {
            "kind": "add",
            "text": "stage, raising "
          },
          {
            "kind": "same",
            "text": "a central question: Why does test-time adaptation under temporally correlated shifts become unstable over time? Existing methods "
          },
          {
            "kind": "add",
            "text": "[6, 8, 9, 10, 11, 12, "
          },
          {
            "kind": "same",
            "text": "13, 14, 15, "
          },
          {
            "kind": "add",
            "text": "16] "
          },
          {
            "kind": "same",
            "text": "typically "
          },
          {
            "kind": "add",
            "text": "mitigate "
          },
          {
            "kind": "same",
            "text": "this instability through two forms of homogeneous "
          },
          {
            "kind": "add",
            "text": "control: 1) filtering "
          },
          {
            "kind": "same",
            "text": "samples "
          },
          {
            "kind": "add",
            "text": "by "
          },
          {
            "kind": "same",
            "text": "prediction confidence, "
          },
          {
            "kind": "add",
            "text": "which "
          },
          {
            "kind": "same",
            "text": "implicitly "
          },
          {
            "kind": "add",
            "text": "assumes "
          },
          {
            "kind": "same",
            "text": "that confident predictions provide reliable pseudo-label "
          },
          {
            "kind": "add",
            "text": "supervision, and 2) regularizing "
          },
          {
            "kind": "same",
            "text": "parameter movement, "
          },
          {
            "kind": "add",
            "text": "which "
          },
          {
            "kind": "same",
            "text": "implicitly "
          },
          {
            "kind": "add",
            "text": "assumes "
          },
          {
            "kind": "same",
            "text": "that adaptation-induced drift can be "
          },
          {
            "kind": "add",
            "text": "suppressed "
          },
          {
            "kind": "same",
            "text": "by a global or nearly uniform stabilization rule. Although "
          },
          {
            "kind": "same",
            "text": "effective in certain settings, "
          },
          {
            "kind": "add",
            "text": "these strategies neither "
          },
          {
            "kind": "same",
            "text": "fully explain "
          },
          {
            "kind": "add",
            "text": "nor "
          },
          {
            "kind": "same",
            "text": "resolve the failure pattern observed "
          },
          {
            "kind": "add",
            "text": "on "
          },
          {
            "kind": "same",
            "text": "long temporally correlated streams. We argue that the instability of temporally correlated TTA is not merely caused by pseudo-label noise or parameter drift in isolation. Instead, it is better understood as a coupled sample–layer feedback process. At the sample level, unreliable target evidence "
          },
          {
            "kind": "add",
            "text": "induces "
          },
          {
            "kind": "same",
            "text": "biased self-training "
          },
          {
            "kind": "add",
            "text": "updates: a low-entropy prediction may not be reliable and may be driven by shortcut-sensitive cues, whereas high-entropy samples, although unsafe for direct pseudo-label supervision, may still encode useful structural information about the evolving target distribution. "
          },
          {
            "kind": "same",
            "text": "At the parameter level, "
          },
          {
            "kind": "add",
            "text": "such "
          },
          {
            "kind": "same",
            "text": "biased updates are not absorbed uniformly across network depth: some layers "
          },
          {
            "kind": "same",
            "text": "require plasticity to "
          },
          {
            "kind": "add",
            "text": "absorb "
          },
          {
            "kind": "same",
            "text": "benign appearance changes, whereas others "
          },
          {
            "kind": "same",
            "text": "suffer "
          },
          {
            "kind": "same",
            "text": "semantic forgetting "
          },
          {
            "kind": "add",
            "text": "once "
          },
          {
            "kind": "same",
            "text": "pushed away from the source model. Once retained in source-sensitive layers, "
          },
          {
            "kind": "add",
            "text": "the "
          },
          {
            "kind": "same",
            "text": "drift "
          },
          {
            "kind": "add",
            "text": "alters "
          },
          {
            "kind": "same",
            "text": "future predictions and "
          },
          {
            "kind": "add",
            "text": "biases "
          },
          {
            "kind": "same",
            "text": "subsequent sample "
          },
          {
            "kind": "add",
            "text": "selection, "
          },
          {
            "kind": "same",
            "text": "gradually "
          },
          {
            "kind": "add",
            "text": "amplifying "
          },
          {
            "kind": "same",
            "text": "local adaptation errors into long-horizon collapse. This "
          },
          {
            "kind": "add",
            "text": "analysis "
          },
          {
            "kind": "same",
            "text": "reveals two overlooked forms of "
          },
          {
            "kind": "add",
            "text": "heterogeneity—samples "
          },
          {
            "kind": "same",
            "text": "differ in whether they provide trustworthy adaptation "
          },
          {
            "kind": "add",
            "text": "evidence, "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "same",
            "text": "layers differ in whether they can safely retain the induced "
          },
          {
            "kind": "add",
            "text": "update—and implies that "
          },
          {
            "kind": "same",
            "text": "stable TTA requires joint control over which samples drive adaptation, how non-trusted samples are reused, and which layers retain the resulting update. We summarize these findings into three observations: O1: Confidence is not reliability. Low-entropy predictions can still be incorrect when they are supported by spurious or shortcut-sensitive cues. Thus, entropy alone is an insufficient criterion for selecting safe adaptation evidence (Fig. 2a). O2: Uncertainty is not useless. Although high-entropy samples are unreliable for hard pseudo-label supervision, they may still contain target-domain structural information. Tracking their centroid entropy deficit shows that routed-away samples can reflect the evolving target geometry. Discarding them may accelerate representation bias and remove useful structural anchors (Fig. 2b). O3: Drift is "
          },
          {
            "kind": "add",
            "text": "depth-heterogeneous. "
          },
          {
            "kind": "same",
            "text": "Adaptation-induced drift is strongly layer-dependent, with different magnitudes and even opposite trends across layers. Therefore, a single global stabilization rule is too coarse to prevent long-horizon degradation (Fig. 2c). Motivated by these "
          },
          {
            "kind": "add",
            "text": "insights, "
          },
          {
            "kind": "same",
            "text": "we propose DCF, a Decoupled Control Framework for stable "
          },
          {
            "kind": "add",
            "text": "TTA "
          },
          {
            "kind": "same",
            "text": "in temporally correlated "
          },
          {
            "kind": "add",
            "text": "streams that decouples "
          },
          {
            "kind": "same",
            "text": "online "
          },
          {
            "kind": "add",
            "text": "TTA "
          },
          {
            "kind": "same",
            "text": "into three "
          },
          {
            "kind": "add",
            "text": "coordinated stages following "
          },
          {
            "kind": "same",
            "text": "a "
          },
          {
            "kind": "add",
            "text": "Route-Adapt-Retain principle: 1) Route: "
          },
          {
            "kind": "same",
            "text": "Probe-supported Sample Routing (PSR) "
          },
          {
            "kind": "add",
            "text": "partitions instances "
          },
          {
            "kind": "same",
            "text": "into trusted and routed-away "
          },
          {
            "kind": "add",
            "text": "sets "
          },
          {
            "kind": "same",
            "text": "by "
          },
          {
            "kind": "add",
            "text": "joint evaluation of "
          },
          {
            "kind": "same",
            "text": "predictive entropy "
          },
          {
            "kind": "add",
            "text": "and "
          },
          {
            "kind": "same",
            "text": "a "
          },
          {
            "kind": "add",
            "text": "Fourier-basis "
          },
          {
            "kind": "same",
            "text": "stress "
          },
          {
            "kind": "add",
            "text": "response, screening for confident, stress-responsive predictions; 2) Adapt: Decoupled sample-side adaptation "
          },
          {
            "kind": "same",
            "text": "is "
          },
          {
            "kind": "add",
            "text": "then conducted: trusted instances supply conservative consistency signals, while routed-away instances are repurposed "
          },
          {
            "kind": "same",
            "text": "by "
          },
          {
            "kind": "same",
            "text": "Routed-away Geometry Repair (RGR) "
          },
          {
            "kind": "add",
            "text": "for soft optimal-transport geometry repair rather than discarded; 3) Retain: The "
          },
          {
            "kind": "same",
            "text": "sample-side "
          },
          {
            "kind": "add",
            "text": "update is then passed "
          },
          {
            "kind": "same",
            "text": "to "
          },
          {
            "kind": "same",
            "text": "Curvature-aware Layer Retention "
          },
          {
            "kind": "add",
            "text": "(CLR), which performs closed-form, curvature-aware layer retention by balancing "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "same",
            "text": "candidate "
          },
          {
            "kind": "add",
            "text": "parameters "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "same",
            "text": "the source "
          },
          {
            "kind": "add",
            "text": "prior across layers. This decoupled control "
          },
          {
            "kind": "same",
            "text": "mitigates the "
          },
          {
            "kind": "add",
            "text": "error-amplifying "
          },
          {
            "kind": "same",
            "text": "sample–layer feedback "
          },
          {
            "kind": "add",
            "text": "loop, supporting sustained stability without sacrificing adaptive capacity. "
          },
          {
            "kind": "same",
            "text": "Our "
          },
          {
            "kind": "add",
            "text": "main "
          },
          {
            "kind": "same",
            "text": "contributions are summarized as follows: We provide a systematic analysis of long-horizon failure in temporally correlated "
          },
          {
            "kind": "add",
            "text": "TTA, attributing "
          },
          {
            "kind": "same",
            "text": "instability "
          },
          {
            "kind": "add",
            "text": "to "
          },
          {
            "kind": "same",
            "text": "a coupled sample–layer feedback process rather than "
          },
          {
            "kind": "same",
            "text": "pseudo-label noise or parameter drift "
          },
          {
            "kind": "add",
            "text": "alone, and distilling "
          },
          {
            "kind": "same",
            "text": "three "
          },
          {
            "kind": "add",
            "text": "observations (O1–O3) that expose the heterogeneity "
          },
          {
            "kind": "same",
            "text": "of "
          },
          {
            "kind": "add",
            "text": "both adaptation evidence "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "add",
            "text": "layer-wise drift. "
          },
          {
            "kind": "same",
            "text": "We introduce DCF, a Decoupled Control Framework that implements a route–adapt–retain design by decoupling trusted-evidence routing, routed-away geometry repair, and curvature-aware layer retention. We conduct extensive experiments on synthetic corruptions, natural distribution shifts, label-shifted streams, mixed-severity streams, and long-horizon temporally correlated streams, demonstrating that DCF consistently improves robustness and "
          },
          {
            "kind": "add",
            "text": "avoids "
          },
          {
            "kind": "same",
            "text": "the late-stage collapse observed in strong TTA baselines."
          }
        ]
      }
    },
    {
      "title": "Related work",
      "originalPage": 3,
      "revisedPage": 3,
      "before": "We relate DCF to existing adaptation methods without and with target data, and further discuss sample reliability estimation, target-geometry preservation, and parameter stabilization for online test-time adaptation. Adaptation without Target Data. Mitigating distribution shifts has been widely studied at training time, including domain generalization (DG) [22], robust representation learning [23], and data augmentation strategies [24]. These methods aim to improve out-of-distribution robustness by learning source models that generalize to unseen test environments. However, deployment shifts are difficult to enumerate in advance, and training-time strategies usually require additional source-side objectives, augmentations, or training costs. In contrast, test-time adaptation updates the model directly from unlabeled target samples during deployment, making it attractive for source-free robustness under evolving test streams. Adaptation with Target Data. Methods that exploit target data include offline unsupervised domain adaptation and online test-time adaptation. ⟪\\bullet⟫ Unsupervised domain adaptation (UDA). Conventional UDA assumes access to labeled source data and unlabeled target data during adaptation, and reduces domain discrepancy through feature or moment alignment [25, 26, 27, 28], adversarial learning [29, 30], pseudo-label/self-training strategies [31, 32, 33], or optimal transport [4]. Source-free UDA further removes source data during adaptation and often relies on information maximization [5], pseudo-label refinement [34], or classifier-discrepancy/self-training objectives [35, 32]. Although effective when the target domain is available in advance, these methods usually adapt offline over the whole target set and often require multiple training epochs. Therefore, they are less suitable for online test streams, where samples arrive sequentially and the target distribution may evolve over time. ⟪\\bullet⟫ Test-time adaptation (TTA). TTA adapts a pre-trained model during inference using only unlabeled test samples. Some methods modify source training by introducing auxiliary objectives, as in test-time training [10]. Fully test-time adaptation does not alter source training and can be directly applied to a pre-trained model. Representative methods update batch-normalization statistics [36], minimize prediction entropy [9, 13], enforce consistency regularization [17], or use memory and teacher models for online adaptation [17, 18]. Recent studies further show that online TTA can be unstable under realistic streams, especially with temporal correlation, small batches, mixed domains, or imbalanced label distributions. NOTE [37] highlights the effect of temporal correlation, while continual and practical TTA methods improve robustness through teacher models, memory banks, reset strategies, normalization correction, or prior correction [17, 18, 20, 15, 16, 38, 39]. These methods significantly improve online robustness, but most of them still stabilize adaptation through relatively homogeneous sample filtering or global update control. In this paper, we mainly focus on fully test-time adaptation and study its long-horizon instability from a coupled sample–layer perspective. Reliability- and Stability-aware TTA. A central challenge in online TTA is to decide which unlabeled samples should drive adaptation and how the induced parameter updates should be stabilized over time. Existing methods often address the sample side by estimating reliability from confidence or entropy, assuming that low-entropy predictions provide trustworthy pseudo-label supervision. For example, EATA [13] and SAR [14] filter redundant or unreliable samples through entropy-based criteria, DeYO [40] introduces shape-aware sample selection beyond entropy, and ETAGE [21] further incorporates gradient-norm information to detect unstable samples. However, confidence does not necessarily imply reliability under temporally correlated shifts: a confident prediction may still be supported by shortcut-sensitive cues, and repeatedly adapting to such samples can reinforce confirmation bias. Another line of work stabilizes TTA from the parameter side. CoTTA [17] uses stochastic restoration to mitigate catastrophic drift, RoTTA [18] combines robust memory sampling with teacher-student updates, and LAW [41] studies learning-rate-based mechanisms for sustained adaptation. These methods reduce long-term drift, but their stabilization rules are usually global or nearly uniform across the network, overlooking that different layers may respond to distribution shifts in substantially different ways [42]. Overall, existing TTA methods mainly stabilize online adaptation through sample filtering or global update control. In contrast, DCF attributes long-horizon instability to coupled sample–layer feedback, and decouples sample routing, routed-away geometry repair, and layer-wise update retention.",
      "after": "We relate DCF to existing adaptation methods without and with target data, and further discuss sample reliability, target-geometry preservation, and parameter stabilization for TTA. Adaptation without Target Data. Mitigating distribution shifts has been widely studied at training time, including domain generalization (DG) [17] and robust representation learning [18]. Beyond visual tasks, uncertainty-aware modeling has also been explored to handle evolving environmental variations in non-stationary sensor streams [19, 20, 21]. Nonetheless, such source-side designs cannot exhaustively anticipate unpredictable test shifts. In contrast, TTA directly exploits unlabeled samples observed during deployment, enabling online adaptation to evolving distributions. Adaptation with Target Data. Target-data methods span offline unsupervised domain adaptation and online TTA. ⟪\\bullet⟫ Unsupervised domain adaptation (UDA). Conventional UDA accesses labeled source and unlabeled target data to reduce cross-domain discrepancies via moment alignment [22], adversarial learning [23], pseudo-label refinement [24], or optimal transport [3]. Source-free variants recover source structure or progressively refine target representations [25]. Recent studies such as VDM-DA [4], SFOCDA [5], and TAMAN [26] further explore virtual source construction, open compound adaptation, and video-oriented alignment. However, these methods assume offline or repeatedly accessible target data, whereas TTA must adapt and predict online as test samples arrive. ⟪\\bullet⟫ Test-Time adaptation (TTA). TTA adapts a pre-trained model during inference using only unlabeled test samples. Representative approaches update normalization statistics [27], minimize prediction entropy [6, 8], or exploit teacher models, memory mechanisms, and reset strategies for continual adaptation [12, 13, 28]. Test-time training [7] introduces auxiliary source-stage objectives. Recent studies extend TTA to diverse visual settings: MetaBN [29] leverages meta-trained normalization for adverse-weather video restoration, whereas CMDA [30] pairs model adaptation with diffusion-based data adaptation. In contrast, DCF requires neither meta-training nor generative translation, focusing on controlling self-training error accumulation in correlated streams. Other approaches explore sample bias [31], normalization or prior correction, and continual dynamics [32, 9, 15, 10, 11, 33, 34]. Despite these advances, self-training remains vulnerable to temporally correlated and label-imbalanced streams, where local adaptation errors can accumulate across successive updates. Reliability- and Stability-aware TTA. A central challenge in online TTA is governing how test samples drive adaptation and how the resulting updates are maintained. At the sample level, EATA [8] and SAR [9] filter redundant or unreliable samples via entropy criteria, while DeYO [35] and ETAGE [16] incorporate shape- or gradient-sensitive cues. Among closely related studies, QED [31] identifies biased instances via question-type entropy and negative perturbations, while MS-TTA [36] performs training-free mean-shift refinement over test features. CMDA [30] further couples model adaptation with diffusion-based data adaptation. In contrast, DCF assigns heterogeneous roles to target samples: trusted instances provide consistency supervision, whereas routed-away instances are retained for soft optimal-transport geometry repair. At the parameter level, MetaBN [29] reshapes updates via meta-training, while CoTTA [12], RoTTA [13], LAW [37], and GOLD [38] stabilize adaptation through weight restoration, teacher–student memory, layer-wise learning-rate modulation, or constrained update spaces. Unlike these approaches, DCF treats sample-side updates strictly as candidates and selectively retains them across depth according to layer-wise source mismatch. Overall, existing TTA methods largely treat sample-side adaptation and parameter-side stabilization independently. DCF instead models their interaction as a coupled sample–layer feedback process, jointly determining which samples drive adaptation, how routed-away samples preserve target structure, and which layers retain the resulting updates.",
      "diff": {
        "original": [
          {
            "kind": "same",
            "text": "We relate DCF to existing adaptation methods without and with target data, and further discuss sample "
          },
          {
            "kind": "del",
            "text": "reliability estimation, "
          },
          {
            "kind": "same",
            "text": "target-geometry preservation, and parameter stabilization for "
          },
          {
            "kind": "del",
            "text": "online test-time adaptation. "
          },
          {
            "kind": "same",
            "text": "Adaptation without Target Data. Mitigating distribution shifts has been widely studied at training time, including domain generalization (DG) "
          },
          {
            "kind": "del",
            "text": "[22], "
          },
          {
            "kind": "same",
            "text": "robust representation learning "
          },
          {
            "kind": "del",
            "text": "[23], and data augmentation strategies [24]. These methods aim "
          },
          {
            "kind": "same",
            "text": "to "
          },
          {
            "kind": "del",
            "text": "improve out-of-distribution robustness by learning source models that generalize to unseen "
          },
          {
            "kind": "same",
            "text": "test "
          },
          {
            "kind": "del",
            "text": "environments. However, deployment shifts are difficult to enumerate in advance, and training-time strategies usually require additional source-side objectives, augmentations, or training costs. "
          },
          {
            "kind": "same",
            "text": "In contrast, "
          },
          {
            "kind": "del",
            "text": "test-time adaptation updates the model "
          },
          {
            "kind": "same",
            "text": "directly "
          },
          {
            "kind": "del",
            "text": "from "
          },
          {
            "kind": "same",
            "text": "unlabeled "
          },
          {
            "kind": "del",
            "text": "target "
          },
          {
            "kind": "same",
            "text": "samples "
          },
          {
            "kind": "same",
            "text": "during deployment, "
          },
          {
            "kind": "del",
            "text": "making it attractive for source-free robustness under "
          },
          {
            "kind": "same",
            "text": "evolving "
          },
          {
            "kind": "del",
            "text": "test streams. "
          },
          {
            "kind": "same",
            "text": "Adaptation with Target Data. "
          },
          {
            "kind": "del",
            "text": "Methods that exploit target data include "
          },
          {
            "kind": "same",
            "text": "offline unsupervised domain adaptation and online "
          },
          {
            "kind": "del",
            "text": "test-time adaptation. "
          },
          {
            "kind": "same",
            "text": "⟪\\bullet⟫ Unsupervised domain adaptation (UDA). Conventional UDA "
          },
          {
            "kind": "del",
            "text": "assumes access to "
          },
          {
            "kind": "same",
            "text": "labeled source "
          },
          {
            "kind": "del",
            "text": "data "
          },
          {
            "kind": "same",
            "text": "and unlabeled target data "
          },
          {
            "kind": "del",
            "text": "during adaptation, and reduces domain discrepancy through feature or "
          },
          {
            "kind": "same",
            "text": "moment alignment "
          },
          {
            "kind": "del",
            "text": "[25, 26, 27, 28], "
          },
          {
            "kind": "same",
            "text": "adversarial learning "
          },
          {
            "kind": "del",
            "text": "[29, 30], pseudo-label/self-training strategies [31, 32, 33], "
          },
          {
            "kind": "same",
            "text": "or optimal transport "
          },
          {
            "kind": "del",
            "text": "[4]. "
          },
          {
            "kind": "same",
            "text": "Source-free "
          },
          {
            "kind": "del",
            "text": "UDA "
          },
          {
            "kind": "same",
            "text": "further "
          },
          {
            "kind": "del",
            "text": "removes "
          },
          {
            "kind": "same",
            "text": "source "
          },
          {
            "kind": "del",
            "text": "data during adaptation "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "del",
            "text": "often relies on information maximization [5], pseudo-label refinement [34], or classifier-discrepancy/self-training objectives [35, 32]. Although effective when the target domain is available in advance, "
          },
          {
            "kind": "same",
            "text": "these methods "
          },
          {
            "kind": "del",
            "text": "usually "
          },
          {
            "kind": "same",
            "text": "adapt "
          },
          {
            "kind": "del",
            "text": "offline over the whole target set "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "del",
            "text": "often require multiple training epochs. Therefore, they are less suitable for "
          },
          {
            "kind": "same",
            "text": "online "
          },
          {
            "kind": "same",
            "text": "test "
          },
          {
            "kind": "del",
            "text": "streams, where "
          },
          {
            "kind": "same",
            "text": "samples "
          },
          {
            "kind": "del",
            "text": "arrive sequentially and the target distribution may evolve over time. "
          },
          {
            "kind": "same",
            "text": "⟪\\bullet⟫ "
          },
          {
            "kind": "del",
            "text": "Test-time "
          },
          {
            "kind": "same",
            "text": "adaptation (TTA). TTA adapts a pre-trained model during inference using only unlabeled test samples. "
          },
          {
            "kind": "del",
            "text": "Some methods modify source training by introducing auxiliary objectives, as in test-time training [10]. Fully test-time adaptation does not alter source training and can be directly applied to a pre-trained model. "
          },
          {
            "kind": "same",
            "text": "Representative "
          },
          {
            "kind": "del",
            "text": "methods "
          },
          {
            "kind": "same",
            "text": "update "
          },
          {
            "kind": "del",
            "text": "batch-normalization "
          },
          {
            "kind": "same",
            "text": "statistics "
          },
          {
            "kind": "del",
            "text": "[36], "
          },
          {
            "kind": "same",
            "text": "minimize prediction entropy "
          },
          {
            "kind": "del",
            "text": "[9, 13], enforce consistency regularization [17], "
          },
          {
            "kind": "same",
            "text": "or "
          },
          {
            "kind": "del",
            "text": "use memory and teacher models for online adaptation [17, 18]. Recent studies further show that online TTA can be unstable under realistic streams, especially with temporal correlation, small batches, mixed domains, or imbalanced label distributions. NOTE [37] highlights the effect of temporal correlation, while continual and practical TTA methods improve robustness through "
          },
          {
            "kind": "same",
            "text": "teacher models, memory "
          },
          {
            "kind": "del",
            "text": "banks, "
          },
          {
            "kind": "same",
            "text": "reset "
          },
          {
            "kind": "del",
            "text": "strategies, "
          },
          {
            "kind": "same",
            "text": "normalization "
          },
          {
            "kind": "del",
            "text": "correction, "
          },
          {
            "kind": "same",
            "text": "or prior "
          },
          {
            "kind": "del",
            "text": "correction [17, 18, 20, "
          },
          {
            "kind": "same",
            "text": "15, "
          },
          {
            "kind": "del",
            "text": "16, 38, 39]. These methods significantly improve online robustness, but most of them still stabilize "
          },
          {
            "kind": "same",
            "text": "adaptation "
          },
          {
            "kind": "del",
            "text": "through relatively homogeneous sample filtering or global update control. In this paper, we mainly focus on fully test-time adaptation and study its long-horizon instability from a coupled sample–layer perspective. "
          },
          {
            "kind": "same",
            "text": "Reliability- and Stability-aware TTA. A central challenge in online TTA is "
          },
          {
            "kind": "del",
            "text": "to decide which unlabeled "
          },
          {
            "kind": "same",
            "text": "samples "
          },
          {
            "kind": "del",
            "text": "should "
          },
          {
            "kind": "same",
            "text": "drive adaptation and how the "
          },
          {
            "kind": "del",
            "text": "induced parameter "
          },
          {
            "kind": "same",
            "text": "updates "
          },
          {
            "kind": "del",
            "text": "should be stabilized over time. Existing methods often address "
          },
          {
            "kind": "same",
            "text": "the sample "
          },
          {
            "kind": "del",
            "text": "side by estimating reliability from confidence or entropy, assuming that low-entropy predictions provide trustworthy pseudo-label supervision. For example, "
          },
          {
            "kind": "same",
            "text": "EATA "
          },
          {
            "kind": "del",
            "text": "[13] "
          },
          {
            "kind": "same",
            "text": "and SAR "
          },
          {
            "kind": "del",
            "text": "[14] "
          },
          {
            "kind": "same",
            "text": "filter redundant or unreliable samples "
          },
          {
            "kind": "del",
            "text": "through entropy-based "
          },
          {
            "kind": "same",
            "text": "criteria, "
          },
          {
            "kind": "same",
            "text": "DeYO "
          },
          {
            "kind": "del",
            "text": "[40] introduces shape-aware sample selection beyond entropy, "
          },
          {
            "kind": "same",
            "text": "and ETAGE "
          },
          {
            "kind": "del",
            "text": "[21] "
          },
          {
            "kind": "same",
            "text": "further "
          },
          {
            "kind": "del",
            "text": "incorporates gradient-norm information "
          },
          {
            "kind": "same",
            "text": "to "
          },
          {
            "kind": "del",
            "text": "detect unstable samples. However, confidence does not necessarily imply reliability under temporally correlated shifts: a confident prediction may still be supported by shortcut-sensitive cues, and repeatedly adapting to such samples can reinforce confirmation bias. Another line of work stabilizes TTA from "
          },
          {
            "kind": "same",
            "text": "the parameter "
          },
          {
            "kind": "del",
            "text": "side. "
          },
          {
            "kind": "same",
            "text": "CoTTA "
          },
          {
            "kind": "del",
            "text": "[17] uses stochastic restoration "
          },
          {
            "kind": "same",
            "text": "to "
          },
          {
            "kind": "del",
            "text": "mitigate catastrophic drift, RoTTA [18] combines robust memory sampling with teacher-student updates, and LAW [41] studies learning-rate-based mechanisms for sustained adaptation. These methods reduce long-term drift, but their stabilization rules are usually global or nearly uniform across the network, overlooking that different layers may respond to distribution shifts in substantially different ways [42]. "
          },
          {
            "kind": "same",
            "text": "Overall, existing TTA methods "
          },
          {
            "kind": "del",
            "text": "mainly stabilize online "
          },
          {
            "kind": "same",
            "text": "adaptation "
          },
          {
            "kind": "del",
            "text": "through sample filtering or global update control. In contrast, "
          },
          {
            "kind": "same",
            "text": "DCF "
          },
          {
            "kind": "del",
            "text": "attributes long-horizon instability to "
          },
          {
            "kind": "same",
            "text": "coupled sample–layer "
          },
          {
            "kind": "del",
            "text": "feedback, "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "del",
            "text": "decouples sample routing, routed-away geometry repair, and layer-wise update retention."
          }
        ],
        "revised": [
          {
            "kind": "same",
            "text": "We relate DCF to existing adaptation methods without and with target data, and further discuss sample "
          },
          {
            "kind": "add",
            "text": "reliability, "
          },
          {
            "kind": "same",
            "text": "target-geometry preservation, and parameter stabilization for "
          },
          {
            "kind": "add",
            "text": "TTA. "
          },
          {
            "kind": "same",
            "text": "Adaptation without Target Data. Mitigating distribution shifts has been widely studied at training time, including domain generalization (DG) "
          },
          {
            "kind": "add",
            "text": "[17] and "
          },
          {
            "kind": "same",
            "text": "robust representation learning "
          },
          {
            "kind": "add",
            "text": "[18]. Beyond visual tasks, uncertainty-aware modeling has also been explored "
          },
          {
            "kind": "same",
            "text": "to "
          },
          {
            "kind": "add",
            "text": "handle evolving environmental variations in non-stationary sensor streams [19, 20, 21]. Nonetheless, such source-side designs cannot exhaustively anticipate unpredictable "
          },
          {
            "kind": "same",
            "text": "test "
          },
          {
            "kind": "add",
            "text": "shifts. "
          },
          {
            "kind": "same",
            "text": "In contrast, "
          },
          {
            "kind": "add",
            "text": "TTA "
          },
          {
            "kind": "same",
            "text": "directly "
          },
          {
            "kind": "add",
            "text": "exploits "
          },
          {
            "kind": "same",
            "text": "unlabeled "
          },
          {
            "kind": "same",
            "text": "samples "
          },
          {
            "kind": "add",
            "text": "observed "
          },
          {
            "kind": "same",
            "text": "during deployment, "
          },
          {
            "kind": "add",
            "text": "enabling online adaptation to "
          },
          {
            "kind": "same",
            "text": "evolving "
          },
          {
            "kind": "add",
            "text": "distributions. "
          },
          {
            "kind": "same",
            "text": "Adaptation with Target Data. "
          },
          {
            "kind": "add",
            "text": "Target-data methods span "
          },
          {
            "kind": "same",
            "text": "offline unsupervised domain adaptation and online "
          },
          {
            "kind": "add",
            "text": "TTA. "
          },
          {
            "kind": "same",
            "text": "⟪\\bullet⟫ Unsupervised domain adaptation (UDA). Conventional UDA "
          },
          {
            "kind": "add",
            "text": "accesses "
          },
          {
            "kind": "same",
            "text": "labeled source "
          },
          {
            "kind": "same",
            "text": "and unlabeled target data "
          },
          {
            "kind": "add",
            "text": "to reduce cross-domain discrepancies via "
          },
          {
            "kind": "same",
            "text": "moment alignment "
          },
          {
            "kind": "add",
            "text": "[22], "
          },
          {
            "kind": "same",
            "text": "adversarial learning "
          },
          {
            "kind": "add",
            "text": "[23], pseudo-label refinement [24], "
          },
          {
            "kind": "same",
            "text": "or optimal transport "
          },
          {
            "kind": "add",
            "text": "[3]. "
          },
          {
            "kind": "same",
            "text": "Source-free "
          },
          {
            "kind": "add",
            "text": "variants recover source structure or progressively refine target representations [25]. Recent studies such as VDM-DA [4], SFOCDA [5], and TAMAN [26] "
          },
          {
            "kind": "same",
            "text": "further "
          },
          {
            "kind": "add",
            "text": "explore virtual "
          },
          {
            "kind": "same",
            "text": "source "
          },
          {
            "kind": "add",
            "text": "construction, open compound adaptation, "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "add",
            "text": "video-oriented alignment. However, "
          },
          {
            "kind": "same",
            "text": "these methods "
          },
          {
            "kind": "add",
            "text": "assume offline or repeatedly accessible target data, whereas TTA must "
          },
          {
            "kind": "same",
            "text": "adapt "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "add",
            "text": "predict "
          },
          {
            "kind": "same",
            "text": "online "
          },
          {
            "kind": "add",
            "text": "as "
          },
          {
            "kind": "same",
            "text": "test "
          },
          {
            "kind": "same",
            "text": "samples "
          },
          {
            "kind": "add",
            "text": "arrive. "
          },
          {
            "kind": "same",
            "text": "⟪\\bullet⟫ "
          },
          {
            "kind": "add",
            "text": "Test-Time "
          },
          {
            "kind": "same",
            "text": "adaptation (TTA). TTA adapts a pre-trained model during inference using only unlabeled test samples. "
          },
          {
            "kind": "same",
            "text": "Representative "
          },
          {
            "kind": "add",
            "text": "approaches "
          },
          {
            "kind": "same",
            "text": "update "
          },
          {
            "kind": "add",
            "text": "normalization "
          },
          {
            "kind": "same",
            "text": "statistics "
          },
          {
            "kind": "add",
            "text": "[27], "
          },
          {
            "kind": "same",
            "text": "minimize prediction entropy "
          },
          {
            "kind": "add",
            "text": "[6, 8], "
          },
          {
            "kind": "same",
            "text": "or "
          },
          {
            "kind": "add",
            "text": "exploit "
          },
          {
            "kind": "same",
            "text": "teacher models, memory "
          },
          {
            "kind": "add",
            "text": "mechanisms, and "
          },
          {
            "kind": "same",
            "text": "reset "
          },
          {
            "kind": "add",
            "text": "strategies for continual adaptation [12, 13, 28]. Test-time training [7] introduces auxiliary source-stage objectives. Recent studies extend TTA to diverse visual settings: MetaBN [29] leverages meta-trained "
          },
          {
            "kind": "same",
            "text": "normalization "
          },
          {
            "kind": "add",
            "text": "for adverse-weather video restoration, whereas CMDA [30] pairs model adaptation with diffusion-based data adaptation. In contrast, DCF requires neither meta-training nor generative translation, focusing on controlling self-training error accumulation in correlated streams. Other approaches explore sample bias [31], normalization "
          },
          {
            "kind": "same",
            "text": "or prior "
          },
          {
            "kind": "add",
            "text": "correction, and continual dynamics [32, 9, "
          },
          {
            "kind": "same",
            "text": "15, "
          },
          {
            "kind": "add",
            "text": "10, 11, 33, 34]. Despite these advances, self-training remains vulnerable to temporally correlated and label-imbalanced streams, where local "
          },
          {
            "kind": "same",
            "text": "adaptation "
          },
          {
            "kind": "add",
            "text": "errors can accumulate across successive updates. "
          },
          {
            "kind": "same",
            "text": "Reliability- and Stability-aware TTA. A central challenge in online TTA is "
          },
          {
            "kind": "add",
            "text": "governing how test "
          },
          {
            "kind": "same",
            "text": "samples "
          },
          {
            "kind": "same",
            "text": "drive adaptation and how the "
          },
          {
            "kind": "add",
            "text": "resulting "
          },
          {
            "kind": "same",
            "text": "updates "
          },
          {
            "kind": "add",
            "text": "are maintained. At "
          },
          {
            "kind": "same",
            "text": "the sample "
          },
          {
            "kind": "add",
            "text": "level, "
          },
          {
            "kind": "same",
            "text": "EATA "
          },
          {
            "kind": "add",
            "text": "[8] "
          },
          {
            "kind": "same",
            "text": "and SAR "
          },
          {
            "kind": "add",
            "text": "[9] "
          },
          {
            "kind": "same",
            "text": "filter redundant or unreliable samples "
          },
          {
            "kind": "add",
            "text": "via entropy "
          },
          {
            "kind": "same",
            "text": "criteria, "
          },
          {
            "kind": "add",
            "text": "while "
          },
          {
            "kind": "same",
            "text": "DeYO "
          },
          {
            "kind": "add",
            "text": "[35] "
          },
          {
            "kind": "same",
            "text": "and ETAGE "
          },
          {
            "kind": "add",
            "text": "[16] incorporate shape- or gradient-sensitive cues. Among closely related studies, QED [31] identifies biased instances via question-type entropy and negative perturbations, while MS-TTA [36] performs training-free mean-shift refinement over test features. CMDA [30] "
          },
          {
            "kind": "same",
            "text": "further "
          },
          {
            "kind": "add",
            "text": "couples model adaptation with diffusion-based data adaptation. In contrast, DCF assigns heterogeneous roles "
          },
          {
            "kind": "same",
            "text": "to "
          },
          {
            "kind": "add",
            "text": "target samples: trusted instances provide consistency supervision, whereas routed-away instances are retained for soft optimal-transport geometry repair. At "
          },
          {
            "kind": "same",
            "text": "the parameter "
          },
          {
            "kind": "add",
            "text": "level, MetaBN [29] reshapes updates via meta-training, while "
          },
          {
            "kind": "same",
            "text": "CoTTA "
          },
          {
            "kind": "add",
            "text": "[12], RoTTA [13], LAW [37], and GOLD [38] stabilize adaptation through weight restoration, teacher–student memory, layer-wise learning-rate modulation, or constrained update spaces. Unlike these approaches, DCF treats sample-side updates strictly as candidates and selectively retains them across depth according "
          },
          {
            "kind": "same",
            "text": "to "
          },
          {
            "kind": "add",
            "text": "layer-wise source mismatch. "
          },
          {
            "kind": "same",
            "text": "Overall, existing TTA methods "
          },
          {
            "kind": "add",
            "text": "largely treat sample-side "
          },
          {
            "kind": "same",
            "text": "adaptation "
          },
          {
            "kind": "add",
            "text": "and parameter-side stabilization independently. "
          },
          {
            "kind": "same",
            "text": "DCF "
          },
          {
            "kind": "add",
            "text": "instead models their interaction as a "
          },
          {
            "kind": "same",
            "text": "coupled sample–layer "
          },
          {
            "kind": "add",
            "text": "feedback process, jointly determining which samples drive adaptation, how routed-away samples preserve target structure, "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "add",
            "text": "which layers retain the resulting updates."
          }
        ]
      }
    },
    {
      "title": "Problem setup",
      "originalPage": 4,
      "revisedPage": 3,
      "before": "Test-time adaptation starts from a source model ⟪f_{\\theta_0}: \\mathcal{X}\\rightarrow \\Delta^{K-1}⟫ trained on a labeled source distribution ⟪\\mathcal{P}_0(X,Y)⟫. At deployment, the model receives an unlabeled test stream ⟪\\{x_t\\}_{t=1}^{T}⟫, where ⟪x_t=\\{x_{t,i}\\}_{i=1}^{N_t}⟫ denotes the mini-batch of size ⟪N_t⟫ observed at time ⟪t⟫ and ⟪x_{t,i}\\sim \\mathcal{P}_t(X)⟫. The target distribution ⟪\\mathcal{P}_t⟫ may evolve over time because of temporally correlated covariate shifts, such as changing corruption types, sensor noise, illumination, weather, or rendering style. It may also involve label-distribution changes, denoted by the class prior ⟪\\pi_t^Y(\\cdot)\\coloneqq \\mathcal{P}_t(Y=\\cdot)⟫. We write ⟪\\theta_t=\\{\\theta_t^l\\}_{l=1}^{L}⟫ for the layer-wise parameters of the online model at time ⟪t⟫. The goal of TTA is to update the model online using only the current unlabeled mini-batch before producing final predictions on that batch. A common adaptation step can be written as ⟪\\displaystyle \\theta_{t+1}^{l} \\coloneqq \\theta_t^{l} - \\eta \\nabla_{\\theta_t^{l}} \\mathcal{L}_{\\mathrm{TTA}}(x_t;\\theta_t),⟫ where ⟪\\mathcal{L}_{\\mathrm{TTA}}⟫ is usually derived from the model’s own predictions, such as entropy minimization or consistency regularization. Under temporally correlated streams, however, such an update can become unstable: unreliable pseudo-labels may induce biased gradients, and the resulting parameter movement may persist in layers that are sensitive to source-domain forgetting. Therefore, stable TTA requires not only deciding which samples should generate adaptation signals, but also deciding where the induced update should be retained.",
      "after": "Test-Time Adaptation (TTA) starts from a ⟪K⟫-class source model ⟪f_{\\theta_0}:\\mathcal{X}\\to\\Delta^{K-1}⟫ trained on ⟪\\mathcal{P}_0(X,Y)⟫, where ⟪f_\\theta=\\operatorname{softmax}\\circ c_\\theta\\circ h_\\theta,⟫ with ⟪h_\\theta⟫ and ⟪c_\\theta⟫ denoting the feature extractor and classifier, respectively. Given an unlabeled test stream ⟪\\{x_t\\}_{t=1}^T⟫, each ⟪x_t=\\{x_{t,i}\\}_{i=1}^{N_t}⟫ is a mini-batch sampled from ⟪\\mathcal{P}_t(X)⟫. The target distribution may evolve over time under temporally correlated covariate and class-prior shifts, where ⟪\\pi_t^Y(\\cdot)\\coloneqq\\mathcal{P}_t(Y=\\cdot)⟫. We write ⟪\\theta_t=\\{\\theta_t^l\\}_{l=1}^L⟫ for the trainable parameters at time step ⟪t⟫, partitioned into ⟪L⟫ layer groups. At each step, online TTA updates parameters ⟪\\theta_t⟫ using only the current unlabeled data ⟪x_t⟫: ⟪\\displaystyle \\theta_{t+1}^{l} \\coloneqq \\theta_t^{l} - \\eta \\nabla_{\\theta_t^{l}} \\mathcal{L}_{\\mathrm{TTA}}(x_t;\\theta_t),⟫ where ⟪\\mathcal{L}_{\\mathrm{TTA}}⟫ is typically self-supervised. However, when test streams exhibit strong temporal correlation, such homogeneous and unconstrained updates allow biased gradients to accumulate unchecked across network layers.",
      "diff": {
        "original": [
          {
            "kind": "del",
            "text": "Test-time adaptation "
          },
          {
            "kind": "same",
            "text": "starts from a "
          },
          {
            "kind": "same",
            "text": "source model "
          },
          {
            "kind": "del",
            "text": "⟪f_{\\theta_0}: \\mathcal{X}\\rightarrow \\Delta^{K-1}⟫ "
          },
          {
            "kind": "same",
            "text": "trained on "
          },
          {
            "kind": "del",
            "text": "a labeled source distribution "
          },
          {
            "kind": "same",
            "text": "⟪\\mathcal{P}_0(X,Y)⟫"
          },
          {
            "kind": "del",
            "text": ". At deployment, "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "del",
            "text": "model receives "
          },
          {
            "kind": "same",
            "text": "an unlabeled test stream "
          },
          {
            "kind": "del",
            "text": "⟪\\{x_t\\}_{t=1}^{T}⟫"
          },
          {
            "kind": "same",
            "text": ", "
          },
          {
            "kind": "del",
            "text": "where "
          },
          {
            "kind": "same",
            "text": "⟪x_t=\\{x_{t,i}\\}_{i=1}^{N_t}⟫ "
          },
          {
            "kind": "del",
            "text": "denotes the "
          },
          {
            "kind": "same",
            "text": "mini-batch "
          },
          {
            "kind": "del",
            "text": "of size ⟪N_t⟫ observed at time ⟪t⟫ and ⟪x_{t,i}\\sim \\mathcal{P}_t(X)⟫"
          },
          {
            "kind": "same",
            "text": ". The target distribution "
          },
          {
            "kind": "del",
            "text": "⟪\\mathcal{P}_t⟫ "
          },
          {
            "kind": "same",
            "text": "may evolve over time "
          },
          {
            "kind": "del",
            "text": "because of "
          },
          {
            "kind": "same",
            "text": "temporally correlated covariate "
          },
          {
            "kind": "same",
            "text": "shifts, "
          },
          {
            "kind": "del",
            "text": "such as changing corruption types, sensor noise, illumination, weather, or rendering style. It may also involve label-distribution changes, denoted by the class prior ⟪\\pi_t^Y(\\cdot)\\coloneqq \\mathcal{P}_t(Y=\\cdot)⟫"
          },
          {
            "kind": "same",
            "text": ". We write "
          },
          {
            "kind": "del",
            "text": "⟪\\theta_t=\\{\\theta_t^l\\}_{l=1}^{L}⟫ "
          },
          {
            "kind": "same",
            "text": "for the "
          },
          {
            "kind": "del",
            "text": "layer-wise "
          },
          {
            "kind": "same",
            "text": "parameters "
          },
          {
            "kind": "del",
            "text": "of the online model "
          },
          {
            "kind": "same",
            "text": "at time "
          },
          {
            "kind": "same",
            "text": "⟪t⟫"
          },
          {
            "kind": "del",
            "text": ". The goal of "
          },
          {
            "kind": "same",
            "text": "TTA "
          },
          {
            "kind": "del",
            "text": "is to update the model online "
          },
          {
            "kind": "same",
            "text": "using only the current unlabeled "
          },
          {
            "kind": "del",
            "text": "mini-batch before producing final predictions on that batch. A common adaptation step can be written as "
          },
          {
            "kind": "same",
            "text": "⟪\\displaystyle \\theta_{t+1}^{l} \\coloneqq \\theta_t^{l} - \\eta \\nabla_{\\theta_t^{l}} \\mathcal{L}_{\\mathrm{TTA}}(x_t;\\theta_t),⟫ where ⟪\\mathcal{L}_{\\mathrm{TTA}}⟫ is "
          },
          {
            "kind": "del",
            "text": "usually derived from the model’s own predictions, "
          },
          {
            "kind": "same",
            "text": "such "
          },
          {
            "kind": "del",
            "text": "as entropy minimization or consistency regularization. Under temporally correlated streams, however, such an update can become unstable: unreliable pseudo-labels may induce "
          },
          {
            "kind": "same",
            "text": "biased "
          },
          {
            "kind": "del",
            "text": "gradients, and the resulting parameter movement may persist in layers that are sensitive "
          },
          {
            "kind": "same",
            "text": "to "
          },
          {
            "kind": "del",
            "text": "source-domain forgetting. Therefore, stable TTA requires not only deciding which samples should generate adaptation signals, but also deciding where the induced update should be retained."
          }
        ],
        "revised": [
          {
            "kind": "add",
            "text": "Test-Time Adaptation (TTA) "
          },
          {
            "kind": "same",
            "text": "starts from a "
          },
          {
            "kind": "add",
            "text": "⟪K⟫-class "
          },
          {
            "kind": "same",
            "text": "source model "
          },
          {
            "kind": "add",
            "text": "⟪f_{\\theta_0}:\\mathcal{X}\\to\\Delta^{K-1}⟫ "
          },
          {
            "kind": "same",
            "text": "trained on "
          },
          {
            "kind": "same",
            "text": "⟪\\mathcal{P}_0(X,Y)⟫"
          },
          {
            "kind": "add",
            "text": ", where ⟪f_\\theta=\\operatorname{softmax}\\circ c_\\theta\\circ h_\\theta,⟫ with ⟪h_\\theta⟫ and ⟪c_\\theta⟫ denoting "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "add",
            "text": "feature extractor and classifier, respectively. Given "
          },
          {
            "kind": "same",
            "text": "an unlabeled test stream "
          },
          {
            "kind": "add",
            "text": "⟪\\{x_t\\}_{t=1}^T⟫"
          },
          {
            "kind": "same",
            "text": ", "
          },
          {
            "kind": "add",
            "text": "each "
          },
          {
            "kind": "same",
            "text": "⟪x_t=\\{x_{t,i}\\}_{i=1}^{N_t}⟫ "
          },
          {
            "kind": "add",
            "text": "is a "
          },
          {
            "kind": "same",
            "text": "mini-batch "
          },
          {
            "kind": "add",
            "text": "sampled from ⟪\\mathcal{P}_t(X)⟫"
          },
          {
            "kind": "same",
            "text": ". The target distribution "
          },
          {
            "kind": "same",
            "text": "may evolve over time "
          },
          {
            "kind": "add",
            "text": "under "
          },
          {
            "kind": "same",
            "text": "temporally correlated covariate "
          },
          {
            "kind": "add",
            "text": "and class-prior "
          },
          {
            "kind": "same",
            "text": "shifts, "
          },
          {
            "kind": "add",
            "text": "where ⟪\\pi_t^Y(\\cdot)\\coloneqq\\mathcal{P}_t(Y=\\cdot)⟫"
          },
          {
            "kind": "same",
            "text": ". We write "
          },
          {
            "kind": "add",
            "text": "⟪\\theta_t=\\{\\theta_t^l\\}_{l=1}^L⟫ "
          },
          {
            "kind": "same",
            "text": "for the "
          },
          {
            "kind": "add",
            "text": "trainable "
          },
          {
            "kind": "same",
            "text": "parameters "
          },
          {
            "kind": "same",
            "text": "at time "
          },
          {
            "kind": "add",
            "text": "step "
          },
          {
            "kind": "same",
            "text": "⟪t⟫"
          },
          {
            "kind": "add",
            "text": ", partitioned into ⟪L⟫ layer groups. At each step, online "
          },
          {
            "kind": "same",
            "text": "TTA "
          },
          {
            "kind": "add",
            "text": "updates parameters ⟪\\theta_t⟫ "
          },
          {
            "kind": "same",
            "text": "using only the current unlabeled "
          },
          {
            "kind": "add",
            "text": "data ⟪x_t⟫: "
          },
          {
            "kind": "same",
            "text": "⟪\\displaystyle \\theta_{t+1}^{l} \\coloneqq \\theta_t^{l} - \\eta \\nabla_{\\theta_t^{l}} \\mathcal{L}_{\\mathrm{TTA}}(x_t;\\theta_t),⟫ where ⟪\\mathcal{L}_{\\mathrm{TTA}}⟫ is "
          },
          {
            "kind": "add",
            "text": "typically self-supervised. However, when test streams exhibit strong temporal correlation, "
          },
          {
            "kind": "same",
            "text": "such "
          },
          {
            "kind": "add",
            "text": "homogeneous and unconstrained updates allow "
          },
          {
            "kind": "same",
            "text": "biased "
          },
          {
            "kind": "add",
            "text": "gradients "
          },
          {
            "kind": "same",
            "text": "to "
          },
          {
            "kind": "add",
            "text": "accumulate unchecked across network layers."
          }
        ]
      }
    },
    {
      "title": "Decoupled control view",
      "originalPage": 4,
      "revisedPage": 3,
      "before": "We formulate DCF as a decoupled online control rule for temporally correlated TTA. At each test-time step, the model must make two coupled decisions: which target samples should be trusted to drive adaptation and which layers should be allowed to retain the resulting parameter update. Conventional TTA methods often merge these decisions into one homogeneous update: selected samples optimize a single objective, and the induced update is directly applied to the adapted parameters. This coupling is unsafe under temporally correlated shifts because unreliable samples can bias the update, while even a useful sample-side update may be harmful if it persists uniformly in source-sensitive layers. To decouple these decisions, DCF follows a route–adapt–retain principle. First, it routes target samples into a trusted set and a routed-away set. Second, it repairs target geometry by using routed-away samples as structural information rather than discarding them. Third, it retains only the layer-wise parts of the candidate update that remain compatible with the source model. Given the current mini-batch ⟪x_t⟫, DCF constructs a sample-side candidate update by minimizing two complementary losses: ⟪\\displaystyle \\theta_t^{+} = \\theta_t - \\eta \\nabla_{\\theta_t} \\left( \\mathcal{L}_{\\mathrm{trust}}(\\mathcal{R}_t) + \\mathcal{L}_{\\mathrm{geo}}(\\mathcal{U}_t) \\right),⟫ where ⟪\\mathcal{R}_t⟫ denotes the trusted set and ⟪\\mathcal{U}_t⟫ denotes the routed-away set. The trusted loss ⟪\\mathcal{L}_{\\mathrm{trust}}⟫ is induced by PCS-weighted consistency learning on probe-supported samples, whereas the geometry loss ⟪\\mathcal{L}_{\\mathrm{geo}}⟫ is induced by Routed-away Geometry Repair (RGR) on routed-away samples. Importantly, ⟪\\theta_t^{+}⟫ is not directly accepted as the final adapted model. It is treated as a candidate update whose persistence must be controlled layer by layer: ⟪\\displaystyle \\theta_{t+1} = \\operatorname{Retain}_{\\mu_t,I_t,I_0} \\left( \\theta_t^{+}, \\theta_0 \\right),⟫ where ⟪\\operatorname{Retain}_{\\mu_t,I_t,I_0}⟫ is implemented by Curvature-aware Layer Retention (CLR). This final retention step prevents a globally useful sample-side update from being indiscriminately preserved in layers that exhibit high source mismatch.",
      "after": "We formulate DCF as a decoupled online control framework for temporally correlated streams. DCF follows the route–adapt–retain paradigm: 1) route instances into trusted and routed-away subsets; 2) adapt via subset-specific objectives, reusing routed-away instances for geometry repair; and 3) retain candidate updates according to layer-wise source compatibility. For ⟪x_t⟫ with ⟪\\mathcal{R}_t\\neq\\varnothing⟫, DCF first forms a sample-side candidate update ⟪\\theta_t^{+}⟫: ⟪\\displaystyle \\theta_t^{+} = \\theta_t - \\eta \\nabla_{\\theta_t} \\left( \\mathcal{L}_{\\mathrm{trust}}(\\mathcal{R}_t) + \\mathcal{L}_{\\mathrm{geo}}(\\mathcal{U}_t) \\right),⟫ where ⟪\\mathcal{R}_t⟫ and ⟪\\mathcal{U}_t⟫ are trusted and routed-away sets. ⟪\\mathcal{L}_{\\mathrm{trust}}⟫ enforces consistency on probe-selected evidence, while ⟪\\mathcal{L}_{\\mathrm{geo}}⟫ conducts Routed-away Geometry Repair (RGR). Rather than accepting ⟪\\theta_t^{+}⟫ globally, Curvature-aware Layer Retention (CLR) selectively filters updates via layer-wise retention: ⟪\\displaystyle \\theta_{t+1} = \\operatorname{Retain}_{\\mu_t,I_t,I_0}\\left(\\theta_t^{+}, \\theta_0\\right),⟫ which prevents updates from being indiscriminately retained in source-sensitive layers.",
      "diff": {
        "original": [
          {
            "kind": "same",
            "text": "We formulate DCF as a decoupled online control "
          },
          {
            "kind": "del",
            "text": "rule "
          },
          {
            "kind": "same",
            "text": "for temporally correlated "
          },
          {
            "kind": "del",
            "text": "TTA. At each test-time step, the model must make two coupled decisions: which target samples should be trusted to drive adaptation and which layers should be allowed to retain the resulting parameter update. Conventional TTA methods often merge these decisions into one homogeneous update: selected samples optimize a single objective, and the induced update is directly applied to the adapted parameters. This coupling is unsafe under temporally correlated shifts because unreliable samples can bias the update, while even a useful sample-side update may be harmful if it persists uniformly in source-sensitive layers. To decouple these decisions, "
          },
          {
            "kind": "same",
            "text": "DCF follows "
          },
          {
            "kind": "del",
            "text": "a "
          },
          {
            "kind": "same",
            "text": "route–adapt–retain "
          },
          {
            "kind": "del",
            "text": "principle. First, it routes target samples "
          },
          {
            "kind": "same",
            "text": "into "
          },
          {
            "kind": "del",
            "text": "a "
          },
          {
            "kind": "same",
            "text": "trusted "
          },
          {
            "kind": "del",
            "text": "set "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "del",
            "text": "a "
          },
          {
            "kind": "same",
            "text": "routed-away "
          },
          {
            "kind": "del",
            "text": "set. Second, it repairs target "
          },
          {
            "kind": "same",
            "text": "geometry "
          },
          {
            "kind": "del",
            "text": "by using routed-away samples as structural information rather than discarding them. Third, it retains only the "
          },
          {
            "kind": "same",
            "text": "layer-wise "
          },
          {
            "kind": "del",
            "text": "parts of the candidate update that remain compatible "
          },
          {
            "kind": "same",
            "text": "with "
          },
          {
            "kind": "del",
            "text": "the source model. Given the current mini-batch ⟪x_t⟫"
          },
          {
            "kind": "same",
            "text": ", DCF "
          },
          {
            "kind": "del",
            "text": "constructs "
          },
          {
            "kind": "same",
            "text": "a sample-side candidate update "
          },
          {
            "kind": "del",
            "text": "by minimizing two complementary losses: "
          },
          {
            "kind": "same",
            "text": "⟪\\displaystyle \\theta_t^{+} = \\theta_t - \\eta \\nabla_{\\theta_t} \\left( \\mathcal{L}_{\\mathrm{trust}}(\\mathcal{R}_t) + \\mathcal{L}_{\\mathrm{geo}}(\\mathcal{U}_t) \\right),⟫ where ⟪\\mathcal{R}_t⟫ "
          },
          {
            "kind": "del",
            "text": "denotes the trusted set "
          },
          {
            "kind": "same",
            "text": "and ⟪\\mathcal{U}_t⟫ "
          },
          {
            "kind": "del",
            "text": "denotes the "
          },
          {
            "kind": "same",
            "text": "routed-away "
          },
          {
            "kind": "del",
            "text": "set. The trusted loss "
          },
          {
            "kind": "same",
            "text": "⟪\\mathcal{L}_{\\mathrm{trust}}⟫ "
          },
          {
            "kind": "del",
            "text": "is induced by PCS-weighted "
          },
          {
            "kind": "same",
            "text": "consistency "
          },
          {
            "kind": "del",
            "text": "learning "
          },
          {
            "kind": "same",
            "text": "on "
          },
          {
            "kind": "del",
            "text": "probe-supported samples, whereas the geometry loss "
          },
          {
            "kind": "same",
            "text": "⟪\\mathcal{L}_{\\mathrm{geo}}⟫ "
          },
          {
            "kind": "del",
            "text": "is induced by "
          },
          {
            "kind": "same",
            "text": "Routed-away Geometry Repair "
          },
          {
            "kind": "del",
            "text": "(RGR) on routed-away samples. Importantly, "
          },
          {
            "kind": "same",
            "text": "⟪\\theta_t^{+}⟫ "
          },
          {
            "kind": "del",
            "text": "is not directly accepted as the final adapted model. It is treated as a candidate update whose persistence must be controlled layer by layer: ⟪\\displaystyle \\theta_{t+1} = \\operatorname{Retain}_{\\mu_t,I_t,I_0} \\left( \\theta_t^{+}, \\theta_0 \\right),⟫ where ⟪\\operatorname{Retain}_{\\mu_t,I_t,I_0}⟫ is implemented by "
          },
          {
            "kind": "same",
            "text": "Curvature-aware Layer Retention "
          },
          {
            "kind": "del",
            "text": "(CLR). This final retention step "
          },
          {
            "kind": "same",
            "text": "prevents "
          },
          {
            "kind": "del",
            "text": "a globally useful sample-side update "
          },
          {
            "kind": "same",
            "text": "from being indiscriminately "
          },
          {
            "kind": "del",
            "text": "preserved "
          },
          {
            "kind": "same",
            "text": "in "
          },
          {
            "kind": "del",
            "text": "layers that exhibit high source mismatch."
          }
        ],
        "revised": [
          {
            "kind": "same",
            "text": "We formulate DCF as a decoupled online control "
          },
          {
            "kind": "add",
            "text": "framework "
          },
          {
            "kind": "same",
            "text": "for temporally correlated "
          },
          {
            "kind": "add",
            "text": "streams. "
          },
          {
            "kind": "same",
            "text": "DCF follows "
          },
          {
            "kind": "add",
            "text": "the "
          },
          {
            "kind": "same",
            "text": "route–adapt–retain "
          },
          {
            "kind": "add",
            "text": "paradigm: 1) route instances "
          },
          {
            "kind": "same",
            "text": "into "
          },
          {
            "kind": "same",
            "text": "trusted "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "same",
            "text": "routed-away "
          },
          {
            "kind": "add",
            "text": "subsets; 2) adapt via subset-specific objectives, reusing routed-away instances for "
          },
          {
            "kind": "same",
            "text": "geometry "
          },
          {
            "kind": "add",
            "text": "repair; and 3) retain candidate updates according to "
          },
          {
            "kind": "same",
            "text": "layer-wise "
          },
          {
            "kind": "add",
            "text": "source compatibility. For ⟪x_t⟫ "
          },
          {
            "kind": "same",
            "text": "with "
          },
          {
            "kind": "add",
            "text": "⟪\\mathcal{R}_t\\neq\\varnothing⟫"
          },
          {
            "kind": "same",
            "text": ", DCF "
          },
          {
            "kind": "add",
            "text": "first forms "
          },
          {
            "kind": "same",
            "text": "a sample-side candidate update "
          },
          {
            "kind": "add",
            "text": "⟪\\theta_t^{+}⟫: "
          },
          {
            "kind": "same",
            "text": "⟪\\displaystyle \\theta_t^{+} = \\theta_t - \\eta \\nabla_{\\theta_t} \\left( \\mathcal{L}_{\\mathrm{trust}}(\\mathcal{R}_t) + \\mathcal{L}_{\\mathrm{geo}}(\\mathcal{U}_t) \\right),⟫ where ⟪\\mathcal{R}_t⟫ "
          },
          {
            "kind": "same",
            "text": "and ⟪\\mathcal{U}_t⟫ "
          },
          {
            "kind": "add",
            "text": "are trusted and "
          },
          {
            "kind": "same",
            "text": "routed-away "
          },
          {
            "kind": "add",
            "text": "sets. "
          },
          {
            "kind": "same",
            "text": "⟪\\mathcal{L}_{\\mathrm{trust}}⟫ "
          },
          {
            "kind": "add",
            "text": "enforces "
          },
          {
            "kind": "same",
            "text": "consistency "
          },
          {
            "kind": "same",
            "text": "on "
          },
          {
            "kind": "add",
            "text": "probe-selected evidence, while "
          },
          {
            "kind": "same",
            "text": "⟪\\mathcal{L}_{\\mathrm{geo}}⟫ "
          },
          {
            "kind": "add",
            "text": "conducts "
          },
          {
            "kind": "same",
            "text": "Routed-away Geometry Repair "
          },
          {
            "kind": "add",
            "text": "(RGR). Rather than accepting "
          },
          {
            "kind": "same",
            "text": "⟪\\theta_t^{+}⟫ "
          },
          {
            "kind": "add",
            "text": "globally, "
          },
          {
            "kind": "same",
            "text": "Curvature-aware Layer Retention "
          },
          {
            "kind": "add",
            "text": "(CLR) selectively filters updates via layer-wise retention: ⟪\\displaystyle \\theta_{t+1} = \\operatorname{Retain}_{\\mu_t,I_t,I_0}\\left(\\theta_t^{+}, \\theta_0\\right),⟫ which "
          },
          {
            "kind": "same",
            "text": "prevents "
          },
          {
            "kind": "add",
            "text": "updates "
          },
          {
            "kind": "same",
            "text": "from being indiscriminately "
          },
          {
            "kind": "add",
            "text": "retained "
          },
          {
            "kind": "same",
            "text": "in "
          },
          {
            "kind": "add",
            "text": "source-sensitive layers."
          }
        ]
      }
    },
    {
      "title": "Sample routing",
      "originalPage": 4,
      "revisedPage": 4,
      "before": "The first control decision is sample routing: how the current target batch should be partitioned before any adaptation objective is applied. Prediction confidence alone is insufficient for this decision. A low-entropy prediction may still be supported by shortcut-sensitive features and can therefore reinforce confirmation bias under repeated updates. We address this by combining entropy with a targeted Fourier stress probe. The probe creates a counterfactual stressed view that preserves the semantic layout while perturbing frequency-direction components. A sample is routed to the trusted set only when it is both confident and sufficiently responsive to this structured stress, indicating that its prediction is supported by adaptation-relevant evidence rather than stress-inert shortcuts. Fourier-basis stress probe. At test-time step ⟪t⟫, we apply a small additive Fourier-basis perturbation to the current batch ⟪x_t⟫ to obtain a stressed batch ⟪x_t^s=\\mathcal{A}^s(x_t)⟫: ⟪\\displaystyle \\begin{aligned} \\Phi_{f,\\omega}(i,j) &= R\\sin\\!\\Big( 2\\pi f(i\\cos\\omega+j\\sin\\omega-\\pi/4) \\Big), \\\\ \\big[\\mathcal{A}^{s}(x_t)\\big]_{i,j,c} &= \\operatorname{Clamp}_{[0,1]}\\!\\Big( \\big[x_t\\big]_{i,j,c} + \\sigma_c \\Phi_{f_c,\\omega_c}(i,j) \\Big), \\\\ & c\\in\\{1,2,3\\}. \\end{aligned}⟫ Here, ⟪R⟫ is chosen such that ⟪\\|\\Phi_{f,\\omega}\\|_2=1⟫. For each channel ⟪c⟫, we independently sample the frequency and direction as ⟪f_c\\sim\\mathcal{U}[1,224]⟫ and ⟪\\omega_c\\sim\\mathcal{U}[0,\\pi]⟫, and sample the perturbation strength as ⟪\\sigma_c\\sim\\mathrm{Exp}(1/\\lambda)⟫. Given a sample ⟪x_{t,i}\\in x_t⟫ and its stressed counterpart ⟪x_{t,i}^s=\\mathcal{A}^s(x_{t,i})⟫, we define the predicted class on the clean view and the Perturbation Consistency Score (PCS) as ⟪\\displaystyle \\begin{aligned} x_{t,i}^s &= \\mathcal{A}^s(x_{t,i}), \\qquad \\hat{y}_t(x_{t,i}) = \\arg\\max_y p_{\\theta_t}(y\\mid x_{t,i}), \\\\ s_{\\theta_t}(x_{t,i}) &= \\left[ p_{\\theta_t}(\\hat{y}_t(x_{t,i})\\mid x_{t,i}) - p_{\\theta_t}(\\hat{y}_t(x_{t,i})\\mid x_{t,i}^s) \\right]_+. \\end{aligned}⟫ Here ⟪[a]_+ \\coloneqq \\max(a,0)⟫. PCS measures how strongly the predicted-class confidence responds to controlled Fourier stress. A high PCS indicates that the prediction is stress-responsive and provides stronger evidence for adaptation, whereas a low PCS suggests that a confident prediction may be supported by stress-inert shortcuts. Sample routing. Let ⟪E_{\\theta_t}(x_{t,i})⟫ denote the predictive entropy of sample ⟪x_{t,i}⟫. We define the trusted set as ⟪\\displaystyle \\mathcal{R}_{\\theta_t}(x_t) = \\left\\{ \\begin{aligned} x_{t,i}\\in x_t \\ \\big| \\ & E_{\\theta_t}(x_{t,i})<\\upsilon_{\\mathrm{Ent}}, \\\\ & s_{\\theta_t}(x_{t,i})>\\upsilon_{\\mathrm{PCS}} \\end{aligned} \\right\\},⟫ where ⟪\\upsilon_{\\mathrm{Ent}}⟫ and ⟪\\upsilon_{\\mathrm{PCS}}⟫ are thresholds for confidence and stress response. The routed-away set is ⟪\\displaystyle \\mathcal{U}_{\\theta_t}(x_t) = x_t\\setminus \\mathcal{R}_{\\theta_t}(x_t).⟫ For brevity, we write ⟪\\mathcal{R}_t=\\mathcal{R}_{\\theta_t}(x_t)⟫ and ⟪\\mathcal{U}_t=\\mathcal{U}_{\\theta_t}(x_t)⟫ in the following sections. The next section specifies how these two routed subsets are used with different adaptation objectives.",
      "after": "The first control decision is sample routing: partitioning the target batch before adaptation. Confidence alone is unreliable, as low-entropy predictions may still rely on shortcut-sensitive cues under shift (O1). We therefore pair entropy with a structured Fourier stress probe that perturbs frequency-direction patterns without spatially rearranging image content and exposes prediction responsiveness. Samples are trusted only when they are both confident and sufficiently stress-responsive, filtering out confident but stress-inert predictions. Fourier-basis stress probe. At step ⟪t⟫, we generate a stressed batch ⟪x_t^s=\\mathcal{A}^{s}(x_t)⟫ via an additive Fourier basis perturbation: ⟪\\displaystyle \\begin{aligned} \\Phi_{f,\\omega}(i,j) &= R\\sin\\!\\big(2\\pi f(i\\cos\\omega+j\\sin\\omega-\\pi/4)\\big), \\\\ [\\mathcal{A}^{s}(x_t)]_{i,j,c} &= \\operatorname{Clamp}_{[0,1]}\\!\\big([x_t]_{i,j,c} + \\sigma_c \\Phi_{f_c,\\omega_c}(i,j)\\big). \\end{aligned}⟫ Here, ⟪(i,j)\\in[0,1]^2⟫ are normalized coordinates, and ⟪R⟫ ensures ⟪\\lVert\\Phi_{f,\\omega}\\rVert_2^2/(HW)=1⟫. Per channel, independently draw ⟪f_c\\sim\\mathcal{U}[1,224]⟫ (nominal cycles/image), ⟪\\omega_c\\sim\\mathcal{U}[0,\\pi]⟫, and ⟪\\sigma_c\\sim\\mathrm{Exp}(1/\\lambda)⟫ with rate ⟪1/\\lambda⟫. Thus, ⟪\\lambda⟫ is the expected pre-clamp per-channel RMS amplitude. For sample ⟪x_{t,i}⟫, let ⟪\\hat{y}_t(x_{t,i}) = \\arg\\max_y p_{\\theta_t}(y\\mid x_{t,i})⟫. The Perturbation Consistency Score (PCS) is formulated as: ⟪\\displaystyle s_{\\theta_t}(x_{t,i}) = \\left[ p_{\\theta_t}(\\hat{y}_t(x_{t,i})\\mid x_{t,i}) - p_{\\theta_t}(\\hat{y}_t(x_{t,i})\\mid \\mathcal{A}^{s}(x_{t,i})) \\right]_+.⟫ Higher PCS indicates stronger responsiveness of the original prediction to the structured Fourier probe, whereas lower PCS indicates stress-inert behavior. Combined with predictive entropy, PCS therefore provides a complementary signal for distinguishing confident candidates according to how their predictive evidence responds to structured stress. Theoretical interpretation. Motivated by frequency-dependent model sensitivity and texture bias [39, 40], we characterize PCS through a local probability expansion. For a fixed input ⟪x⟫, let ⟪\\delta=\\mathcal{A}^{s}(x)-x⟫, ⟪Q_q(x)=\\mathbb{E}_q[\\delta\\delta^\\top]⟫, and ⟪g_x=\\nabla_x p_{\\theta_t}(\\hat{y}_t(x)\\mid x)⟫, holding the original predicted class fixed. For a locally smooth probability function and sufficiently small perturbations, retaining the positive-part operation in Eq. (5) gives ⟪\\mathbb{E}_q[s_{\\theta_t}(x)^2] =\\mathbb{E}_q[(-g_x^\\top\\delta)_+^2] +O(\\mathbb{E}_q\\lVert\\delta\\rVert_2^3).⟫ The leading term is bounded above by ⟪g_x^\\top Q_q(x)g_x⟫, where ⟪Q_q(x)⟫ is the perturbation second-moment matrix; no zero-mean or symmetry assumption is imposed after clamping. Thus, this relation establishes PCS as a structured directional-sensitivity measure whose response depends jointly on the prediction gradient and the directions excited by the Fourier probe. The controlled shortcut interventions in Section IV-C provide the empirical bridge to routing: among confidence-matched candidates in the evaluated settings, task-relevant predictions exhibit stronger PCS responses and are preferentially retained by the joint entropy–PCS criterion. Sample routing. We quantify predictive uncertainty by the entropy ⟪E_{\\theta_t}(x_{t,i}) =-\\sum_{k=1}^{K} p_{\\theta_t}(k\\mid x_{t,i}) \\ln p_{\\theta_t}(k\\mid x_{t,i}).⟫ Using uncertainty and stress sensitivity, we partition ⟪x_t⟫ into two complementary subsets. The trusted set (Area 1 in Fig. 3) is defined as ⟪\\displaystyle \\mathcal{R}_{\\theta_t}(x_t) = \\left\\{ x_{t,i}\\in x_t \\mid E_{\\theta_t}(x_{t,i})<\\upsilon_{\\mathrm{Ent}}, \\, s_{\\theta_t}(x_{t,i})>\\upsilon_{\\mathrm{PCS}} \\right\\},⟫ where ⟪\\upsilon_{\\mathrm{Ent}}⟫ and ⟪\\upsilon_{\\mathrm{PCS}}⟫ are thresholds for confidence and stress response. The routed-away set (Areas 2–4 in Fig. 3) is ⟪\\displaystyle \\mathcal{U}_{\\theta_t}(x_t) = x_t\\setminus \\mathcal{R}_{\\theta_t}(x_t).⟫ As illustrated in Fig. 3 (left), the two thresholds bisect the ⟪(E, s)⟫ diagnostic space into four quadrants: Area 1 (⟪E<\\upsilon_{\\mathrm{Ent}},\\,s>\\upsilon_{\\mathrm{PCS}}⟫), Area 2 (⟪E\\ge\\upsilon_{\\mathrm{Ent}},\\,s>\\upsilon_{\\mathrm{PCS}}⟫), Area 3 (⟪E<\\upsilon_{\\mathrm{Ent}},\\,s\\le\\upsilon_{\\mathrm{PCS}}⟫), and Area 4 (⟪E\\ge\\upsilon_{\\mathrm{Ent}},\\,s\\le\\upsilon_{\\mathrm{PCS}}⟫). For brevity, we denote the trusted and routed-away sets as ⟪\\mathcal{R}_t⟫ and ⟪\\mathcal{U}_t⟫ in subsequent sections.",
      "diff": {
        "original": [
          {
            "kind": "same",
            "text": "The first control decision is sample routing: "
          },
          {
            "kind": "del",
            "text": "how "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "del",
            "text": "current "
          },
          {
            "kind": "same",
            "text": "target batch "
          },
          {
            "kind": "del",
            "text": "should be partitioned "
          },
          {
            "kind": "same",
            "text": "before "
          },
          {
            "kind": "del",
            "text": "any adaptation objective is applied. Prediction confidence "
          },
          {
            "kind": "same",
            "text": "alone is "
          },
          {
            "kind": "del",
            "text": "insufficient for this decision. A "
          },
          {
            "kind": "same",
            "text": "low-entropy "
          },
          {
            "kind": "del",
            "text": "prediction "
          },
          {
            "kind": "same",
            "text": "may still "
          },
          {
            "kind": "del",
            "text": "be supported by "
          },
          {
            "kind": "same",
            "text": "shortcut-sensitive "
          },
          {
            "kind": "del",
            "text": "features and can "
          },
          {
            "kind": "same",
            "text": "therefore "
          },
          {
            "kind": "del",
            "text": "reinforce confirmation bias under repeated updates. We address this by combining "
          },
          {
            "kind": "same",
            "text": "entropy with a "
          },
          {
            "kind": "del",
            "text": "targeted "
          },
          {
            "kind": "same",
            "text": "Fourier stress "
          },
          {
            "kind": "del",
            "text": "probe. The "
          },
          {
            "kind": "same",
            "text": "probe "
          },
          {
            "kind": "del",
            "text": "creates a counterfactual stressed view "
          },
          {
            "kind": "same",
            "text": "that "
          },
          {
            "kind": "del",
            "text": "preserves the semantic layout while perturbing "
          },
          {
            "kind": "same",
            "text": "frequency-direction "
          },
          {
            "kind": "del",
            "text": "components. A sample is routed to the "
          },
          {
            "kind": "same",
            "text": "trusted "
          },
          {
            "kind": "del",
            "text": "set "
          },
          {
            "kind": "same",
            "text": "only when "
          },
          {
            "kind": "del",
            "text": "it is "
          },
          {
            "kind": "same",
            "text": "both confident and sufficiently "
          },
          {
            "kind": "del",
            "text": "responsive to this structured stress, indicating that its prediction is supported by adaptation-relevant evidence rather than "
          },
          {
            "kind": "same",
            "text": "stress-inert "
          },
          {
            "kind": "del",
            "text": "shortcuts. "
          },
          {
            "kind": "same",
            "text": "Fourier-basis stress probe. At "
          },
          {
            "kind": "del",
            "text": "test-time "
          },
          {
            "kind": "same",
            "text": "step ⟪t⟫, we "
          },
          {
            "kind": "del",
            "text": "apply a small additive Fourier-basis perturbation to the current batch ⟪x_t⟫ to obtain "
          },
          {
            "kind": "same",
            "text": "a stressed batch "
          },
          {
            "kind": "del",
            "text": "⟪x_t^s=\\mathcal{A}^s(x_t)⟫: ⟪\\displaystyle \\begin{aligned} \\Phi_{f,\\omega}(i,j) &= R\\sin\\!\\Big( 2\\pi f(i\\cos\\omega+j\\sin\\omega-\\pi/4) \\Big), \\\\ \\big[\\mathcal{A}^{s}(x_t)\\big]_{i,j,c} &= \\operatorname{Clamp}_{[0,1]}\\!\\Big( \\big[x_t\\big]_{i,j,c} + \\sigma_c \\Phi_{f_c,\\omega_c}(i,j) \\Big), \\\\ & c\\in\\{1,2,3\\}. \\end{aligned}⟫ "
          },
          {
            "kind": "same",
            "text": "Here, "
          },
          {
            "kind": "same",
            "text": "⟪R⟫ "
          },
          {
            "kind": "del",
            "text": "is chosen such that ⟪\\|\\Phi_{f,\\omega}\\|_2=1⟫"
          },
          {
            "kind": "same",
            "text": ". "
          },
          {
            "kind": "del",
            "text": "For each channel ⟪c⟫, we "
          },
          {
            "kind": "same",
            "text": "independently "
          },
          {
            "kind": "del",
            "text": "sample the frequency and direction as "
          },
          {
            "kind": "same",
            "text": "⟪f_c\\sim\\mathcal{U}[1,224]⟫ "
          },
          {
            "kind": "del",
            "text": "and "
          },
          {
            "kind": "same",
            "text": "⟪\\omega_c\\sim\\mathcal{U}[0,\\pi]⟫, and "
          },
          {
            "kind": "same",
            "text": "sample "
          },
          {
            "kind": "del",
            "text": "the perturbation strength as ⟪\\sigma_c\\sim\\mathrm{Exp}(1/\\lambda)⟫"
          },
          {
            "kind": "same",
            "text": ". "
          },
          {
            "kind": "del",
            "text": "Given a sample ⟪x_{t,i}\\in x_t⟫ and its stressed counterpart ⟪x_{t,i}^s=\\mathcal{A}^s(x_{t,i})⟫, we define the predicted class on the clean view and the "
          },
          {
            "kind": "same",
            "text": "Perturbation Consistency Score (PCS) "
          },
          {
            "kind": "del",
            "text": "as ⟪\\displaystyle \\begin{aligned} x_{t,i}^s &= \\mathcal{A}^s(x_{t,i}), \\qquad \\hat{y}_t(x_{t,i}) = \\arg\\max_y p_{\\theta_t}(y\\mid x_{t,i}), \\\\ s_{\\theta_t}(x_{t,i}) &= \\left[ p_{\\theta_t}(\\hat{y}_t(x_{t,i})\\mid x_{t,i}) - p_{\\theta_t}(\\hat{y}_t(x_{t,i})\\mid x_{t,i}^s) \\right]_+. \\end{aligned}⟫ Here ⟪[a]_+ \\coloneqq \\max(a,0)⟫. "
          },
          {
            "kind": "same",
            "text": "PCS "
          },
          {
            "kind": "del",
            "text": "measures "
          },
          {
            "kind": "same",
            "text": "how "
          },
          {
            "kind": "del",
            "text": "strongly the predicted-class confidence "
          },
          {
            "kind": "same",
            "text": "responds to "
          },
          {
            "kind": "del",
            "text": "controlled Fourier "
          },
          {
            "kind": "same",
            "text": "stress. "
          },
          {
            "kind": "del",
            "text": "A high "
          },
          {
            "kind": "same",
            "text": "PCS "
          },
          {
            "kind": "del",
            "text": "indicates that "
          },
          {
            "kind": "same",
            "text": "the prediction "
          },
          {
            "kind": "del",
            "text": "is stress-responsive "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "del",
            "text": "provides "
          },
          {
            "kind": "same",
            "text": "stronger "
          },
          {
            "kind": "del",
            "text": "evidence for adaptation, whereas a low "
          },
          {
            "kind": "same",
            "text": "PCS "
          },
          {
            "kind": "del",
            "text": "suggests that a confident prediction may be supported "
          },
          {
            "kind": "same",
            "text": "by "
          },
          {
            "kind": "del",
            "text": "stress-inert shortcuts. "
          },
          {
            "kind": "same",
            "text": "Sample routing. "
          },
          {
            "kind": "del",
            "text": "Let ⟪E_{\\theta_t}(x_{t,i})⟫ denote "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "del",
            "text": "predictive "
          },
          {
            "kind": "same",
            "text": "entropy "
          },
          {
            "kind": "del",
            "text": "of sample ⟪x_{t,i}⟫. We define the "
          },
          {
            "kind": "same",
            "text": "trusted set "
          },
          {
            "kind": "same",
            "text": "as "
          },
          {
            "kind": "del",
            "text": "⟪\\displaystyle \\mathcal{R}_{\\theta_t}(x_t) = \\left\\{ \\begin{aligned} x_{t,i}\\in x_t \\ \\big| \\ & E_{\\theta_t}(x_{t,i})<\\upsilon_{\\mathrm{Ent}}, \\\\ & s_{\\theta_t}(x_{t,i})>\\upsilon_{\\mathrm{PCS}} \\end{aligned} \\right\\},⟫ "
          },
          {
            "kind": "same",
            "text": "where ⟪\\upsilon_{\\mathrm{Ent}}⟫ and ⟪\\upsilon_{\\mathrm{PCS}}⟫ are thresholds for confidence and stress response. The routed-away set "
          },
          {
            "kind": "same",
            "text": "is ⟪\\displaystyle \\mathcal{U}_{\\theta_t}(x_t) = x_t\\setminus \\mathcal{R}_{\\theta_t}(x_t).⟫ "
          },
          {
            "kind": "same",
            "text": "For brevity, we "
          },
          {
            "kind": "del",
            "text": "write ⟪\\mathcal{R}_t=\\mathcal{R}_{\\theta_t}(x_t)⟫ "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "del",
            "text": "⟪\\mathcal{U}_t=\\mathcal{U}_{\\theta_t}(x_t)⟫ "
          },
          {
            "kind": "same",
            "text": "in "
          },
          {
            "kind": "del",
            "text": "the following sections. The next section specifies how these two routed subsets are used with different adaptation objectives."
          }
        ],
        "revised": [
          {
            "kind": "same",
            "text": "The first control decision is sample routing: "
          },
          {
            "kind": "add",
            "text": "partitioning "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "same",
            "text": "target batch "
          },
          {
            "kind": "same",
            "text": "before "
          },
          {
            "kind": "add",
            "text": "adaptation. Confidence "
          },
          {
            "kind": "same",
            "text": "alone is "
          },
          {
            "kind": "add",
            "text": "unreliable, as "
          },
          {
            "kind": "same",
            "text": "low-entropy "
          },
          {
            "kind": "add",
            "text": "predictions "
          },
          {
            "kind": "same",
            "text": "may still "
          },
          {
            "kind": "add",
            "text": "rely on "
          },
          {
            "kind": "same",
            "text": "shortcut-sensitive "
          },
          {
            "kind": "add",
            "text": "cues under shift (O1). We "
          },
          {
            "kind": "same",
            "text": "therefore "
          },
          {
            "kind": "add",
            "text": "pair "
          },
          {
            "kind": "same",
            "text": "entropy with a "
          },
          {
            "kind": "add",
            "text": "structured "
          },
          {
            "kind": "same",
            "text": "Fourier stress "
          },
          {
            "kind": "same",
            "text": "probe "
          },
          {
            "kind": "same",
            "text": "that "
          },
          {
            "kind": "add",
            "text": "perturbs "
          },
          {
            "kind": "same",
            "text": "frequency-direction "
          },
          {
            "kind": "add",
            "text": "patterns without spatially rearranging image content and exposes prediction responsiveness. Samples are "
          },
          {
            "kind": "same",
            "text": "trusted "
          },
          {
            "kind": "same",
            "text": "only when "
          },
          {
            "kind": "add",
            "text": "they are "
          },
          {
            "kind": "same",
            "text": "both confident and sufficiently "
          },
          {
            "kind": "add",
            "text": "stress-responsive, filtering out confident but "
          },
          {
            "kind": "same",
            "text": "stress-inert "
          },
          {
            "kind": "add",
            "text": "predictions. "
          },
          {
            "kind": "same",
            "text": "Fourier-basis stress probe. At "
          },
          {
            "kind": "same",
            "text": "step ⟪t⟫, we "
          },
          {
            "kind": "add",
            "text": "generate "
          },
          {
            "kind": "same",
            "text": "a stressed batch "
          },
          {
            "kind": "add",
            "text": "⟪x_t^s=\\mathcal{A}^{s}(x_t)⟫ via an additive Fourier basis perturbation: ⟪\\displaystyle \\begin{aligned} \\Phi_{f,\\omega}(i,j) &= R\\sin\\!\\big(2\\pi f(i\\cos\\omega+j\\sin\\omega-\\pi/4)\\big), \\\\ [\\mathcal{A}^{s}(x_t)]_{i,j,c} &= \\operatorname{Clamp}_{[0,1]}\\!\\big([x_t]_{i,j,c} + \\sigma_c \\Phi_{f_c,\\omega_c}(i,j)\\big). \\end{aligned}⟫ "
          },
          {
            "kind": "same",
            "text": "Here, "
          },
          {
            "kind": "add",
            "text": "⟪(i,j)\\in[0,1]^2⟫ are normalized coordinates, and "
          },
          {
            "kind": "same",
            "text": "⟪R⟫ "
          },
          {
            "kind": "add",
            "text": "ensures ⟪\\lVert\\Phi_{f,\\omega}\\rVert_2^2/(HW)=1⟫"
          },
          {
            "kind": "same",
            "text": ". "
          },
          {
            "kind": "add",
            "text": "Per channel, "
          },
          {
            "kind": "same",
            "text": "independently "
          },
          {
            "kind": "add",
            "text": "draw "
          },
          {
            "kind": "same",
            "text": "⟪f_c\\sim\\mathcal{U}[1,224]⟫ "
          },
          {
            "kind": "add",
            "text": "(nominal cycles/image), "
          },
          {
            "kind": "same",
            "text": "⟪\\omega_c\\sim\\mathcal{U}[0,\\pi]⟫, and "
          },
          {
            "kind": "add",
            "text": "⟪\\sigma_c\\sim\\mathrm{Exp}(1/\\lambda)⟫ with rate ⟪1/\\lambda⟫. Thus, ⟪\\lambda⟫ is the expected pre-clamp per-channel RMS amplitude. For "
          },
          {
            "kind": "same",
            "text": "sample "
          },
          {
            "kind": "add",
            "text": "⟪x_{t,i}⟫, let ⟪\\hat{y}_t(x_{t,i}) = \\arg\\max_y p_{\\theta_t}(y\\mid x_{t,i})⟫"
          },
          {
            "kind": "same",
            "text": ". "
          },
          {
            "kind": "add",
            "text": "The "
          },
          {
            "kind": "same",
            "text": "Perturbation Consistency Score (PCS) "
          },
          {
            "kind": "add",
            "text": "is formulated as: ⟪\\displaystyle s_{\\theta_t}(x_{t,i}) = \\left[ p_{\\theta_t}(\\hat{y}_t(x_{t,i})\\mid x_{t,i}) - p_{\\theta_t}(\\hat{y}_t(x_{t,i})\\mid \\mathcal{A}^{s}(x_{t,i})) \\right]_+.⟫ Higher "
          },
          {
            "kind": "same",
            "text": "PCS "
          },
          {
            "kind": "add",
            "text": "indicates stronger responsiveness of the original prediction to the structured Fourier probe, whereas lower PCS indicates stress-inert behavior. Combined with predictive entropy, PCS therefore provides a complementary signal for distinguishing confident candidates according to "
          },
          {
            "kind": "same",
            "text": "how "
          },
          {
            "kind": "add",
            "text": "their predictive evidence "
          },
          {
            "kind": "same",
            "text": "responds to "
          },
          {
            "kind": "add",
            "text": "structured "
          },
          {
            "kind": "same",
            "text": "stress. "
          },
          {
            "kind": "add",
            "text": "Theoretical interpretation. Motivated by frequency-dependent model sensitivity and texture bias [39, 40], we characterize "
          },
          {
            "kind": "same",
            "text": "PCS "
          },
          {
            "kind": "add",
            "text": "through a local probability expansion. For a fixed input ⟪x⟫, let ⟪\\delta=\\mathcal{A}^{s}(x)-x⟫, ⟪Q_q(x)=\\mathbb{E}_q[\\delta\\delta^\\top]⟫, and ⟪g_x=\\nabla_x p_{\\theta_t}(\\hat{y}_t(x)\\mid x)⟫, holding the original predicted class fixed. For a locally smooth probability function and sufficiently small perturbations, retaining the positive-part operation in Eq. (5) gives ⟪\\mathbb{E}_q[s_{\\theta_t}(x)^2] =\\mathbb{E}_q[(-g_x^\\top\\delta)_+^2] +O(\\mathbb{E}_q\\lVert\\delta\\rVert_2^3).⟫ The leading term is bounded above by ⟪g_x^\\top Q_q(x)g_x⟫, where ⟪Q_q(x)⟫ is the perturbation second-moment matrix; no zero-mean or symmetry assumption is imposed after clamping. Thus, this relation establishes PCS as a structured directional-sensitivity measure whose response depends jointly on "
          },
          {
            "kind": "same",
            "text": "the prediction "
          },
          {
            "kind": "add",
            "text": "gradient "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "add",
            "text": "the directions excited by the Fourier probe. The controlled shortcut interventions in Section IV-C provide the empirical bridge to routing: among confidence-matched candidates in the evaluated settings, task-relevant predictions exhibit "
          },
          {
            "kind": "same",
            "text": "stronger "
          },
          {
            "kind": "same",
            "text": "PCS "
          },
          {
            "kind": "add",
            "text": "responses and are preferentially retained "
          },
          {
            "kind": "same",
            "text": "by "
          },
          {
            "kind": "add",
            "text": "the joint entropy–PCS criterion. "
          },
          {
            "kind": "same",
            "text": "Sample routing. "
          },
          {
            "kind": "add",
            "text": "We quantify predictive uncertainty by "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "same",
            "text": "entropy "
          },
          {
            "kind": "add",
            "text": "⟪E_{\\theta_t}(x_{t,i}) =-\\sum_{k=1}^{K} p_{\\theta_t}(k\\mid x_{t,i}) \\ln p_{\\theta_t}(k\\mid x_{t,i}).⟫ Using uncertainty and stress sensitivity, we partition ⟪x_t⟫ into two complementary subsets. The "
          },
          {
            "kind": "same",
            "text": "trusted set "
          },
          {
            "kind": "add",
            "text": "(Area 1 in Fig. 3) is defined "
          },
          {
            "kind": "same",
            "text": "as "
          },
          {
            "kind": "add",
            "text": "⟪\\displaystyle \\mathcal{R}_{\\theta_t}(x_t) = \\left\\{ x_{t,i}\\in x_t \\mid E_{\\theta_t}(x_{t,i})<\\upsilon_{\\mathrm{Ent}}, \\, s_{\\theta_t}(x_{t,i})>\\upsilon_{\\mathrm{PCS}} \\right\\},⟫ "
          },
          {
            "kind": "same",
            "text": "where ⟪\\upsilon_{\\mathrm{Ent}}⟫ and ⟪\\upsilon_{\\mathrm{PCS}}⟫ are thresholds for confidence and stress response. The routed-away set "
          },
          {
            "kind": "add",
            "text": "(Areas 2–4 in Fig. 3) "
          },
          {
            "kind": "same",
            "text": "is ⟪\\displaystyle \\mathcal{U}_{\\theta_t}(x_t) = x_t\\setminus \\mathcal{R}_{\\theta_t}(x_t).⟫ "
          },
          {
            "kind": "add",
            "text": "As illustrated in Fig. 3 (left), the two thresholds bisect the ⟪(E, s)⟫ diagnostic space into four quadrants: Area 1 (⟪E<\\upsilon_{\\mathrm{Ent}},\\,s>\\upsilon_{\\mathrm{PCS}}⟫), Area 2 (⟪E\\ge\\upsilon_{\\mathrm{Ent}},\\,s>\\upsilon_{\\mathrm{PCS}}⟫), Area 3 (⟪E<\\upsilon_{\\mathrm{Ent}},\\,s\\le\\upsilon_{\\mathrm{PCS}}⟫), and Area 4 (⟪E\\ge\\upsilon_{\\mathrm{Ent}},\\,s\\le\\upsilon_{\\mathrm{PCS}}⟫). "
          },
          {
            "kind": "same",
            "text": "For brevity, we "
          },
          {
            "kind": "add",
            "text": "denote the trusted "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "add",
            "text": "routed-away sets as ⟪\\mathcal{R}_t⟫ and ⟪\\mathcal{U}_t⟫ "
          },
          {
            "kind": "same",
            "text": "in "
          },
          {
            "kind": "add",
            "text": "subsequent sections."
          }
        ]
      }
    },
    {
      "title": "Sample-side adaptation",
      "originalPage": 5,
      "revisedPage": 4,
      "before": "After sample routing, DCF performs decoupled sample-side adaptation. The key point is that ⟪\\mathcal{R}_t⟫ and ⟪\\mathcal{U}_t⟫ should not be optimized with the same supervision signal. Trusted samples are allowed to provide label-like consistency supervision because they are both low-entropy and stress-responsive. Routed-away samples are not discarded, but they are also not converted into hard pseudo-labels; instead, they are reused to repair target feature geometry. The resulting sample-side objective is ⟪\\mathcal{L}_{\\mathrm{trust}}+\\mathcal{L}_{\\mathrm{geo}}⟫, which produces the candidate update in (2). Trusted-evidence consistency learning. For each trusted sample ⟪x_{t,i}\\in\\mathcal{R}_t⟫, we use three views: the clean view ⟪x_{t,i}⟫, a weak semantics-preserving augmentation ⟪x_{t,i}^w=\\mathcal{A}^w(x_{t,i})⟫, and the Fourier-stressed view ⟪x_{t,i}^s=\\mathcal{A}^s(x_{t,i})⟫. Let ⟪\\displaystyle \\mathcal{V}(x_{t,i})=\\{x_{t,i},x_{t,i}^w,x_{t,i}^s\\}.⟫ Each augmented view is trained to remain consistent with the original one: ⟪\\displaystyle \\mathrm{SoftEnt}_{\\theta_t}(x_{t,i},\\tilde{x}_{t,i}) \\coloneqq -\\sum_{k=1}^{K} p_{\\theta_t}(k\\mid x_{t,i}) \\log p_{\\theta_t}(k\\mid \\tilde{x}_{t,i}),⟫ where ⟪\\tilde{x}_{t,i}\\in\\mathcal{V}(x_{t,i})⟫. To make PCS weighting well-defined for small or degenerate trusted sets, we first compute the minimum and maximum PCS values within ⟪\\mathcal{R}_t⟫: ⟪\\displaystyle s_{\\min} = \\min_{x_{t,i}\\in\\mathcal{R}_t} s_{\\theta_t}(x_{t,i}), \\qquad s_{\\max} = \\max_{x_{t,i}\\in\\mathcal{R}_t} s_{\\theta_t}(x_{t,i}).⟫ We then define the normalized PCS weight as ⟪\\displaystyle w_t(x_{t,i}) = \\frac{ |\\mathcal{R}_t| \\, \\exp\\!\\Big( \\frac{\\tau\\,[s_{\\theta_t}(x_{t,i})-s_{\\min}]} {s_{\\max}-s_{\\min}+\\varepsilon_w} \\Big) }{ \\sum_{x_{t,j}\\in\\mathcal{R}_t} \\exp\\!\\Big( \\frac{\\tau\\,[s_{\\theta_t}(x_{t,j})-s_{\\min}]} {s_{\\max}-s_{\\min}+\\varepsilon_w} \\Big) }.⟫ Here ⟪\\tau⟫ controls the sharpness of PCS weighting, and ⟪\\varepsilon_w=10^{-6}⟫ prevents division by zero. The normalization keeps the average weight close to one, so PCS changes relative contributions without changing the overall loss scale. The trusted-evidence consistency loss is defined as the PCS-weighted consistency loss over the trusted set: ⟪\\displaystyle \\begin{split} \\mathcal{L}_{\\mathrm{trust}} &= \\frac{1}{|\\mathcal{R}_t|} \\sum_{x_{t}\\in\\mathcal{R}_t} w_t(x_{t}) \\\\ &\\quad \\times \\frac{1}{|\\mathcal{V}(x_{t})|} \\sum_{\\tilde{x}_{t}\\in\\mathcal{V}(x_{t})} \\mathrm{SoftEnt}_{\\theta_t}(x_{t},\\tilde{x}_{t}). \\end{split}⟫ When ⟪|\\mathcal{R}_t|=0⟫, we set ⟪\\mathcal{L}_{\\mathrm{trust}}=0⟫. Routed-away geometry repair. The trusted objective prevents unreliable pseudo-labels from dominating adaptation, but routing also creates a second challenge: the routed-away samples still describe the evolving target distribution. Simply discarding them removes structural information and biases adaptation toward a small subset of confident samples. Therefore, DCF does not use ⟪\\mathcal{U}_t⟫ for label-like supervision. Instead, Routed-away Geometry Repair (RGR) reuses these samples for geometry repair. The goal of RGR is to preserve target structural diversity without converting unreliable samples into hard pseudo-labels. We formulate this as an optimal-transport alignment problem between routed-away features and source-initialized class centroids. The transport constraints discourage assignments from collapsing to a few dominant classes, while source-initialized centroids provide stable anchors without requiring access to source training samples. We detail this repair procedure through the following internal steps. skip Feature concentration diagnostic. We quantify representation bias by the centroid entropy deficit ⟪I(\\mathbf{Z})⟫. For a batch of normalized features ⟪\\mathbf{Z}=\\{\\mathbf{z}_i\\}_{i=1}^{B}⟫ with centroid ⟪\\bar{\\mathbf{z}}=\\frac{1}{B}\\sum_{i=1}^{B}\\mathbf{z}_i⟫, this diagnostic measures the entropy deficit of the centroid prediction: ⟪\\displaystyle I(\\mathbf{Z}) = \\log K + \\sum_{k=1}^{K} \\bar{p}_k \\log \\bar{p}_k,⟫ where ⟪\\bar{p} = \\operatorname{softmax}(c_{\\theta_t}(\\bar{\\mathbf{z}}))⟫, and ⟪c_{\\theta_t}⟫ denotes the classifier head applied to the feature centroid. A larger ⟪I(\\mathbf{Z})⟫ indicates that the centroid prediction is more concentrated on a small number of classes. This motivates using routed-away samples to repair target geometry rather than removing them from adaptation. skip Source-initialized centroids and routed-away features. Let ⟪n_t:=|\\mathcal{U}_t|⟫. We re-index the routed-away samples as ⟪\\displaystyle \\mathcal{U}_t=\\{u_{t,i}\\}_{i=1}^{n_t}.⟫ When ⟪n_t=0⟫, we set ⟪\\mathcal{L}_{\\mathrm{geo}}=0⟫ and skip the OT computation. Otherwise, for each routed-away sample, we construct two independent weak stochastic views: ⟪\\displaystyle u_{t,i}^{A}=\\mathcal{A}^{w_1}(u_{t,i}), \\qquad u_{t,i}^{B}=\\mathcal{A}^{w_2}(u_{t,i}),⟫ where ⟪\\mathcal{A}^{w_1}⟫ and ⟪\\mathcal{A}^{w_2}⟫ are semantics-preserving augmentations. Let ⟪\\displaystyle \\mathbf{z}_{t,i}^{V} = \\frac{h_{\\theta_t}(u_{t,i}^{V})} {\\|h_{\\theta_t}(u_{t,i}^{V})\\|_2}, \\qquad V\\in\\{A,B\\},⟫ denote normalized features. We maintain shared class centroids ⟪\\mathbf{M}_t\\in\\mathbb{R}^{K\\times d}⟫, initialized from the normalized source classifier weights: ⟪\\displaystyle \\mathbf{M}_{0,c} = \\frac{W_c}{\\|W_c\\|_2},⟫ where ⟪W_c⟫ is the classifier weight of class ⟪c⟫. This provides a source-free initialization of class prototypes at test time. skip Dynamic-marginal optimal transport. For each view, we compute an entropic OT assignment from routed-away features to the shared centroids. The cosine cost is ⟪\\displaystyle [\\mathbf{C}_t^V]_{ic} = 1-\\cos(\\mathbf{z}_{t,i}^{V},\\mathbf{M}_{t,c}), \\qquad V\\in\\{A,B\\}.⟫ Let ⟪a_t=\\mathbf{1}_{n_t}/n_t\\in\\Delta^{n_t-1}⟫ be the sample marginal. To make the centroid marginal compatible with possible label shift, we estimate the current target class prior from stop-gradient predictions: ⟪\\displaystyle \\hat{\\pi}_{t} = \\frac{1}{N_t} \\sum_{i=1}^{N_t} \\operatorname{sg}\\!\\left[p_{\\theta_t}(\\cdot\\mid x_{t,i})\\right],⟫ where ⟪\\operatorname{sg}[\\cdot]⟫ denotes stop-gradient. We maintain an exponential moving average of this prior: ⟪\\displaystyle \\bar{b}_t = (1-\\rho)\\bar{b}_{t-1} + \\rho\\hat{\\pi}_{t}, \\qquad \\bar{b}_0=\\frac{\\mathbf{1}_K}{K}.⟫ The final centroid marginal used in the OT constraints is ⟪\\displaystyle b_t = \\rho\\bar{b}_t + (1-\\rho)\\frac{\\mathbf{1}_K}{K}.⟫ The uniform component serves as an anti-collapse floor, discouraging routed-away samples from being concentrated on only a few categories. The transport plan for each view is obtained by ⟪\\displaystyle \\begin{split} \\gamma_{t,V}^{*} &= \\arg\\min_{\\gamma\\in\\Pi(a_t,b_t)} \\Bigl\\langle \\gamma,\\mathbf{C}_t^V\\Bigr\\rangle_F \\\\ &\\quad + \\varepsilon_{\\mathrm{OT}}\\sum_{i,c}\\gamma_{ic}(\\log\\gamma_{ic}-1), \\qquad V\\in\\{A,B\\}, \\end{split}⟫ where ⟪\\displaystyle \\Pi(a_t,b_t) = \\{\\gamma\\in\\mathbb{R}_{+}^{n_t\\times K} \\mid \\gamma\\mathbf{1}_K=a_t,\\; \\gamma^\\top\\mathbf{1}_{n_t}=b_t \\},⟫ and ⟪\\varepsilon_{\\mathrm{OT}}>0⟫ is the entropic regularization strength. The resulting transport plans are detached in the alignment loss; gradients flow through the cross-view costs, but not through the Sinkhorn iterations, the transport constraints, or the dynamic marginal ⟪b_t⟫. skip Cross-view geometry repair. Rather than supervising each view by its own assignment or converting routed-away samples into hard pseudo-labels, we enforce cross-view consistency over the soft assignment distribution. The geometry-repair loss is ⟪\\displaystyle \\begin{split} \\mathcal{L}_{\\mathrm{geo}} &= \\left\\langle \\operatorname{sg}\\!\\left[\\gamma_{t,A}^{*}\\right], \\mathbf{C}_t^B \\right\\rangle_F \\\\ &\\quad + \\left\\langle \\operatorname{sg}\\!\\left[\\gamma_{t,B}^{*}\\right], \\mathbf{C}_t^A \\right\\rangle_F. \\end{split}⟫ This objective encourages two stochastic views of routed-away samples to agree on their structural relationship to the source-initialized centroids. By matching soft assignment geometry rather than hard pseudo-labels, RGR helps maintain structural diversity in the target representation. skip Centroid update. The centroids are updated outside backpropagation using the OT-weighted feature mean. First define the accumulated assignment mass ⟪\\displaystyle m_{t,c} = \\sum_{V\\in\\{A,B\\}}\\sum_{i=1}^{n_t} \\operatorname{sg}\\!\\left[\\gamma_{t,V}^{*}(i,c)\\right].⟫ When this mass is non-negligible, the centroid feature mean is ⟪\\displaystyle \\bar{\\mathbf{z}}_{t,c} = \\frac{1}{m_{t,c}} \\sum_{V\\in\\{A,B\\}}\\sum_{i=1}^{n_t} \\operatorname{sg}\\!\\left[\\gamma_{t,V}^{*}(i,c)\\right]\\, \\mathbf{z}_{t,i}^{V}.⟫ Then ⟪\\displaystyle \\mathbf{M}_{t+1,c} \\leftarrow \\operatorname{norm}\\!\\left((1-\\rho)\\,\\mathbf{M}_{t,c} + \\rho\\,\\bar{\\mathbf{z}}_{t,c}\\right).⟫ Here ⟪\\operatorname{norm}(v)=v/\\|v\\|_2⟫, which keeps centroid directions compatible with the cosine cost. If ⟪m_{t,c}⟫ is too small, we set ⟪\\bar{\\mathbf{z}}_{t,c}=\\mathbf{M}_{t,c}⟫, so the centroid remains unchanged up to normalization.",
      "after": "After sample routing, ⟪\\mathcal{R}_t⟫ and ⟪\\mathcal{U}_t⟫ receive decoupled supervisory signals. Trusted instances drive label-like consistency, while routed-away instances are repurposed for geometry repair rather than discarded or hard pseudo-labeled. The resulting sample-side objective is ⟪\\mathcal{L}_{\\mathrm{trust}}+\\mathcal{L}_{\\mathrm{geo}}⟫, which produces the candidate update in (2). If ⟪|\\mathcal{U}_t|=0⟫, ⟪\\mathcal{L}_{\\mathrm{geo}}⟫ is bypassed; if ⟪|\\mathcal{R}_t|=0⟫, the entire adaptation step is bypassed and prediction uses the current model. Trusted-evidence consistency learning. For each ⟪x_{t,i}\\in\\mathcal{R}_t⟫, we construct a multi-view set ⟪\\mathcal{V}(x_{t,i})=\\{x_{t,i}, \\mathcal{A}^w(x_{t,i}), \\mathcal{A}^{s}(x_{t,i})\\}⟫, where ⟪\\mathcal{A}^w⟫ is weak augmentation [12] and ⟪\\mathcal{A}^{s}⟫ is the Fourier stress probe ((4)). We assign each trusted instance a normalized PCS weight: ⟪\\displaystyle w_t(x_{t,i}) = \\frac{|\\mathcal{R}_t| \\exp\\!\\big(\\frac{\\tau\\,[s_{\\theta_t}(x_{t,i})-s_{\\min}]}{s_{\\max}-s_{\\min}+\\varepsilon_w}\\big)}{\\sum_{x_{t,j}\\in\\mathcal{R}_t} \\exp\\!\\big(\\frac{\\tau\\,[s_{\\theta_t}(x_{t,j})-s_{\\min}]}{s_{\\max}-s_{\\min}+\\varepsilon_w}\\big)},⟫ where ⟪\\tau⟫ modulates sharpness, ⟪\\varepsilon_w=10^{-6}⟫, and ⟪s_{\\min}, s_{\\max}⟫ are the PCS extrema in ⟪\\mathcal{R}_t⟫. With cross-entropy ⟪\\mathrm{SoftEnt}_{\\theta_t}(u,v) \\coloneqq -\\sum_{k=1}^{K} p_{\\theta_t}(k\\mid u) \\log p_{\\theta_t}(k\\mid v)⟫, the consistency loss is computed as: ⟪\\displaystyle \\mathcal{L}_{\\mathrm{trust}} = \\frac{1}{|\\mathcal{R}_t|} \\sum_{x_{t,i}\\in\\mathcal{R}_t} \\frac{w_t(x_{t,i})}{|\\mathcal{V}(x_{t,i})|} \\sum_{\\tilde{x}\\in\\mathcal{V}(x_{t,i})} \\mathrm{SoftEnt}_{\\theta_t}(x_{t,i},\\tilde{x}),⟫ with ⟪\\mathcal{L}_{\\mathrm{trust}}=0⟫ if ⟪|\\mathcal{R}_t|=0⟫. Routed-away geometry repair. While trusted filtering limits unreliable pseudo-label supervision, discarding routed-away samples removes target structural context (O2) and may exacerbate representation bias. To exploit this context without hard pseudo-labels, DCF repurposes ⟪\\mathcal{U}_t⟫ through Routed-away Geometry Repair (RGR) as optimal transport (OT) alignment against source-initialized class centroids. The marginal constraints regulate aggregate class allocation, while source classifier weights provide initial semantic references without source data. Diagnostic & Prototypes: For a feature set ⟪\\mathbf{Z}=\\{\\mathbf{z}_i\\}_{i=1}^{B}⟫ with ⟪B=|\\mathbf{Z}|⟫, we assess prediction concentration via the centroid entropy deficit ⟪I(\\mathbf{Z})=\\ln K+\\sum_{k=1}^{K}\\bar{p}_k\\ln\\bar{p}_k⟫, where ⟪\\bar{\\mathbf{z}}=\\frac{1}{B}\\sum_{i=1}^{B}\\mathbf{z}_i⟫ and ⟪\\bar{\\mathbf{p}}=\\operatorname{softmax}(c_{\\theta_t}(\\bar{\\mathbf{z}}))⟫. A large deficit indicates severe prediction concentration, motivating geometric regularization. When ⟪n_t:=|\\mathcal{U}_t|=0⟫, we set ⟪\\mathcal{L}_{\\mathrm{geo}}=0⟫ and retain ⟪\\mathbf{M}_{t+1}=\\mathbf{M}_t⟫. Otherwise, for routed-away samples we construct two stochastic views ⟪u_{t,i}^{V}=\\mathcal{A}^{w_V}(u_{t,i})⟫ (⟪V\\in\\{A,B\\}⟫) and extract normalized features ⟪\\mathbf{z}_{t,i}^{V}=h_{\\theta_t}(u_{t,i}^{V})/\\|h_{\\theta_t}(u_{t,i}^{V})\\|_2⟫. Let ⟪W_c⟫ be the ⟪c⟫-th row of the frozen source classifier. Shared centroids start from ⟪\\mathbf{M}_1\\leftarrow\\mathbf{M}_0⟫, with ⟪\\mathbf{M}_{0,c}=W_c/\\lVert W_c\\rVert_2⟫, providing test-time anchors without accessing source training data. Dynamic-marginal OT: For each view, we solve an entropic OT assignment to the shared centroids under the cosine cost ⟪[\\mathbf{C}_t^V]_{ic}=1-\\cos(\\mathbf{z}_{t,i}^{V},\\mathbf{M}_{t,c})⟫ (⟪V\\in\\{A,B\\}⟫). With uniform sample marginals ⟪a_t=\\mathbf{1}_{n_t}/n_t\\in\\Delta^{n_t-1}⟫, we allow the centroid marginal to adapt conservatively to potential changes in target class prevalence. Specifically, we first estimate the batch-level target prior from stop-gradient predictions and maintain its exponential moving average: ⟪\\displaystyle \\begin{aligned} \\hat{\\pi}_{t} &= \\frac{1}{N_t} \\sum_{i=1}^{N_t} \\operatorname{sg}\\!\\left[ p_{\\theta_t}(\\cdot\\mid x_{t,i}) \\right],\\\\ \\bar{b}_t &= (1-\\rho)\\bar{b}_{t-1} + \\rho\\hat{\\pi}_{t}, \\qquad \\bar{b}_0=\\mathbf{1}_K/K, \\end{aligned}⟫ where ⟪\\rho=0.01⟫ and the uniform initialization and slow EMA suppress transient errors in ⟪\\hat{\\pi}_t⟫ during early adaptation. We then interpolate the estimated prior with the uniform marginal: ⟪\\displaystyle b_t = \\alpha_b\\bar{b}_t + (1-\\alpha_b)\\frac{\\mathbf{1}_K}{K},⟫ where ⟪\\alpha_b=0.01⟫ limits deviation from the uniform marginal. For ⟪u=\\mathbf{1}_K/K⟫, ⟪\\lVert b_t-u\\rVert_1\\le2\\alpha_b⟫ and ⟪b_{t,c}\\ge(1-\\alpha_b)/K⟫, enabling gradual adaptation without severe imbalance. The slow EMA mitigates early fluctuations, though persistent bias may affect the estimated prior. A tiny routed-away set limits target support, while an overly dominant one reduces trusted supervision. If ⟪\\mathcal{R}_t=\\varnothing⟫, the update is skipped and ⟪\\bar{b}_t=\\bar{b}_{t-1}⟫. The entropic OT plans are then obtained by solving: ⟪\\displaystyle \\gamma_{t,V}^{*} = \\arg\\min_{\\gamma\\in\\Pi(a_t,b_t)} \\langle\\gamma,\\mathbf{C}_t^V\\rangle_F + \\varepsilon_{\\mathrm{OT}} \\sum\\nolimits_{i,c} \\gamma_{ic}(\\log\\gamma_{ic}-1),⟫ where ⟪\\Pi(a_t,b_t)= \\{\\gamma\\in\\mathbb{R}_{+}^{n_t\\times K} \\mid \\gamma\\mathbf{1}_K=a_t,\\, \\gamma^\\top\\mathbf{1}_{n_t}=b_t\\}⟫ and ⟪\\varepsilon_{\\mathrm{OT}}>0⟫. In practice, ⟪\\gamma_{t,V}^{*}⟫ is efficiently computed via Sinkhorn–Knopp iterations and detached during backpropagation. Cross-view alignment & Centroid update: Instead of supervising each view independently with its assignment, we enforce cross-view structural consistency over soft transport distributions: ⟪\\displaystyle \\mathcal{L}_{\\mathrm{geo}} = \\big\\langle \\operatorname{sg}\\!\\left[\\gamma_{t,A}^{*}\\right], \\mathbf{C}_t^B \\big\\rangle_F + \\big\\langle \\operatorname{sg}\\!\\left[\\gamma_{t,B}^{*}\\right], \\mathbf{C}_t^A \\big\\rangle_F.⟫ This objective encourages cross-view agreement in soft sample-to-prototype alignment, providing a geometric regularizer that helps preserve target structure. Centroid Update & Drift Mitigation: Centroids are updated outside backpropagation using the accumulated OT-weighted feature statistics. Letting ⟪m_{t,c}=\\sum_{V\\in\\{A,B\\}}\\sum_{i=1}^{n_t}\\operatorname{sg}[\\gamma_{t,V}^{*}(i,c)]⟫, the prototype feature mean and momentum update are: ⟪\\displaystyle \\begin{aligned} \\bar{\\mathbf{z}}_{t,c} &= \\frac{1}{m_{t,c}} \\sum_{V\\in\\{A,B\\}}\\sum_{i=1}^{n_t} \\operatorname{sg}\\!\\left[\\gamma_{t,V}^{*}(i,c)\\right] \\mathbf{z}_{t,i}^{V}, \\\\ \\mathbf{M}_{t+1,c} &\\leftarrow \\operatorname{norm}\\!\\left(\\rho_{M}\\,\\mathbf{M}_{t,c} + (1 - \\rho_{M})\\,\\bar{\\mathbf{z}}_{t,c}\\right), \\end{aligned}⟫ where ⟪\\operatorname{norm}(v)=v/\\|v\\|_2⟫ and ⟪\\rho_{M}=0.99⟫. Under exact OT constraints, ⟪m_{t,c}=2b_{t,c}>0⟫. In the numerical implementation, we retain the previous centroid by setting ⟪\\bar{\\mathbf{z}}_{t,c}=\\mathbf{M}_{t,c}⟫ when the computed mass is negligible. Otherwise, the OT-weighted feature mean enters the momentum update in (16).",
      "diff": {
        "original": [
          {
            "kind": "same",
            "text": "After sample routing, "
          },
          {
            "kind": "del",
            "text": "DCF performs decoupled sample-side adaptation. The key point is that "
          },
          {
            "kind": "same",
            "text": "⟪\\mathcal{R}_t⟫ and ⟪\\mathcal{U}_t⟫ "
          },
          {
            "kind": "del",
            "text": "should not be optimized with the same supervision signal. "
          },
          {
            "kind": "same",
            "text": "Trusted "
          },
          {
            "kind": "del",
            "text": "samples "
          },
          {
            "kind": "same",
            "text": "are "
          },
          {
            "kind": "del",
            "text": "allowed to provide label-like consistency supervision because they are both low-entropy and stress-responsive. Routed-away samples are not discarded, but they are also not converted into "
          },
          {
            "kind": "same",
            "text": "hard "
          },
          {
            "kind": "del",
            "text": "pseudo-labels; instead, they are reused to repair target feature geometry. "
          },
          {
            "kind": "same",
            "text": "The resulting sample-side objective is ⟪\\mathcal{L}_{\\mathrm{trust}}+\\mathcal{L}_{\\mathrm{geo}}⟫, which produces the candidate update in (2). "
          },
          {
            "kind": "same",
            "text": "Trusted-evidence consistency learning. For each "
          },
          {
            "kind": "del",
            "text": "trusted sample "
          },
          {
            "kind": "same",
            "text": "⟪x_{t,i}\\in\\mathcal{R}_t⟫, we "
          },
          {
            "kind": "del",
            "text": "use three views: "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "del",
            "text": "clean view ⟪x_{t,i}⟫, "
          },
          {
            "kind": "same",
            "text": "a "
          },
          {
            "kind": "del",
            "text": "weak semantics-preserving augmentation ⟪x_{t,i}^w=\\mathcal{A}^w(x_{t,i})⟫"
          },
          {
            "kind": "same",
            "text": ", and "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "del",
            "text": "Fourier-stressed view ⟪x_{t,i}^s=\\mathcal{A}^s(x_{t,i})⟫"
          },
          {
            "kind": "same",
            "text": ". "
          },
          {
            "kind": "del",
            "text": "Let ⟪\\displaystyle \\mathcal{V}(x_{t,i})=\\{x_{t,i},x_{t,i}^w,x_{t,i}^s\\}.⟫ Each augmented view is trained to remain consistent with "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "del",
            "text": "original one: ⟪\\displaystyle \\mathrm{SoftEnt}_{\\theta_t}(x_{t,i},\\tilde{x}_{t,i}) \\coloneqq -\\sum_{k=1}^{K} p_{\\theta_t}(k\\mid x_{t,i}) \\log p_{\\theta_t}(k\\mid \\tilde{x}_{t,i}),⟫ where ⟪\\tilde{x}_{t,i}\\in\\mathcal{V}(x_{t,i})⟫. To make PCS weighting well-defined for small or degenerate trusted sets, we first compute the minimum and maximum PCS values within ⟪\\mathcal{R}_t⟫: ⟪\\displaystyle s_{\\min} = \\min_{x_{t,i}\\in\\mathcal{R}_t} s_{\\theta_t}(x_{t,i}), \\qquad s_{\\max} = \\max_{x_{t,i}\\in\\mathcal{R}_t} s_{\\theta_t}(x_{t,i}).⟫ We then define the normalized PCS weight as ⟪\\displaystyle w_t(x_{t,i}) = \\frac{ |\\mathcal{R}_t| \\, \\exp\\!\\Big( \\frac{\\tau\\,[s_{\\theta_t}(x_{t,i})-s_{\\min}]} {s_{\\max}-s_{\\min}+\\varepsilon_w} \\Big) }{ \\sum_{x_{t,j}\\in\\mathcal{R}_t} \\exp\\!\\Big( \\frac{\\tau\\,[s_{\\theta_t}(x_{t,j})-s_{\\min}]} {s_{\\max}-s_{\\min}+\\varepsilon_w} \\Big) }.⟫ Here ⟪\\tau⟫ controls the sharpness of PCS weighting, and ⟪\\varepsilon_w=10^{-6}⟫ prevents division by zero. The normalization keeps the average weight close to one, so PCS changes relative contributions without changing the overall loss scale. The trusted-evidence "
          },
          {
            "kind": "same",
            "text": "consistency loss is "
          },
          {
            "kind": "del",
            "text": "defined as the PCS-weighted consistency loss over the trusted set: ⟪\\displaystyle \\begin{split} \\mathcal{L}_{\\mathrm{trust}} &= \\frac{1}{|\\mathcal{R}_t|} \\sum_{x_{t}\\in\\mathcal{R}_t} w_t(x_{t}) \\\\ &\\quad \\times \\frac{1}{|\\mathcal{V}(x_{t})|} \\sum_{\\tilde{x}_{t}\\in\\mathcal{V}(x_{t})} \\mathrm{SoftEnt}_{\\theta_t}(x_{t},\\tilde{x}_{t}). \\end{split}⟫ When "
          },
          {
            "kind": "same",
            "text": "⟪|\\mathcal{R}_t|=0⟫"
          },
          {
            "kind": "del",
            "text": ", we set ⟪\\mathcal{L}_{\\mathrm{trust}}=0⟫"
          },
          {
            "kind": "same",
            "text": ". Routed-away geometry repair. "
          },
          {
            "kind": "del",
            "text": "The "
          },
          {
            "kind": "same",
            "text": "trusted "
          },
          {
            "kind": "del",
            "text": "objective prevents "
          },
          {
            "kind": "same",
            "text": "unreliable "
          },
          {
            "kind": "del",
            "text": "pseudo-labels from dominating adaptation, but routing also creates a second challenge: the "
          },
          {
            "kind": "same",
            "text": "routed-away samples "
          },
          {
            "kind": "del",
            "text": "still describe the evolving "
          },
          {
            "kind": "same",
            "text": "target "
          },
          {
            "kind": "del",
            "text": "distribution. Simply discarding them removes "
          },
          {
            "kind": "same",
            "text": "structural "
          },
          {
            "kind": "del",
            "text": "information "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "del",
            "text": "biases adaptation toward a small subset of confident samples. Therefore, "
          },
          {
            "kind": "same",
            "text": "DCF "
          },
          {
            "kind": "del",
            "text": "does not use "
          },
          {
            "kind": "same",
            "text": "⟪\\mathcal{U}_t⟫ "
          },
          {
            "kind": "del",
            "text": "for label-like supervision. Instead, "
          },
          {
            "kind": "same",
            "text": "Routed-away Geometry Repair (RGR) "
          },
          {
            "kind": "del",
            "text": "reuses these samples for geometry repair. The goal of RGR is to preserve target structural diversity without converting unreliable samples into hard pseudo-labels. We formulate this "
          },
          {
            "kind": "same",
            "text": "as "
          },
          {
            "kind": "del",
            "text": "an optimal-transport "
          },
          {
            "kind": "same",
            "text": "alignment "
          },
          {
            "kind": "del",
            "text": "problem between routed-away features and "
          },
          {
            "kind": "same",
            "text": "source-initialized class centroids. The "
          },
          {
            "kind": "del",
            "text": "transport "
          },
          {
            "kind": "same",
            "text": "constraints "
          },
          {
            "kind": "del",
            "text": "discourage assignments from collapsing to "
          },
          {
            "kind": "same",
            "text": "a "
          },
          {
            "kind": "del",
            "text": "few dominant classes, while source-initialized centroids provide stable anchors without requiring access to source training samples. We detail this repair procedure through the following internal steps. skip Feature "
          },
          {
            "kind": "same",
            "text": "concentration "
          },
          {
            "kind": "del",
            "text": "diagnostic. We quantify representation bias by "
          },
          {
            "kind": "same",
            "text": "the centroid entropy deficit "
          },
          {
            "kind": "del",
            "text": "⟪I(\\mathbf{Z})⟫"
          },
          {
            "kind": "same",
            "text": ". "
          },
          {
            "kind": "del",
            "text": "For a batch of normalized features ⟪\\mathbf{Z}=\\{\\mathbf{z}_i\\}_{i=1}^{B}⟫ with centroid ⟪\\bar{\\mathbf{z}}=\\frac{1}{B}\\sum_{i=1}^{B}\\mathbf{z}_i⟫, this diagnostic measures the entropy "
          },
          {
            "kind": "same",
            "text": "deficit "
          },
          {
            "kind": "del",
            "text": "of the centroid prediction: ⟪\\displaystyle I(\\mathbf{Z}) = \\log K + \\sum_{k=1}^{K} \\bar{p}_k \\log \\bar{p}_k,⟫ where ⟪\\bar{p} = \\operatorname{softmax}(c_{\\theta_t}(\\bar{\\mathbf{z}}))⟫, and ⟪c_{\\theta_t}⟫ denotes the classifier head applied to the feature centroid. A larger ⟪I(\\mathbf{Z})⟫ "
          },
          {
            "kind": "same",
            "text": "indicates "
          },
          {
            "kind": "del",
            "text": "that the centroid "
          },
          {
            "kind": "same",
            "text": "prediction "
          },
          {
            "kind": "del",
            "text": "is more concentrated on a small number of classes. This motivates using routed-away samples to repair target geometry rather than removing them from adaptation. skip Source-initialized centroids and routed-away features. Let ⟪n_t:=|\\mathcal{U}_t|⟫. We re-index the routed-away samples as ⟪\\displaystyle \\mathcal{U}_t=\\{u_{t,i}\\}_{i=1}^{n_t}.⟫ "
          },
          {
            "kind": "same",
            "text": "When "
          },
          {
            "kind": "del",
            "text": "⟪n_t=0⟫"
          },
          {
            "kind": "same",
            "text": ", we set ⟪\\mathcal{L}_{\\mathrm{geo}}=0⟫ and "
          },
          {
            "kind": "del",
            "text": "skip the OT computation. "
          },
          {
            "kind": "same",
            "text": "Otherwise, for "
          },
          {
            "kind": "del",
            "text": "each "
          },
          {
            "kind": "same",
            "text": "routed-away "
          },
          {
            "kind": "del",
            "text": "sample, "
          },
          {
            "kind": "same",
            "text": "we construct two "
          },
          {
            "kind": "del",
            "text": "independent weak "
          },
          {
            "kind": "same",
            "text": "stochastic "
          },
          {
            "kind": "del",
            "text": "views: ⟪\\displaystyle u_{t,i}^{A}=\\mathcal{A}^{w_1}(u_{t,i}), \\qquad u_{t,i}^{B}=\\mathcal{A}^{w_2}(u_{t,i}),⟫ where ⟪\\mathcal{A}^{w_1}⟫ "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "del",
            "text": "⟪\\mathcal{A}^{w_2}⟫ are semantics-preserving augmentations. "
          },
          {
            "kind": "same",
            "text": "Let "
          },
          {
            "kind": "del",
            "text": "⟪\\displaystyle \\mathbf{z}_{t,i}^{V} = \\frac{h_{\\theta_t}(u_{t,i}^{V})} {\\|h_{\\theta_t}(u_{t,i}^{V})\\|_2}, \\qquad V\\in\\{A,B\\},⟫ denote normalized features. We maintain shared class "
          },
          {
            "kind": "same",
            "text": "centroids "
          },
          {
            "kind": "del",
            "text": "⟪\\mathbf{M}_t\\in\\mathbb{R}^{K\\times d}⟫"
          },
          {
            "kind": "same",
            "text": ", "
          },
          {
            "kind": "del",
            "text": "initialized from the normalized "
          },
          {
            "kind": "same",
            "text": "source "
          },
          {
            "kind": "del",
            "text": "classifier weights: ⟪\\displaystyle \\mathbf{M}_{0,c} = \\frac{W_c}{\\|W_c\\|_2},⟫ where ⟪W_c⟫ is the classifier weight of class ⟪c⟫. This provides a source-free initialization of class prototypes at test time. skip "
          },
          {
            "kind": "same",
            "text": "Dynamic-marginal "
          },
          {
            "kind": "del",
            "text": "optimal transport. "
          },
          {
            "kind": "same",
            "text": "For each view, we "
          },
          {
            "kind": "del",
            "text": "compute "
          },
          {
            "kind": "same",
            "text": "an entropic OT assignment "
          },
          {
            "kind": "del",
            "text": "from routed-away features "
          },
          {
            "kind": "same",
            "text": "to the shared "
          },
          {
            "kind": "del",
            "text": "centroids. The "
          },
          {
            "kind": "same",
            "text": "cosine cost "
          },
          {
            "kind": "del",
            "text": "is ⟪\\displaystyle [\\mathbf{C}_t^V]_{ic} = 1-\\cos(\\mathbf{z}_{t,i}^{V},\\mathbf{M}_{t,c}), \\qquad V\\in\\{A,B\\}.⟫ Let ⟪a_t=\\mathbf{1}_{n_t}/n_t\\in\\Delta^{n_t-1}⟫ be the "
          },
          {
            "kind": "same",
            "text": "sample "
          },
          {
            "kind": "del",
            "text": "marginal. To make "
          },
          {
            "kind": "same",
            "text": "the centroid marginal "
          },
          {
            "kind": "del",
            "text": "compatible with possible label shift, "
          },
          {
            "kind": "same",
            "text": "we "
          },
          {
            "kind": "same",
            "text": "estimate the "
          },
          {
            "kind": "del",
            "text": "current "
          },
          {
            "kind": "same",
            "text": "target "
          },
          {
            "kind": "del",
            "text": "class "
          },
          {
            "kind": "same",
            "text": "prior from stop-gradient "
          },
          {
            "kind": "del",
            "text": "predictions: ⟪\\displaystyle \\hat{\\pi}_{t} = \\frac{1}{N_t} \\sum_{i=1}^{N_t} \\operatorname{sg}\\!\\left[p_{\\theta_t}(\\cdot\\mid x_{t,i})\\right],⟫ where ⟪\\operatorname{sg}[\\cdot]⟫ denotes stop-gradient. We "
          },
          {
            "kind": "same",
            "text": "maintain "
          },
          {
            "kind": "del",
            "text": "an "
          },
          {
            "kind": "same",
            "text": "exponential moving "
          },
          {
            "kind": "del",
            "text": "average of this prior: ⟪\\displaystyle \\bar{b}_t = (1-\\rho)\\bar{b}_{t-1} + \\rho\\hat{\\pi}_{t}, \\qquad \\bar{b}_0=\\frac{\\mathbf{1}_K}{K}.⟫ "
          },
          {
            "kind": "same",
            "text": "The "
          },
          {
            "kind": "del",
            "text": "final centroid marginal used in "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "same",
            "text": "OT "
          },
          {
            "kind": "del",
            "text": "constraints is ⟪\\displaystyle b_t = \\rho\\bar{b}_t + (1-\\rho)\\frac{\\mathbf{1}_K}{K}.⟫ The uniform component serves as an anti-collapse floor, discouraging routed-away samples from being concentrated on only a few categories. The transport plan for each view is "
          },
          {
            "kind": "same",
            "text": "obtained by "
          },
          {
            "kind": "del",
            "text": "⟪\\displaystyle \\begin{split} \\gamma_{t,V}^{*} &= \\arg\\min_{\\gamma\\in\\Pi(a_t,b_t)} \\Bigl\\langle \\gamma,\\mathbf{C}_t^V\\Bigr\\rangle_F \\\\ &\\quad + \\varepsilon_{\\mathrm{OT}}\\sum_{i,c}\\gamma_{ic}(\\log\\gamma_{ic}-1), \\qquad V\\in\\{A,B\\}, \\end{split}⟫ "
          },
          {
            "kind": "same",
            "text": "where "
          },
          {
            "kind": "del",
            "text": "⟪\\displaystyle \\Pi(a_t,b_t) = \\{\\gamma\\in\\mathbb{R}_{+}^{n_t\\times K} \\mid \\gamma\\mathbf{1}_K=a_t,\\; \\gamma^\\top\\mathbf{1}_{n_t}=b_t \\},⟫ "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "del",
            "text": "⟪\\varepsilon_{\\mathrm{OT}}>0⟫ "
          },
          {
            "kind": "same",
            "text": "is "
          },
          {
            "kind": "del",
            "text": "the entropic regularization strength. The resulting transport plans are "
          },
          {
            "kind": "same",
            "text": "detached "
          },
          {
            "kind": "del",
            "text": "in the "
          },
          {
            "kind": "same",
            "text": "alignment "
          },
          {
            "kind": "del",
            "text": "loss; gradients flow through the cross-view costs, but not through the Sinkhorn iterations, the transport constraints, or the dynamic marginal ⟪b_t⟫. skip Cross-view geometry repair. Rather than "
          },
          {
            "kind": "same",
            "text": "supervising each view "
          },
          {
            "kind": "del",
            "text": "by "
          },
          {
            "kind": "same",
            "text": "its "
          },
          {
            "kind": "del",
            "text": "own assignment or converting routed-away samples into hard pseudo-labels, "
          },
          {
            "kind": "same",
            "text": "we enforce cross-view "
          },
          {
            "kind": "same",
            "text": "consistency over "
          },
          {
            "kind": "del",
            "text": "the "
          },
          {
            "kind": "same",
            "text": "soft "
          },
          {
            "kind": "del",
            "text": "assignment distribution. The geometry-repair loss is ⟪\\displaystyle \\begin{split} \\mathcal{L}_{\\mathrm{geo}} &= \\left\\langle \\operatorname{sg}\\!\\left[\\gamma_{t,A}^{*}\\right], \\mathbf{C}_t^B \\right\\rangle_F \\\\ &\\quad + \\left\\langle \\operatorname{sg}\\!\\left[\\gamma_{t,B}^{*}\\right], \\mathbf{C}_t^A \\right\\rangle_F. \\end{split}⟫ "
          },
          {
            "kind": "same",
            "text": "This objective encourages "
          },
          {
            "kind": "del",
            "text": "two stochastic views of routed-away samples to agree on their structural relationship to the source-initialized centroids. By matching "
          },
          {
            "kind": "same",
            "text": "soft "
          },
          {
            "kind": "del",
            "text": "assignment geometry rather than hard pseudo-labels, RGR "
          },
          {
            "kind": "same",
            "text": "helps "
          },
          {
            "kind": "del",
            "text": "maintain structural diversity in the "
          },
          {
            "kind": "same",
            "text": "target "
          },
          {
            "kind": "del",
            "text": "representation. skip "
          },
          {
            "kind": "same",
            "text": "Centroid "
          },
          {
            "kind": "del",
            "text": "update. The centroids "
          },
          {
            "kind": "same",
            "text": "are updated outside backpropagation using the "
          },
          {
            "kind": "same",
            "text": "OT-weighted feature "
          },
          {
            "kind": "del",
            "text": "mean. First define "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "del",
            "text": "accumulated assignment mass ⟪\\displaystyle m_{t,c} = \\sum_{V\\in\\{A,B\\}}\\sum_{i=1}^{n_t} \\operatorname{sg}\\!\\left[\\gamma_{t,V}^{*}(i,c)\\right].⟫ When this "
          },
          {
            "kind": "same",
            "text": "mass is "
          },
          {
            "kind": "del",
            "text": "non-negligible, "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "del",
            "text": "centroid "
          },
          {
            "kind": "same",
            "text": "feature mean "
          },
          {
            "kind": "del",
            "text": "is ⟪\\displaystyle \\bar{\\mathbf{z}}_{t,c} = \\frac{1}{m_{t,c}} \\sum_{V\\in\\{A,B\\}}\\sum_{i=1}^{n_t} \\operatorname{sg}\\!\\left[\\gamma_{t,V}^{*}(i,c)\\right]\\, \\mathbf{z}_{t,i}^{V}.⟫ Then ⟪\\displaystyle \\mathbf{M}_{t+1,c} \\leftarrow \\operatorname{norm}\\!\\left((1-\\rho)\\,\\mathbf{M}_{t,c} + \\rho\\,\\bar{\\mathbf{z}}_{t,c}\\right).⟫ Here ⟪\\operatorname{norm}(v)=v/\\|v\\|_2⟫, which keeps centroid directions compatible with "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "del",
            "text": "cosine cost. If ⟪m_{t,c}⟫ is too small, we set ⟪\\bar{\\mathbf{z}}_{t,c}=\\mathbf{M}_{t,c}⟫, so the centroid remains unchanged up to normalization."
          }
        ],
        "revised": [
          {
            "kind": "same",
            "text": "After sample routing, "
          },
          {
            "kind": "same",
            "text": "⟪\\mathcal{R}_t⟫ and ⟪\\mathcal{U}_t⟫ "
          },
          {
            "kind": "add",
            "text": "receive decoupled supervisory signals. "
          },
          {
            "kind": "same",
            "text": "Trusted "
          },
          {
            "kind": "add",
            "text": "instances drive label-like consistency, while routed-away instances "
          },
          {
            "kind": "same",
            "text": "are "
          },
          {
            "kind": "add",
            "text": "repurposed for geometry repair rather than discarded or "
          },
          {
            "kind": "same",
            "text": "hard "
          },
          {
            "kind": "add",
            "text": "pseudo-labeled. "
          },
          {
            "kind": "same",
            "text": "The resulting sample-side objective is ⟪\\mathcal{L}_{\\mathrm{trust}}+\\mathcal{L}_{\\mathrm{geo}}⟫, which produces the candidate update in (2). "
          },
          {
            "kind": "add",
            "text": "If ⟪|\\mathcal{U}_t|=0⟫, ⟪\\mathcal{L}_{\\mathrm{geo}}⟫ is bypassed; if ⟪|\\mathcal{R}_t|=0⟫, the entire adaptation step is bypassed and prediction uses the current model. "
          },
          {
            "kind": "same",
            "text": "Trusted-evidence consistency learning. For each "
          },
          {
            "kind": "same",
            "text": "⟪x_{t,i}\\in\\mathcal{R}_t⟫, we "
          },
          {
            "kind": "add",
            "text": "construct a multi-view set ⟪\\mathcal{V}(x_{t,i})=\\{x_{t,i}, \\mathcal{A}^w(x_{t,i}), \\mathcal{A}^{s}(x_{t,i})\\}⟫, where ⟪\\mathcal{A}^w⟫ is weak augmentation [12] and ⟪\\mathcal{A}^{s}⟫ is "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "add",
            "text": "Fourier stress probe ((4)). We assign each trusted instance "
          },
          {
            "kind": "same",
            "text": "a "
          },
          {
            "kind": "add",
            "text": "normalized PCS weight: ⟪\\displaystyle w_t(x_{t,i}) = \\frac{|\\mathcal{R}_t| \\exp\\!\\big(\\frac{\\tau\\,[s_{\\theta_t}(x_{t,i})-s_{\\min}]}{s_{\\max}-s_{\\min}+\\varepsilon_w}\\big)}{\\sum_{x_{t,j}\\in\\mathcal{R}_t} \\exp\\!\\big(\\frac{\\tau\\,[s_{\\theta_t}(x_{t,j})-s_{\\min}]}{s_{\\max}-s_{\\min}+\\varepsilon_w}\\big)},⟫ where ⟪\\tau⟫ modulates sharpness, ⟪\\varepsilon_w=10^{-6}⟫"
          },
          {
            "kind": "same",
            "text": ", and "
          },
          {
            "kind": "add",
            "text": "⟪s_{\\min}, s_{\\max}⟫ are "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "add",
            "text": "PCS extrema in ⟪\\mathcal{R}_t⟫"
          },
          {
            "kind": "same",
            "text": ". "
          },
          {
            "kind": "add",
            "text": "With cross-entropy ⟪\\mathrm{SoftEnt}_{\\theta_t}(u,v) \\coloneqq -\\sum_{k=1}^{K} p_{\\theta_t}(k\\mid u) \\log p_{\\theta_t}(k\\mid v)⟫, "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "same",
            "text": "consistency loss is "
          },
          {
            "kind": "add",
            "text": "computed as: ⟪\\displaystyle \\mathcal{L}_{\\mathrm{trust}} = \\frac{1}{|\\mathcal{R}_t|} \\sum_{x_{t,i}\\in\\mathcal{R}_t} \\frac{w_t(x_{t,i})}{|\\mathcal{V}(x_{t,i})|} \\sum_{\\tilde{x}\\in\\mathcal{V}(x_{t,i})} \\mathrm{SoftEnt}_{\\theta_t}(x_{t,i},\\tilde{x}),⟫ with ⟪\\mathcal{L}_{\\mathrm{trust}}=0⟫ if "
          },
          {
            "kind": "same",
            "text": "⟪|\\mathcal{R}_t|=0⟫"
          },
          {
            "kind": "same",
            "text": ". Routed-away geometry repair. "
          },
          {
            "kind": "add",
            "text": "While "
          },
          {
            "kind": "same",
            "text": "trusted "
          },
          {
            "kind": "add",
            "text": "filtering limits "
          },
          {
            "kind": "same",
            "text": "unreliable "
          },
          {
            "kind": "add",
            "text": "pseudo-label supervision, discarding "
          },
          {
            "kind": "same",
            "text": "routed-away samples "
          },
          {
            "kind": "add",
            "text": "removes "
          },
          {
            "kind": "same",
            "text": "target "
          },
          {
            "kind": "same",
            "text": "structural "
          },
          {
            "kind": "add",
            "text": "context (O2) "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "add",
            "text": "may exacerbate representation bias. To exploit this context without hard pseudo-labels, "
          },
          {
            "kind": "same",
            "text": "DCF "
          },
          {
            "kind": "add",
            "text": "repurposes "
          },
          {
            "kind": "same",
            "text": "⟪\\mathcal{U}_t⟫ "
          },
          {
            "kind": "add",
            "text": "through "
          },
          {
            "kind": "same",
            "text": "Routed-away Geometry Repair (RGR) "
          },
          {
            "kind": "same",
            "text": "as "
          },
          {
            "kind": "add",
            "text": "optimal transport (OT) "
          },
          {
            "kind": "same",
            "text": "alignment "
          },
          {
            "kind": "add",
            "text": "against "
          },
          {
            "kind": "same",
            "text": "source-initialized class centroids. The "
          },
          {
            "kind": "add",
            "text": "marginal "
          },
          {
            "kind": "same",
            "text": "constraints "
          },
          {
            "kind": "add",
            "text": "regulate aggregate class allocation, while source classifier weights provide initial semantic references without source data. Diagnostic & Prototypes: For "
          },
          {
            "kind": "same",
            "text": "a "
          },
          {
            "kind": "add",
            "text": "feature set ⟪\\mathbf{Z}=\\{\\mathbf{z}_i\\}_{i=1}^{B}⟫ with ⟪B=|\\mathbf{Z}|⟫, we assess prediction "
          },
          {
            "kind": "same",
            "text": "concentration "
          },
          {
            "kind": "add",
            "text": "via "
          },
          {
            "kind": "same",
            "text": "the centroid entropy deficit "
          },
          {
            "kind": "add",
            "text": "⟪I(\\mathbf{Z})=\\ln K+\\sum_{k=1}^{K}\\bar{p}_k\\ln\\bar{p}_k⟫, where ⟪\\bar{\\mathbf{z}}=\\frac{1}{B}\\sum_{i=1}^{B}\\mathbf{z}_i⟫ and ⟪\\bar{\\mathbf{p}}=\\operatorname{softmax}(c_{\\theta_t}(\\bar{\\mathbf{z}}))⟫"
          },
          {
            "kind": "same",
            "text": ". "
          },
          {
            "kind": "add",
            "text": "A large "
          },
          {
            "kind": "same",
            "text": "deficit "
          },
          {
            "kind": "same",
            "text": "indicates "
          },
          {
            "kind": "add",
            "text": "severe "
          },
          {
            "kind": "same",
            "text": "prediction "
          },
          {
            "kind": "add",
            "text": "concentration, motivating geometric regularization. "
          },
          {
            "kind": "same",
            "text": "When "
          },
          {
            "kind": "add",
            "text": "⟪n_t:=|\\mathcal{U}_t|=0⟫"
          },
          {
            "kind": "same",
            "text": ", we set ⟪\\mathcal{L}_{\\mathrm{geo}}=0⟫ and "
          },
          {
            "kind": "add",
            "text": "retain ⟪\\mathbf{M}_{t+1}=\\mathbf{M}_t⟫. "
          },
          {
            "kind": "same",
            "text": "Otherwise, for "
          },
          {
            "kind": "same",
            "text": "routed-away "
          },
          {
            "kind": "add",
            "text": "samples "
          },
          {
            "kind": "same",
            "text": "we construct two "
          },
          {
            "kind": "same",
            "text": "stochastic "
          },
          {
            "kind": "add",
            "text": "views ⟪u_{t,i}^{V}=\\mathcal{A}^{w_V}(u_{t,i})⟫ (⟪V\\in\\{A,B\\}⟫) "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "add",
            "text": "extract normalized features ⟪\\mathbf{z}_{t,i}^{V}=h_{\\theta_t}(u_{t,i}^{V})/\\|h_{\\theta_t}(u_{t,i}^{V})\\|_2⟫. "
          },
          {
            "kind": "same",
            "text": "Let "
          },
          {
            "kind": "add",
            "text": "⟪W_c⟫ be the ⟪c⟫-th row of the frozen source classifier. Shared "
          },
          {
            "kind": "same",
            "text": "centroids "
          },
          {
            "kind": "add",
            "text": "start from ⟪\\mathbf{M}_1\\leftarrow\\mathbf{M}_0⟫"
          },
          {
            "kind": "same",
            "text": ", "
          },
          {
            "kind": "add",
            "text": "with ⟪\\mathbf{M}_{0,c}=W_c/\\lVert W_c\\rVert_2⟫, providing test-time anchors without accessing "
          },
          {
            "kind": "same",
            "text": "source "
          },
          {
            "kind": "add",
            "text": "training data. "
          },
          {
            "kind": "same",
            "text": "Dynamic-marginal "
          },
          {
            "kind": "add",
            "text": "OT: "
          },
          {
            "kind": "same",
            "text": "For each view, we "
          },
          {
            "kind": "add",
            "text": "solve "
          },
          {
            "kind": "same",
            "text": "an entropic OT assignment "
          },
          {
            "kind": "same",
            "text": "to the shared "
          },
          {
            "kind": "add",
            "text": "centroids under the "
          },
          {
            "kind": "same",
            "text": "cosine cost "
          },
          {
            "kind": "add",
            "text": "⟪[\\mathbf{C}_t^V]_{ic}=1-\\cos(\\mathbf{z}_{t,i}^{V},\\mathbf{M}_{t,c})⟫ (⟪V\\in\\{A,B\\}⟫). With uniform "
          },
          {
            "kind": "same",
            "text": "sample "
          },
          {
            "kind": "add",
            "text": "marginals ⟪a_t=\\mathbf{1}_{n_t}/n_t\\in\\Delta^{n_t-1}⟫, we allow "
          },
          {
            "kind": "same",
            "text": "the centroid marginal "
          },
          {
            "kind": "add",
            "text": "to adapt conservatively to potential changes in target class prevalence. Specifically, "
          },
          {
            "kind": "same",
            "text": "we "
          },
          {
            "kind": "add",
            "text": "first "
          },
          {
            "kind": "same",
            "text": "estimate the "
          },
          {
            "kind": "add",
            "text": "batch-level "
          },
          {
            "kind": "same",
            "text": "target "
          },
          {
            "kind": "same",
            "text": "prior from stop-gradient "
          },
          {
            "kind": "add",
            "text": "predictions and "
          },
          {
            "kind": "same",
            "text": "maintain "
          },
          {
            "kind": "add",
            "text": "its "
          },
          {
            "kind": "same",
            "text": "exponential moving "
          },
          {
            "kind": "add",
            "text": "average: ⟪\\displaystyle \\begin{aligned} \\hat{\\pi}_{t} &= \\frac{1}{N_t} \\sum_{i=1}^{N_t} \\operatorname{sg}\\!\\left[ p_{\\theta_t}(\\cdot\\mid x_{t,i}) \\right],\\\\ \\bar{b}_t &= (1-\\rho)\\bar{b}_{t-1} + \\rho\\hat{\\pi}_{t}, \\qquad \\bar{b}_0=\\mathbf{1}_K/K, \\end{aligned}⟫ where ⟪\\rho=0.01⟫ and the uniform initialization and slow EMA suppress transient errors in ⟪\\hat{\\pi}_t⟫ during early adaptation. We then interpolate the estimated prior with the uniform marginal: ⟪\\displaystyle b_t = \\alpha_b\\bar{b}_t + (1-\\alpha_b)\\frac{\\mathbf{1}_K}{K},⟫ where ⟪\\alpha_b=0.01⟫ limits deviation from the uniform marginal. For ⟪u=\\mathbf{1}_K/K⟫, ⟪\\lVert b_t-u\\rVert_1\\le2\\alpha_b⟫ and ⟪b_{t,c}\\ge(1-\\alpha_b)/K⟫, enabling gradual adaptation without severe imbalance. "
          },
          {
            "kind": "same",
            "text": "The "
          },
          {
            "kind": "add",
            "text": "slow EMA mitigates early fluctuations, though persistent bias may affect "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "add",
            "text": "estimated prior. A tiny routed-away set limits target support, while an overly dominant one reduces trusted supervision. If ⟪\\mathcal{R}_t=\\varnothing⟫, the update is skipped and ⟪\\bar{b}_t=\\bar{b}_{t-1}⟫. The entropic "
          },
          {
            "kind": "same",
            "text": "OT "
          },
          {
            "kind": "add",
            "text": "plans are then "
          },
          {
            "kind": "same",
            "text": "obtained by "
          },
          {
            "kind": "add",
            "text": "solving: ⟪\\displaystyle \\gamma_{t,V}^{*} = \\arg\\min_{\\gamma\\in\\Pi(a_t,b_t)} \\langle\\gamma,\\mathbf{C}_t^V\\rangle_F + \\varepsilon_{\\mathrm{OT}} \\sum\\nolimits_{i,c} \\gamma_{ic}(\\log\\gamma_{ic}-1),⟫ "
          },
          {
            "kind": "same",
            "text": "where "
          },
          {
            "kind": "add",
            "text": "⟪\\Pi(a_t,b_t)= \\{\\gamma\\in\\mathbb{R}_{+}^{n_t\\times K} \\mid \\gamma\\mathbf{1}_K=a_t,\\, \\gamma^\\top\\mathbf{1}_{n_t}=b_t\\}⟫ "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "add",
            "text": "⟪\\varepsilon_{\\mathrm{OT}}>0⟫. In practice, ⟪\\gamma_{t,V}^{*}⟫ "
          },
          {
            "kind": "same",
            "text": "is "
          },
          {
            "kind": "add",
            "text": "efficiently computed via Sinkhorn–Knopp iterations and "
          },
          {
            "kind": "same",
            "text": "detached "
          },
          {
            "kind": "add",
            "text": "during backpropagation. Cross-view "
          },
          {
            "kind": "same",
            "text": "alignment "
          },
          {
            "kind": "add",
            "text": "& Centroid update: Instead of "
          },
          {
            "kind": "same",
            "text": "supervising each view "
          },
          {
            "kind": "add",
            "text": "independently with "
          },
          {
            "kind": "same",
            "text": "its "
          },
          {
            "kind": "add",
            "text": "assignment, "
          },
          {
            "kind": "same",
            "text": "we enforce cross-view "
          },
          {
            "kind": "add",
            "text": "structural "
          },
          {
            "kind": "same",
            "text": "consistency over "
          },
          {
            "kind": "same",
            "text": "soft "
          },
          {
            "kind": "add",
            "text": "transport distributions: ⟪\\displaystyle \\mathcal{L}_{\\mathrm{geo}} = \\big\\langle \\operatorname{sg}\\!\\left[\\gamma_{t,A}^{*}\\right], \\mathbf{C}_t^B \\big\\rangle_F + \\big\\langle \\operatorname{sg}\\!\\left[\\gamma_{t,B}^{*}\\right], \\mathbf{C}_t^A \\big\\rangle_F.⟫ "
          },
          {
            "kind": "same",
            "text": "This objective encourages "
          },
          {
            "kind": "add",
            "text": "cross-view agreement in "
          },
          {
            "kind": "same",
            "text": "soft "
          },
          {
            "kind": "add",
            "text": "sample-to-prototype alignment, providing a geometric regularizer that "
          },
          {
            "kind": "same",
            "text": "helps "
          },
          {
            "kind": "add",
            "text": "preserve "
          },
          {
            "kind": "same",
            "text": "target "
          },
          {
            "kind": "add",
            "text": "structure. "
          },
          {
            "kind": "same",
            "text": "Centroid "
          },
          {
            "kind": "add",
            "text": "Update & Drift Mitigation: Centroids "
          },
          {
            "kind": "same",
            "text": "are updated outside backpropagation using the "
          },
          {
            "kind": "add",
            "text": "accumulated "
          },
          {
            "kind": "same",
            "text": "OT-weighted feature "
          },
          {
            "kind": "add",
            "text": "statistics. Letting ⟪m_{t,c}=\\sum_{V\\in\\{A,B\\}}\\sum_{i=1}^{n_t}\\operatorname{sg}[\\gamma_{t,V}^{*}(i,c)]⟫, "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "add",
            "text": "prototype feature mean and momentum update are: ⟪\\displaystyle \\begin{aligned} \\bar{\\mathbf{z}}_{t,c} &= \\frac{1}{m_{t,c}} \\sum_{V\\in\\{A,B\\}}\\sum_{i=1}^{n_t} \\operatorname{sg}\\!\\left[\\gamma_{t,V}^{*}(i,c)\\right] \\mathbf{z}_{t,i}^{V}, \\\\ \\mathbf{M}_{t+1,c} &\\leftarrow \\operatorname{norm}\\!\\left(\\rho_{M}\\,\\mathbf{M}_{t,c} + (1 - \\rho_{M})\\,\\bar{\\mathbf{z}}_{t,c}\\right), \\end{aligned}⟫ where ⟪\\operatorname{norm}(v)=v/\\|v\\|_2⟫ and ⟪\\rho_{M}=0.99⟫. Under exact OT constraints, ⟪m_{t,c}=2b_{t,c}>0⟫. In the numerical implementation, we retain the previous centroid by setting ⟪\\bar{\\mathbf{z}}_{t,c}=\\mathbf{M}_{t,c}⟫ when the computed "
          },
          {
            "kind": "same",
            "text": "mass is "
          },
          {
            "kind": "add",
            "text": "negligible. Otherwise, "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "add",
            "text": "OT-weighted "
          },
          {
            "kind": "same",
            "text": "feature mean "
          },
          {
            "kind": "add",
            "text": "enters "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "add",
            "text": "momentum update in (16)."
          }
        ]
      }
    },
    {
      "title": "Layer retention",
      "originalPage": 6,
      "revisedPage": 5,
      "before": "The decoupled sample-side adaptation step produces a candidate update ⟪\\theta_t^{+}⟫, but this update should not be accepted uniformly across all layers. Under temporally correlated shifts, different layers can have different source sensitivity: some layers may need plasticity to absorb low-level appearance changes, whereas deeper semantic layers may suffer from forgetting if the same update is retained without constraint. Thus, the final control decision is not whether to adapt, but where the candidate update should persist. To implement this decision, Curvature-aware Layer Retention (CLR) performs curvature-aware layer retention. For each layer, it balances two objectives: preserving the candidate update when the layer remains source-compatible, and recovering toward the source anchor when the current curvature profile indicates high mismatch. This yields a layer-wise proximal problem whose closed-form solution is a curvature-weighted barycenter between the candidate parameters and the source parameters. Curvature-proximal formulation. For each layer ⟪l⟫, we choose ⟪\\theta_{t+1}^{l}⟫ by solving ⟪\\displaystyle \\min_{\\{\\theta_{t+1}^{l}\\}_{l=1}^{L}} \\sum_{l=1}^{L} \\Bigg( \\underbrace{ \\frac{\\mu_t^l}{2} \\|\\theta_{t+1}^{l}-\\theta_t^{+,l}\\|^2_{\\widetilde{I}_t^{l}} }_{\\text{preserve plasticity}} + \\underbrace{ \\frac{1-\\mu_t^l}{2} \\|\\theta_{t+1}^{l}-\\theta_0^{l}\\|^2_{\\widetilde{I}_0^{l}} }_{\\text{prevent forgetting}} \\Bigg),⟫ where ⟪\\|v\\|_I^2=v^\\top I v⟫. Here ⟪I_t^l⟫ and ⟪I_0^l⟫ denote diagonal curvature proxies for the candidate model and source model, respectively, and ⟪\\displaystyle \\widetilde{I}_t^l := I_t^l + \\varepsilon_{\\mathrm{ret}}\\mathbf{1}, \\qquad \\widetilde{I}_0^l := I_0^l + \\varepsilon_{\\mathrm{ret}}\\mathbf{1},⟫ with ⟪\\varepsilon_{\\mathrm{ret}}=10^{-6}⟫. The layer-wise gate ⟪\\mu_t^l\\in(0,1]⟫ controls how much of the candidate update is retained. A larger ⟪\\mu_t^l⟫ keeps the layer closer to ⟪\\theta_t^{+,l}⟫, while a smaller ⟪\\mu_t^l⟫ pulls it closer to the source anchor ⟪\\theta_0^l⟫. Closed-form retention update. Since (20) is separable across layers and coordinates, the solution is ⟪\\displaystyle \\theta_{t+1}^{l} = \\frac{ \\mu_t^{l} \\widetilde{I}_t^{l}\\odot \\theta_t^{+,l} + (1-\\mu_t^{l}) \\widetilde{I}_0^{l}\\odot \\theta_0^{l} }{ \\mu_t^{l} \\widetilde{I}_t^{l} + (1-\\mu_t^{l}) \\widetilde{I}_0^{l} },⟫ where ⟪\\odot⟫ and division are applied element-wise. This update preserves the candidate parameters when the layer is source-compatible and restores the source anchor when the layer exhibits strong mismatch. Curvature proxy and retention gate. The raw curvature proxy for the candidate model is estimated from pseudo-label gradients on the current batch: ⟪\\displaystyle I_t^{l} = \\frac{1}{N_t} \\sum_{i=1}^{N_t} g_t^{l}(x_{t,i})\\odot g_t^{l}(x_{t,i}),⟫ where ⟪g_t^{l}(x_{t,i})=\\nabla_{\\theta_t^{+,l}}\\log p_{\\theta_t^{+}}(\\hat{y}_t^{+}(x_{t,i})\\mid x_{t,i})⟫, ⟪\\hat{y}_t^{+}(x_{t,i})=\\arg\\max_y p_{\\theta_t^{+}}(y\\mid x_{t,i}).⟫ The source curvature proxy ⟪I_0^l⟫ is computed analogously at the source parameters ⟪\\theta_0⟫ on the same unlabeled batch, which preserves the source-free test-time setting. The layer-wise retention gate is ⟪\\displaystyle \\mu_t^{l} = \\mu_0 \\exp\\!\\left( - \\frac{ \\|\\widetilde{I}_t^{l}-\\widetilde{I}_0^{l}\\|_2^2 }{d_l} \\right),⟫ where ⟪d_l=\\dim(\\theta^l)⟫ and ⟪\\mu_0⟫ is the maximum retention strength. When the candidate and source curvature profiles are similar, ⟪\\mu_t^l⟫ is large and the candidate update is retained. When the mismatch is large, ⟪\\mu_t^l⟫ decreases and the layer is pulled back toward the source model. In this way, CLR turns the sample-side adaptation step into a layer-aware update: useful plasticity is preserved where it is safe, while source-sensitive drift is suppressed before it can accumulate over time.",
      "after": "The decoupled sample-side adaptation step produces a candidate update ⟪\\theta_t^{+}⟫ retained selectively across layers. Under temporally correlated shifts, source sensitivity varies across depth (O3): some layers benefit from plasticity, whereas others are prone to representational drift. Accordingly, Curvature-aware Layer Retention (CLR) performs curvature-aware layer retention, preserving updates in source-compatible layers while anchoring high-mismatch layers to the source model. This yields a layer-wise proximal problem with a closed-form, proxy-weighted barycenter of the candidate and source parameters. Curvature-proximal formulation. For each layer ⟪l⟫, we choose ⟪\\theta_{t+1}^{l}⟫ by solving ⟪\\displaystyle \\min_{\\{\\theta_{t+1}^{l}\\}_{l=1}^{L}} \\sum_{l=1}^{L} \\Bigg( \\underbrace{ \\frac{\\mu_t^l}{2} \\|\\theta_{t+1}^{l}-\\theta_t^{+,l}\\|^2_{\\widetilde{I}_t^{l}} }_{\\text{preserve plasticity}} + \\underbrace{ \\frac{1-\\mu_t^l}{2} \\|\\theta_{t+1}^{l}-\\theta_0^{l}\\|^2_{\\widetilde{I}_0^{l}} }_{\\text{prevent forgetting}} \\Bigg),⟫ where ⟪\\|v\\|_I^2:=\\sum_j I_jv_j^2⟫. Here ⟪I_t^l,I_0^l\\in\\mathbb{R}_+^{d_l}⟫ denote non-negative diagonal curvature-aware proxy vectors for the candidate and source models, respectively, and ⟪\\displaystyle \\widetilde{I}_t^l := I_t^l + \\varepsilon_{\\mathrm{ret}}\\mathbf{1}, \\qquad \\widetilde{I}_0^l := I_0^l + \\varepsilon_{\\mathrm{ret}}\\mathbf{1},⟫ with ⟪\\varepsilon_{\\mathrm{ret}}=10^{-6}⟫. The layer-wise gate ⟪\\mu_t^l\\in(0,1]⟫ controls how much of the candidate update is retained. A larger ⟪\\mu_t^l⟫ keeps the layer closer to ⟪\\theta_t^{+,l}⟫, while a smaller ⟪\\mu_t^l⟫ pulls it closer to the source anchor ⟪\\theta_0^l⟫. Closed-form retention update. Since (17) is separable across layers and coordinates, the solution is ⟪\\displaystyle \\theta_{t+1}^{l} = \\frac{ \\mu_t^{l} \\widetilde{I}_t^{l}\\odot \\theta_t^{+,l} + (1-\\mu_t^{l}) \\widetilde{I}_0^{l}\\odot \\theta_0^{l} }{ \\mu_t^{l} \\widetilde{I}_t^{l} + (1-\\mu_t^{l}) \\widetilde{I}_0^{l} },⟫ where ⟪\\odot⟫ and division are applied element-wise. Curvature-aware proxy and retention gate. The default curvature-aware proxy for the candidate model is estimated from pseudo-label gradients on the current batch: ⟪\\displaystyle I_t^{l} = \\frac{1}{N_t} \\sum_{i=1}^{N_t} g_t^{l}(x_{t,i})\\odot g_t^{l}(x_{t,i}),⟫ where ⟪g_t^{l}(x_{t,i})=\\nabla_{\\theta_t^{+,l}}\\log p_{\\theta_t^{+}}(\\hat{y}_t^{+}(x_{t,i})\\mid x_{t,i})⟫ and ⟪\\hat{y}_t^{+}(x_{t,i})=\\arg\\max_y p_{\\theta_t^{+}}(y\\mid x_{t,i})⟫. Thus, ⟪I_t^l⟫ averages element-wise squared per-sample gradients. The source proxy ⟪I_0^l⟫ is computed analogously at ⟪\\theta_0⟫ on the same unlabeled batch ⟪x_t⟫ with the time index omitted for brevity. The layer-wise retention gate is ⟪\\displaystyle \\mu_t^{l} = \\mu_0 \\exp\\!\\left( - \\frac{ \\|\\widetilde{I}_t^{l}-\\widetilde{I}_0^{l}\\|_2^2 }{d_l} \\right),⟫ where ⟪d_l=\\dim(\\theta^l)⟫, and ⟪\\mu_0⟫ is the maximum retention gate. Similar curvature-aware proxy profiles yield a large ⟪\\mu_t^l⟫ and retain the candidate update, whereas mismatch lowers ⟪\\mu_t^l⟫ and anchors the layer toward the source model. Thus, CLR preserves safe plasticity while suppressing source-sensitive drift.",
      "diff": {
        "original": [
          {
            "kind": "same",
            "text": "The decoupled sample-side adaptation step produces a candidate update "
          },
          {
            "kind": "del",
            "text": "⟪\\theta_t^{+}⟫, but this update should not be accepted uniformly "
          },
          {
            "kind": "same",
            "text": "across "
          },
          {
            "kind": "del",
            "text": "all "
          },
          {
            "kind": "same",
            "text": "layers. Under temporally correlated shifts, "
          },
          {
            "kind": "del",
            "text": "different layers can have different "
          },
          {
            "kind": "same",
            "text": "source "
          },
          {
            "kind": "del",
            "text": "sensitivity: "
          },
          {
            "kind": "same",
            "text": "some layers "
          },
          {
            "kind": "del",
            "text": "may need plasticity "
          },
          {
            "kind": "same",
            "text": "to "
          },
          {
            "kind": "del",
            "text": "absorb low-level appearance changes, whereas deeper semantic layers may suffer from forgetting if the same update is retained without constraint. Thus, the final control decision is not whether to adapt, but where the candidate update should persist. To implement this decision, "
          },
          {
            "kind": "same",
            "text": "Curvature-aware Layer Retention (CLR) performs curvature-aware layer "
          },
          {
            "kind": "del",
            "text": "retention. For each layer, it balances two objectives: "
          },
          {
            "kind": "same",
            "text": "preserving "
          },
          {
            "kind": "del",
            "text": "the candidate update when the layer remains source-compatible, and recovering toward "
          },
          {
            "kind": "same",
            "text": "the source "
          },
          {
            "kind": "del",
            "text": "anchor when the current curvature profile indicates high mismatch. "
          },
          {
            "kind": "same",
            "text": "This yields a layer-wise proximal problem "
          },
          {
            "kind": "del",
            "text": "whose closed-form solution is "
          },
          {
            "kind": "same",
            "text": "a "
          },
          {
            "kind": "del",
            "text": "curvature-weighted "
          },
          {
            "kind": "same",
            "text": "barycenter "
          },
          {
            "kind": "del",
            "text": "between "
          },
          {
            "kind": "same",
            "text": "the candidate "
          },
          {
            "kind": "del",
            "text": "parameters "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "del",
            "text": "the "
          },
          {
            "kind": "same",
            "text": "source parameters. Curvature-proximal formulation. For each layer ⟪l⟫, we choose ⟪\\theta_{t+1}^{l}⟫ by solving ⟪\\displaystyle \\min_{\\{\\theta_{t+1}^{l}\\}_{l=1}^{L}} \\sum_{l=1}^{L} \\Bigg( \\underbrace{ \\frac{\\mu_t^l}{2} \\|\\theta_{t+1}^{l}-\\theta_t^{+,l}\\|^2_{\\widetilde{I}_t^{l}} }_{\\text{preserve plasticity}} + \\underbrace{ \\frac{1-\\mu_t^l}{2} \\|\\theta_{t+1}^{l}-\\theta_0^{l}\\|^2_{\\widetilde{I}_0^{l}} }_{\\text{prevent forgetting}} \\Bigg),⟫ where "
          },
          {
            "kind": "del",
            "text": "⟪\\|v\\|_I^2=v^\\top I v⟫"
          },
          {
            "kind": "same",
            "text": ". Here "
          },
          {
            "kind": "del",
            "text": "⟪I_t^l⟫ and ⟪I_0^l⟫ "
          },
          {
            "kind": "same",
            "text": "denote "
          },
          {
            "kind": "same",
            "text": "diagonal "
          },
          {
            "kind": "del",
            "text": "curvature proxies "
          },
          {
            "kind": "same",
            "text": "for the candidate "
          },
          {
            "kind": "del",
            "text": "model "
          },
          {
            "kind": "same",
            "text": "and source "
          },
          {
            "kind": "del",
            "text": "model, "
          },
          {
            "kind": "same",
            "text": "respectively, and ⟪\\displaystyle \\widetilde{I}_t^l := I_t^l + \\varepsilon_{\\mathrm{ret}}\\mathbf{1}, \\qquad \\widetilde{I}_0^l := I_0^l + \\varepsilon_{\\mathrm{ret}}\\mathbf{1},⟫ with ⟪\\varepsilon_{\\mathrm{ret}}=10^{-6}⟫. The layer-wise gate ⟪\\mu_t^l\\in(0,1]⟫ controls how much of the candidate update is retained. A larger ⟪\\mu_t^l⟫ keeps the layer closer to ⟪\\theta_t^{+,l}⟫, while a smaller ⟪\\mu_t^l⟫ pulls it closer to the source anchor ⟪\\theta_0^l⟫. Closed-form retention update. Since "
          },
          {
            "kind": "del",
            "text": "(20) "
          },
          {
            "kind": "same",
            "text": "is separable across layers and coordinates, the solution is ⟪\\displaystyle \\theta_{t+1}^{l} = \\frac{ \\mu_t^{l} \\widetilde{I}_t^{l}\\odot \\theta_t^{+,l} + (1-\\mu_t^{l}) \\widetilde{I}_0^{l}\\odot \\theta_0^{l} }{ \\mu_t^{l} \\widetilde{I}_t^{l} + (1-\\mu_t^{l}) \\widetilde{I}_0^{l} },⟫ where ⟪\\odot⟫ and division are applied element-wise. "
          },
          {
            "kind": "del",
            "text": "This update preserves the candidate parameters when the layer is source-compatible and restores the source anchor when the layer exhibits strong mismatch. Curvature "
          },
          {
            "kind": "same",
            "text": "proxy and retention gate. The "
          },
          {
            "kind": "del",
            "text": "raw curvature "
          },
          {
            "kind": "same",
            "text": "proxy for the candidate model is estimated from pseudo-label gradients on the current batch: ⟪\\displaystyle I_t^{l} = \\frac{1}{N_t} \\sum_{i=1}^{N_t} g_t^{l}(x_{t,i})\\odot g_t^{l}(x_{t,i}),⟫ where "
          },
          {
            "kind": "del",
            "text": "⟪g_t^{l}(x_{t,i})=\\nabla_{\\theta_t^{+,l}}\\log p_{\\theta_t^{+}}(\\hat{y}_t^{+}(x_{t,i})\\mid x_{t,i})⟫, ⟪\\hat{y}_t^{+}(x_{t,i})=\\arg\\max_y p_{\\theta_t^{+}}(y\\mid x_{t,i}).⟫ "
          },
          {
            "kind": "same",
            "text": "The source "
          },
          {
            "kind": "del",
            "text": "curvature "
          },
          {
            "kind": "same",
            "text": "proxy ⟪I_0^l⟫ is computed analogously at "
          },
          {
            "kind": "del",
            "text": "the source parameters "
          },
          {
            "kind": "same",
            "text": "⟪\\theta_0⟫ on the same unlabeled "
          },
          {
            "kind": "del",
            "text": "batch, which preserves "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "del",
            "text": "source-free test-time setting. "
          },
          {
            "kind": "same",
            "text": "The layer-wise retention gate is ⟪\\displaystyle \\mu_t^{l} = \\mu_0 \\exp\\!\\left( - \\frac{ \\|\\widetilde{I}_t^{l}-\\widetilde{I}_0^{l}\\|_2^2 }{d_l} \\right),⟫ where "
          },
          {
            "kind": "del",
            "text": "⟪d_l=\\dim(\\theta^l)⟫ "
          },
          {
            "kind": "same",
            "text": "and ⟪\\mu_0⟫ is the maximum retention "
          },
          {
            "kind": "del",
            "text": "strength. When "
          },
          {
            "kind": "same",
            "text": "the candidate "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "del",
            "text": "source curvature profiles are similar, ⟪\\mu_t^l⟫ is large and the candidate update is retained. When the mismatch is large, ⟪\\mu_t^l⟫ decreases and "
          },
          {
            "kind": "same",
            "text": "the layer "
          },
          {
            "kind": "del",
            "text": "is pulled back "
          },
          {
            "kind": "same",
            "text": "toward the source model. "
          },
          {
            "kind": "del",
            "text": "In this way, "
          },
          {
            "kind": "same",
            "text": "CLR "
          },
          {
            "kind": "del",
            "text": "turns the sample-side adaptation step into a layer-aware update: useful "
          },
          {
            "kind": "same",
            "text": "plasticity "
          },
          {
            "kind": "del",
            "text": "is preserved where it is safe, "
          },
          {
            "kind": "same",
            "text": "while "
          },
          {
            "kind": "same",
            "text": "source-sensitive "
          },
          {
            "kind": "del",
            "text": "drift is suppressed before it can accumulate over time."
          }
        ],
        "revised": [
          {
            "kind": "same",
            "text": "The decoupled sample-side adaptation step produces a candidate update "
          },
          {
            "kind": "add",
            "text": "⟪\\theta_t^{+}⟫ retained selectively "
          },
          {
            "kind": "same",
            "text": "across "
          },
          {
            "kind": "same",
            "text": "layers. Under temporally correlated shifts, "
          },
          {
            "kind": "same",
            "text": "source "
          },
          {
            "kind": "add",
            "text": "sensitivity varies across depth (O3): "
          },
          {
            "kind": "same",
            "text": "some layers "
          },
          {
            "kind": "add",
            "text": "benefit from plasticity, whereas others are prone "
          },
          {
            "kind": "same",
            "text": "to "
          },
          {
            "kind": "add",
            "text": "representational drift. Accordingly, "
          },
          {
            "kind": "same",
            "text": "Curvature-aware Layer Retention (CLR) performs curvature-aware layer "
          },
          {
            "kind": "add",
            "text": "retention, "
          },
          {
            "kind": "same",
            "text": "preserving "
          },
          {
            "kind": "add",
            "text": "updates in source-compatible layers while anchoring high-mismatch layers to "
          },
          {
            "kind": "same",
            "text": "the source "
          },
          {
            "kind": "add",
            "text": "model. "
          },
          {
            "kind": "same",
            "text": "This yields a layer-wise proximal problem "
          },
          {
            "kind": "add",
            "text": "with "
          },
          {
            "kind": "same",
            "text": "a "
          },
          {
            "kind": "add",
            "text": "closed-form, proxy-weighted "
          },
          {
            "kind": "same",
            "text": "barycenter "
          },
          {
            "kind": "add",
            "text": "of "
          },
          {
            "kind": "same",
            "text": "the candidate "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "same",
            "text": "source parameters. Curvature-proximal formulation. For each layer ⟪l⟫, we choose ⟪\\theta_{t+1}^{l}⟫ by solving ⟪\\displaystyle \\min_{\\{\\theta_{t+1}^{l}\\}_{l=1}^{L}} \\sum_{l=1}^{L} \\Bigg( \\underbrace{ \\frac{\\mu_t^l}{2} \\|\\theta_{t+1}^{l}-\\theta_t^{+,l}\\|^2_{\\widetilde{I}_t^{l}} }_{\\text{preserve plasticity}} + \\underbrace{ \\frac{1-\\mu_t^l}{2} \\|\\theta_{t+1}^{l}-\\theta_0^{l}\\|^2_{\\widetilde{I}_0^{l}} }_{\\text{prevent forgetting}} \\Bigg),⟫ where "
          },
          {
            "kind": "add",
            "text": "⟪\\|v\\|_I^2:=\\sum_j I_jv_j^2⟫"
          },
          {
            "kind": "same",
            "text": ". Here "
          },
          {
            "kind": "add",
            "text": "⟪I_t^l,I_0^l\\in\\mathbb{R}_+^{d_l}⟫ "
          },
          {
            "kind": "same",
            "text": "denote "
          },
          {
            "kind": "add",
            "text": "non-negative "
          },
          {
            "kind": "same",
            "text": "diagonal "
          },
          {
            "kind": "add",
            "text": "curvature-aware proxy vectors "
          },
          {
            "kind": "same",
            "text": "for the candidate "
          },
          {
            "kind": "same",
            "text": "and source "
          },
          {
            "kind": "add",
            "text": "models, "
          },
          {
            "kind": "same",
            "text": "respectively, and ⟪\\displaystyle \\widetilde{I}_t^l := I_t^l + \\varepsilon_{\\mathrm{ret}}\\mathbf{1}, \\qquad \\widetilde{I}_0^l := I_0^l + \\varepsilon_{\\mathrm{ret}}\\mathbf{1},⟫ with ⟪\\varepsilon_{\\mathrm{ret}}=10^{-6}⟫. The layer-wise gate ⟪\\mu_t^l\\in(0,1]⟫ controls how much of the candidate update is retained. A larger ⟪\\mu_t^l⟫ keeps the layer closer to ⟪\\theta_t^{+,l}⟫, while a smaller ⟪\\mu_t^l⟫ pulls it closer to the source anchor ⟪\\theta_0^l⟫. Closed-form retention update. Since "
          },
          {
            "kind": "add",
            "text": "(17) "
          },
          {
            "kind": "same",
            "text": "is separable across layers and coordinates, the solution is ⟪\\displaystyle \\theta_{t+1}^{l} = \\frac{ \\mu_t^{l} \\widetilde{I}_t^{l}\\odot \\theta_t^{+,l} + (1-\\mu_t^{l}) \\widetilde{I}_0^{l}\\odot \\theta_0^{l} }{ \\mu_t^{l} \\widetilde{I}_t^{l} + (1-\\mu_t^{l}) \\widetilde{I}_0^{l} },⟫ where ⟪\\odot⟫ and division are applied element-wise. "
          },
          {
            "kind": "add",
            "text": "Curvature-aware "
          },
          {
            "kind": "same",
            "text": "proxy and retention gate. The "
          },
          {
            "kind": "add",
            "text": "default curvature-aware "
          },
          {
            "kind": "same",
            "text": "proxy for the candidate model is estimated from pseudo-label gradients on the current batch: ⟪\\displaystyle I_t^{l} = \\frac{1}{N_t} \\sum_{i=1}^{N_t} g_t^{l}(x_{t,i})\\odot g_t^{l}(x_{t,i}),⟫ where "
          },
          {
            "kind": "add",
            "text": "⟪g_t^{l}(x_{t,i})=\\nabla_{\\theta_t^{+,l}}\\log p_{\\theta_t^{+}}(\\hat{y}_t^{+}(x_{t,i})\\mid x_{t,i})⟫ and ⟪\\hat{y}_t^{+}(x_{t,i})=\\arg\\max_y p_{\\theta_t^{+}}(y\\mid x_{t,i})⟫. Thus, ⟪I_t^l⟫ averages element-wise squared per-sample gradients. "
          },
          {
            "kind": "same",
            "text": "The source "
          },
          {
            "kind": "same",
            "text": "proxy ⟪I_0^l⟫ is computed analogously at "
          },
          {
            "kind": "same",
            "text": "⟪\\theta_0⟫ on the same unlabeled "
          },
          {
            "kind": "add",
            "text": "batch ⟪x_t⟫ with "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "add",
            "text": "time index omitted for brevity. "
          },
          {
            "kind": "same",
            "text": "The layer-wise retention gate is ⟪\\displaystyle \\mu_t^{l} = \\mu_0 \\exp\\!\\left( - \\frac{ \\|\\widetilde{I}_t^{l}-\\widetilde{I}_0^{l}\\|_2^2 }{d_l} \\right),⟫ where "
          },
          {
            "kind": "add",
            "text": "⟪d_l=\\dim(\\theta^l)⟫, "
          },
          {
            "kind": "same",
            "text": "and ⟪\\mu_0⟫ is the maximum retention "
          },
          {
            "kind": "add",
            "text": "gate. Similar curvature-aware proxy profiles yield a large ⟪\\mu_t^l⟫ and retain "
          },
          {
            "kind": "same",
            "text": "the candidate "
          },
          {
            "kind": "add",
            "text": "update, whereas mismatch lowers ⟪\\mu_t^l⟫ "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "add",
            "text": "anchors "
          },
          {
            "kind": "same",
            "text": "the layer "
          },
          {
            "kind": "same",
            "text": "toward the source model. "
          },
          {
            "kind": "add",
            "text": "Thus, "
          },
          {
            "kind": "same",
            "text": "CLR "
          },
          {
            "kind": "add",
            "text": "preserves safe "
          },
          {
            "kind": "same",
            "text": "plasticity "
          },
          {
            "kind": "same",
            "text": "while "
          },
          {
            "kind": "add",
            "text": "suppressing "
          },
          {
            "kind": "same",
            "text": "source-sensitive "
          },
          {
            "kind": "add",
            "text": "drift."
          }
        ]
      }
    },
    {
      "title": "Experimental setup",
      "originalPage": 7,
      "revisedPage": 6,
      "before": "Benchmarks. We evaluate DCF on five widely adopted test-time robustness benchmarks that cover both synthetic corruptions and natural distribution shifts. For synthetic shifts, we use ImageNet-C (IN-C) [43], ImageNet-3DCC (IN-3DCC) [44], and ImageNet-C-Bar (IN-C-Bar) [45]. These benchmarks contain diverse corruption patterns and therefore allow us to examine robustness under controlled covariate shifts. For natural shifts, we use ImageNet-R (IN-R) [46] and ImageNet-Sketch (IN-Sketch) [47], which contain images with naturally occurring variations in rendering style, texture, and visual abstraction. Together, these benchmarks provide a comprehensive evaluation of test-time adaptation under both synthetic shifts and natural shifts. Baselines. We compare DCF against representative source-free TTA baselines: BN Adapt [36], Tent [9], CoTTA [17], RoTTA [18], TRIBE [20], SPA [15], PTTA [16], SAR [14], DeYO [40], and AEA [19], along with the frozen source model (No Adapt). Specifically, BN Adapt [36] represents normalization-statistics adaptation; Tent [9] instantiates entropy-minimization TTA; to address continual or dynamic test streams, CoTTA [17] relies on mean-teacher/self-training, RoTTA [18] employs a memory bank, and TRIBE [20] adopts robust normalization; SPA [15] and PTTA [16] further study versatile/practical self-bootstrapping adaptation; SAR [14] improves robustness via sharpness-aware recovery, DeYO [40] utilizes disentangled-factor filtering, and AEA [19] leverages energy alignment. Unless otherwise specified, we use official implementations and hyperparameters for all baselines. Models and Implementation Details. Following prior TTA works [17, 18, 20], we use a pre-trained ResNet-50 [1] backbone from RobustBench [48] and Torchvision [49], and set the batch size to 64 for all experiments. Unless otherwise specified, we follow the official implementation of Tent [9] and optimize the model with SGD (learning rate ⟪2.5\\times 10^{-4}⟫, momentum ⟪0.9⟫). For hyperparameters in DCF, ⟪(\\upsilon_{\\mathrm{PCS}}, \\upsilon_{\\mathrm{Ent}}, \\mu_{0}, \\tau)⟫ are set to ⟪(0.15, 0.6, 0.99, 1.5)⟫. The OT objective in (16) is solved via Sinkhorn iterations, and all results are averaged over 5 runs. All experiments are conducted on a single NVIDIA A100 GPU. Scenarios. To rigorously evaluate robustness and adaptability under temporally correlated non-stationary image streams, we consider three synthetic test scenarios that simulate evolving acquisition and corruption conditions, illustrated in Fig. 4: Temporally-correlated Covariate Shifts (T-CS): Covariate shifts occur sequentially across different corruption types, ⟪\\mathcal{P}_1^{C_1} \\to \\mathcal{P}_2^{C_2} \\to \\dots \\to \\mathcal{P}_t^{C_t}⟫, where each ⟪\\mathcal{P}_i^{C_i}⟫ represents the distribution under corruption type ⟪C_i⟫ with a fixed severity level (e.g., transitioning from motion blur to snow to fog, mimicking natural temporal variations). Temporally-correlated Covariate and Label Shifts (T-CS-LS): Covariate shift is combined with imbalanced label distribution shifts, ⟪(\\mathcal{P}_1^{C_1}, \\pi_1^{Y}) \\rightsquigarrow (\\mathcal{P}_2^{C_2}, \\pi_2^{Y}) \\rightsquigarrow \\dots \\rightsquigarrow (\\mathcal{P}_t^{C_t}, \\pi_t^{Y})⟫, where ⟪\\pi_i^{Y}⟫ denotes the label distribution at time ⟪i⟫ sampled from a Dirichlet distribution (e.g., certain object classes becoming more/less frequent as environmental conditions change). We use the Dirichlet distribution with parameter ⟪\\delta=0.1⟫ following [18] to simulate label shifts. Temporally-correlated Covariate Shifts with Mixed Severity Levels (T-CS-MSL): Covariate shifts with dynamically varying corruption severities, ⟪\\mathcal{P}_1^{C_1,\\sigma_1} \\to \\mathcal{P}_2^{C_2,\\sigma_2} \\to \\dots \\to \\mathcal{P}_t^{C_t,\\sigma_t}⟫, where severity level ⟪\\sigma_t⟫ is chosen uniformly at random from ⟪\\{1,\\dots,5\\}⟫, creating a challenging stream where the model must handle both mild and severe shifts across the same temporal sequence. Here, ⟪\\to⟫ denotes covariate shift and ⟪\\rightsquigarrow⟫ denotes covariate+label shift. To evaluate long-horizon stability, we include a Long-horizon Temporally-correlated test stream extended from the continually evolving setting in [17]. We formulate this extended sequence as ⟪\\mathcal{S}_{\\mathrm{long}} = \\bigoplus_{r=1}^{15} (\\mathcal{P}_{r,1} \\to \\dots \\to \\mathcal{P}_{r,15})⟫, exposing models to 1,125,000 samples sequentially across 225 dynamic corruptions on ImageNet-C. We set the duration rounds to 15, which is sufficient to reveal the tendency of baseline methods to collapse over time.",
      "after": "Benchmarks. We evaluate DCF on five widely used test-time robustness benchmarks covering both synthetic corruptions and natural distribution shifts. For synthetic shifts, we use ImageNet-C (IN-C) [41], ImageNet-3DCC (IN-3DCC) [42], and ImageNet-C-Bar (IN-C-Bar) [43], which provide diverse corruption patterns for controlled evaluation under covariate shifts. For natural shifts, we consider ImageNet-R (IN-R) [44] and ImageNet-Sketch (IN-Sketch) [45], which capture variations in rendering style, texture, and visual abstraction. To further assess cross-domain transfer, we follow MME [46] and use DomainNet-126, a 126-class subset of DomainNet [47] spanning four domains: Clipart, Painting, Real, and Sketch. Together, these benchmarks provide a comprehensive evaluation of TTA across diverse distribution shifts. Baselines. We compare DCF against the frozen source model (No Adapt) and representative source-free TTA baselines across diverse paradigms: normalization adaptation (BN Adapt [27]), entropy minimization (Tent [6]), continual/dynamic TTA via self-training (CoTTA [12]), memory bank (RoTTA [13]), or robust normalization (TRIBE [15]), self-bootstrapping adaptation (SPA [10], PTTA [11]), sharpness-aware recovery (SAR [9]), disentangled-factor filtering (DeYO [35]), and energy alignment (AEA [14]). All baselines use official implementations and default hyperparameters unless specified otherwise. Models and Implementation Details. Following prior TTA works [12, 13, 15], we use pre-trained ResNet-50 [1] backbones from RobustBench [48] and Torchvision, with batch size 64. Following Tent [6], SGD optimizes only normalization affine parameters (learning rate ⟪2.5\\times10^{-4}⟫, momentum ⟪0.9⟫). For CLR, block groups correspond to ResNet layer blocks (stem BN (initial_bn) and layer1–layer4) or ViT encoder blocks. For DCF, hyperparameters ⟪(\\upsilon_{\\mathrm{PCS}}, \\upsilon_{\\mathrm{Ent}}, \\mu_{0}, \\tau, \\lambda)⟫ are set to ⟪(0.2, 0.6\\ln K, 0.99, 1.5, 0.2)⟫. The optimal transport problem in (13) is solved via Sinkhorn-Knopp iterations with entropic regularization ⟪\\varepsilon_{\\mathrm{OT}}=0.5⟫, and ⟪N_{\\mathrm{sk}}=3⟫ iterations. All results are averaged over 5 runs with random stream orderings on a single NVIDIA A100 GPU. Scenarios. To rigorously evaluate robustness and adaptability under temporally correlated, non-stationary image streams, we design three synthetic scenarios simulating evolving corruptions (illustrated in Fig. 4). Let ⟪\\to⟫ and ⟪\\rightsquigarrow⟫ denote covariate and joint covariate-label shifts, respectively: Temporally correlated Covariate Shifts (T-CS): Corruptions shift sequentially at a fixed severity level, denoted as ⟪\\mathcal{P}_1^{C_1} \\to \\mathcal{P}_2^{C_2} \\to \\dots \\to \\mathcal{P}_t^{C_t}⟫, mimicking continuous natural environmental changes (e.g., motion blur ⟪\\to⟫ snow ⟪\\to⟫ fog). Temporally correlated Covariate and Label Shifts (T-CS-LS): Covariate shifts are coupled with dynamic class imbalance: ⟪(\\mathcal{P}_1^{C_1}, \\pi_1^{Y}) \\rightsquigarrow (\\mathcal{P}_2^{C_2}, \\pi_2^{Y}) \\rightsquigarrow \\dots \\rightsquigarrow (\\mathcal{P}_t^{C_t}, \\pi_t^{Y})⟫. Following [13], the time-varying label distribution ⟪\\pi_i^{Y}⟫ is sampled from a Dirichlet distribution with parameter ⟪\\delta=0.1⟫. Temporally correlated Covariate Shifts with Mixed Severity Levels (T-CS-MSL): Covariate shifts with randomly varying intensities, ⟪\\mathcal{P}_1^{C_1,\\sigma_1} \\to \\mathcal{P}_2^{C_2,\\sigma_2} \\to \\dots \\to \\mathcal{P}_t^{C_t,\\sigma_t}⟫, where severity ⟪\\sigma_t \\sim \\operatorname{Unif}\\{1,\\ldots, 5\\}⟫, evaluating robustness across mild-to-severe domain changes. To evaluate long-horizon stability, we include a Long-horizon Temporally Correlated test stream extended from the continually evolving setting in [12]. We formulate this extended sequence as ⟪\\mathcal{S}_{\\mathrm{long}} = \\bigoplus_{r=1}^{15} (\\mathcal{P}_{r,1} \\to \\dots \\to \\mathcal{P}_{r,15})⟫, exposing models to 1,125,000 samples sequentially across 225 dynamic corruptions on ImageNet-C. We set the adaptation rounds to 15, which is sufficient to reveal the tendency of baseline methods to collapse over time.",
      "diff": {
        "original": [
          {
            "kind": "same",
            "text": "Benchmarks. We evaluate DCF on five widely "
          },
          {
            "kind": "del",
            "text": "adopted "
          },
          {
            "kind": "same",
            "text": "test-time robustness benchmarks "
          },
          {
            "kind": "del",
            "text": "that cover "
          },
          {
            "kind": "same",
            "text": "both synthetic corruptions and natural distribution shifts. For synthetic shifts, we use ImageNet-C (IN-C) "
          },
          {
            "kind": "del",
            "text": "[43], "
          },
          {
            "kind": "same",
            "text": "ImageNet-3DCC (IN-3DCC) "
          },
          {
            "kind": "del",
            "text": "[44], "
          },
          {
            "kind": "same",
            "text": "and ImageNet-C-Bar (IN-C-Bar) "
          },
          {
            "kind": "del",
            "text": "[45]. These benchmarks contain "
          },
          {
            "kind": "same",
            "text": "diverse corruption patterns "
          },
          {
            "kind": "del",
            "text": "and therefore allow us to examine robustness "
          },
          {
            "kind": "same",
            "text": "under "
          },
          {
            "kind": "del",
            "text": "controlled "
          },
          {
            "kind": "same",
            "text": "covariate shifts. For natural shifts, we "
          },
          {
            "kind": "del",
            "text": "use "
          },
          {
            "kind": "same",
            "text": "ImageNet-R (IN-R) "
          },
          {
            "kind": "del",
            "text": "[46] "
          },
          {
            "kind": "same",
            "text": "and ImageNet-Sketch (IN-Sketch) "
          },
          {
            "kind": "del",
            "text": "[47], "
          },
          {
            "kind": "same",
            "text": "which "
          },
          {
            "kind": "del",
            "text": "contain images with naturally occurring "
          },
          {
            "kind": "same",
            "text": "variations in rendering style, texture, and visual abstraction. "
          },
          {
            "kind": "same",
            "text": "Together, these benchmarks provide a comprehensive evaluation of "
          },
          {
            "kind": "del",
            "text": "test-time adaptation under both synthetic shifts and natural "
          },
          {
            "kind": "same",
            "text": "shifts. Baselines. We compare DCF against "
          },
          {
            "kind": "del",
            "text": "representative source-free TTA baselines: BN Adapt [36], Tent [9], CoTTA [17], RoTTA [18], TRIBE [20], SPA [15], PTTA [16], SAR [14], DeYO [40], and AEA [19], along with "
          },
          {
            "kind": "same",
            "text": "the frozen source model (No "
          },
          {
            "kind": "del",
            "text": "Adapt). Specifically, BN "
          },
          {
            "kind": "same",
            "text": "Adapt "
          },
          {
            "kind": "del",
            "text": "[36] represents normalization-statistics adaptation; Tent [9] instantiates entropy-minimization TTA; to address continual "
          },
          {
            "kind": "same",
            "text": "or "
          },
          {
            "kind": "del",
            "text": "dynamic test streams, CoTTA [17] relies on mean-teacher/self-training, RoTTA [18] employs a memory bank, "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "del",
            "text": "TRIBE [20] adopts robust normalization; SPA [15] and PTTA [16] further study versatile/practical self-bootstrapping adaptation; SAR [14] improves robustness via sharpness-aware recovery, DeYO [40] utilizes disentangled-factor filtering, and AEA [19] leverages "
          },
          {
            "kind": "same",
            "text": "energy "
          },
          {
            "kind": "del",
            "text": "alignment. Unless otherwise specified, we "
          },
          {
            "kind": "same",
            "text": "use official implementations and "
          },
          {
            "kind": "same",
            "text": "hyperparameters "
          },
          {
            "kind": "del",
            "text": "for all baselines. "
          },
          {
            "kind": "same",
            "text": "Models and Implementation Details. Following prior TTA works "
          },
          {
            "kind": "del",
            "text": "[17, 18, 20], "
          },
          {
            "kind": "same",
            "text": "we use "
          },
          {
            "kind": "del",
            "text": "a "
          },
          {
            "kind": "same",
            "text": "pre-trained ResNet-50 [1] "
          },
          {
            "kind": "del",
            "text": "backbone "
          },
          {
            "kind": "same",
            "text": "from RobustBench [48] and "
          },
          {
            "kind": "del",
            "text": "Torchvision [49], and set the "
          },
          {
            "kind": "same",
            "text": "batch size "
          },
          {
            "kind": "del",
            "text": "to 64 for all experiments. Unless otherwise specified, we follow the official implementation of "
          },
          {
            "kind": "same",
            "text": "Tent "
          },
          {
            "kind": "del",
            "text": "[9] and optimize the model with "
          },
          {
            "kind": "same",
            "text": "SGD "
          },
          {
            "kind": "same",
            "text": "(learning rate "
          },
          {
            "kind": "del",
            "text": "⟪2.5\\times 10^{-4}⟫"
          },
          {
            "kind": "same",
            "text": ", momentum ⟪0.9⟫). For "
          },
          {
            "kind": "same",
            "text": "hyperparameters "
          },
          {
            "kind": "del",
            "text": "in DCF, ⟪(\\upsilon_{\\mathrm{PCS}}, \\upsilon_{\\mathrm{Ent}}, \\mu_{0}, \\tau)⟫ "
          },
          {
            "kind": "same",
            "text": "are set to "
          },
          {
            "kind": "del",
            "text": "⟪(0.15, 0.6, 0.99, 1.5)⟫"
          },
          {
            "kind": "same",
            "text": ". The "
          },
          {
            "kind": "del",
            "text": "OT objective "
          },
          {
            "kind": "same",
            "text": "in "
          },
          {
            "kind": "del",
            "text": "(16) "
          },
          {
            "kind": "same",
            "text": "is solved via "
          },
          {
            "kind": "del",
            "text": "Sinkhorn iterations, "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "del",
            "text": "all "
          },
          {
            "kind": "same",
            "text": "results are averaged over 5 "
          },
          {
            "kind": "del",
            "text": "runs. All experiments are conducted "
          },
          {
            "kind": "same",
            "text": "on a single NVIDIA A100 GPU. Scenarios. To rigorously evaluate robustness and adaptability under temporally "
          },
          {
            "kind": "del",
            "text": "correlated "
          },
          {
            "kind": "same",
            "text": "non-stationary image streams, we "
          },
          {
            "kind": "del",
            "text": "consider "
          },
          {
            "kind": "same",
            "text": "three synthetic "
          },
          {
            "kind": "del",
            "text": "test "
          },
          {
            "kind": "same",
            "text": "scenarios "
          },
          {
            "kind": "del",
            "text": "that simulate "
          },
          {
            "kind": "same",
            "text": "evolving "
          },
          {
            "kind": "del",
            "text": "acquisition and corruption conditions, illustrated "
          },
          {
            "kind": "same",
            "text": "in Fig. "
          },
          {
            "kind": "del",
            "text": "4: Temporally-correlated "
          },
          {
            "kind": "same",
            "text": "Covariate Shifts (T-CS): "
          },
          {
            "kind": "del",
            "text": "Covariate shifts occur "
          },
          {
            "kind": "same",
            "text": "sequentially "
          },
          {
            "kind": "del",
            "text": "across different corruption types, ⟪\\mathcal{P}_1^{C_1} \\to \\mathcal{P}_2^{C_2} \\to \\dots \\to \\mathcal{P}_t^{C_t}⟫, where each ⟪\\mathcal{P}_i^{C_i}⟫ represents the distribution under corruption type ⟪C_i⟫ with "
          },
          {
            "kind": "same",
            "text": "a fixed severity "
          },
          {
            "kind": "del",
            "text": "level "
          },
          {
            "kind": "same",
            "text": "(e.g., "
          },
          {
            "kind": "del",
            "text": "transitioning from "
          },
          {
            "kind": "same",
            "text": "motion blur "
          },
          {
            "kind": "del",
            "text": "to "
          },
          {
            "kind": "same",
            "text": "snow "
          },
          {
            "kind": "del",
            "text": "to fog, mimicking natural temporal variations). Temporally-correlated "
          },
          {
            "kind": "same",
            "text": "Covariate and Label Shifts (T-CS-LS): Covariate "
          },
          {
            "kind": "del",
            "text": "shift is combined "
          },
          {
            "kind": "same",
            "text": "with "
          },
          {
            "kind": "del",
            "text": "imbalanced "
          },
          {
            "kind": "same",
            "text": "label distribution "
          },
          {
            "kind": "del",
            "text": "shifts, ⟪(\\mathcal{P}_1^{C_1}, \\pi_1^{Y}) \\rightsquigarrow (\\mathcal{P}_2^{C_2}, \\pi_2^{Y}) \\rightsquigarrow \\dots \\rightsquigarrow (\\mathcal{P}_t^{C_t}, \\pi_t^{Y})⟫, where "
          },
          {
            "kind": "same",
            "text": "⟪\\pi_i^{Y}⟫ "
          },
          {
            "kind": "del",
            "text": "denotes the label distribution at time ⟪i⟫ "
          },
          {
            "kind": "same",
            "text": "sampled from a Dirichlet distribution "
          },
          {
            "kind": "del",
            "text": "(e.g., certain object classes becoming more/less frequent as environmental conditions change). We use the Dirichlet distribution "
          },
          {
            "kind": "same",
            "text": "with parameter "
          },
          {
            "kind": "del",
            "text": "⟪\\delta=0.1⟫ following [18] to simulate label shifts. Temporally-correlated "
          },
          {
            "kind": "same",
            "text": "Covariate Shifts with Mixed Severity Levels (T-CS-MSL): Covariate shifts with "
          },
          {
            "kind": "del",
            "text": "dynamically "
          },
          {
            "kind": "same",
            "text": "varying "
          },
          {
            "kind": "del",
            "text": "corruption severities, "
          },
          {
            "kind": "same",
            "text": "⟪\\mathcal{P}_1^{C_1,\\sigma_1} \\to \\mathcal{P}_2^{C_2,\\sigma_2} \\to \\dots \\to \\mathcal{P}_t^{C_t,\\sigma_t}⟫, where severity "
          },
          {
            "kind": "del",
            "text": "level ⟪\\sigma_t⟫ is chosen uniformly at random from ⟪\\{1,\\dots,5\\}⟫"
          },
          {
            "kind": "same",
            "text": ", "
          },
          {
            "kind": "del",
            "text": "creating a challenging stream where the model must handle both mild and severe shifts "
          },
          {
            "kind": "same",
            "text": "across "
          },
          {
            "kind": "del",
            "text": "the same temporal sequence. Here, ⟪\\to⟫ denotes covariate shift and ⟪\\rightsquigarrow⟫ denotes covariate+label shift. "
          },
          {
            "kind": "same",
            "text": "To evaluate long-horizon stability, we include a Long-horizon "
          },
          {
            "kind": "del",
            "text": "Temporally-correlated "
          },
          {
            "kind": "same",
            "text": "test stream extended from the continually evolving setting in "
          },
          {
            "kind": "del",
            "text": "[17]. "
          },
          {
            "kind": "same",
            "text": "We formulate this extended sequence as ⟪\\mathcal{S}_{\\mathrm{long}} = \\bigoplus_{r=1}^{15} (\\mathcal{P}_{r,1} \\to \\dots \\to \\mathcal{P}_{r,15})⟫, exposing models to 1,125,000 samples sequentially across 225 dynamic corruptions on ImageNet-C. We set the "
          },
          {
            "kind": "del",
            "text": "duration "
          },
          {
            "kind": "same",
            "text": "rounds to 15, which is sufficient to reveal the tendency of baseline methods to collapse over time."
          }
        ],
        "revised": [
          {
            "kind": "same",
            "text": "Benchmarks. We evaluate DCF on five widely "
          },
          {
            "kind": "add",
            "text": "used "
          },
          {
            "kind": "same",
            "text": "test-time robustness benchmarks "
          },
          {
            "kind": "add",
            "text": "covering "
          },
          {
            "kind": "same",
            "text": "both synthetic corruptions and natural distribution shifts. For synthetic shifts, we use ImageNet-C (IN-C) "
          },
          {
            "kind": "add",
            "text": "[41], "
          },
          {
            "kind": "same",
            "text": "ImageNet-3DCC (IN-3DCC) "
          },
          {
            "kind": "add",
            "text": "[42], "
          },
          {
            "kind": "same",
            "text": "and ImageNet-C-Bar (IN-C-Bar) "
          },
          {
            "kind": "add",
            "text": "[43], which provide "
          },
          {
            "kind": "same",
            "text": "diverse corruption patterns "
          },
          {
            "kind": "add",
            "text": "for controlled evaluation "
          },
          {
            "kind": "same",
            "text": "under "
          },
          {
            "kind": "same",
            "text": "covariate shifts. For natural shifts, we "
          },
          {
            "kind": "add",
            "text": "consider "
          },
          {
            "kind": "same",
            "text": "ImageNet-R (IN-R) "
          },
          {
            "kind": "add",
            "text": "[44] "
          },
          {
            "kind": "same",
            "text": "and ImageNet-Sketch (IN-Sketch) "
          },
          {
            "kind": "add",
            "text": "[45], "
          },
          {
            "kind": "same",
            "text": "which "
          },
          {
            "kind": "add",
            "text": "capture "
          },
          {
            "kind": "same",
            "text": "variations in rendering style, texture, and visual abstraction. "
          },
          {
            "kind": "add",
            "text": "To further assess cross-domain transfer, we follow MME [46] and use DomainNet-126, a 126-class subset of DomainNet [47] spanning four domains: Clipart, Painting, Real, and Sketch. "
          },
          {
            "kind": "same",
            "text": "Together, these benchmarks provide a comprehensive evaluation of "
          },
          {
            "kind": "add",
            "text": "TTA across diverse distribution "
          },
          {
            "kind": "same",
            "text": "shifts. Baselines. We compare DCF against "
          },
          {
            "kind": "same",
            "text": "the frozen source model (No "
          },
          {
            "kind": "add",
            "text": "Adapt) and representative source-free TTA baselines across diverse paradigms: normalization adaptation (BN "
          },
          {
            "kind": "same",
            "text": "Adapt "
          },
          {
            "kind": "add",
            "text": "[27]), entropy minimization (Tent [6]), continual/dynamic TTA via self-training (CoTTA [12]), memory bank (RoTTA [13]), "
          },
          {
            "kind": "same",
            "text": "or "
          },
          {
            "kind": "add",
            "text": "robust normalization (TRIBE [15]), self-bootstrapping adaptation (SPA [10], PTTA [11]), sharpness-aware recovery (SAR [9]), disentangled-factor filtering (DeYO [35]), "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "same",
            "text": "energy "
          },
          {
            "kind": "add",
            "text": "alignment (AEA [14]). All baselines "
          },
          {
            "kind": "same",
            "text": "use official implementations and "
          },
          {
            "kind": "add",
            "text": "default "
          },
          {
            "kind": "same",
            "text": "hyperparameters "
          },
          {
            "kind": "add",
            "text": "unless specified otherwise. "
          },
          {
            "kind": "same",
            "text": "Models and Implementation Details. Following prior TTA works "
          },
          {
            "kind": "add",
            "text": "[12, 13, 15], "
          },
          {
            "kind": "same",
            "text": "we use "
          },
          {
            "kind": "same",
            "text": "pre-trained ResNet-50 [1] "
          },
          {
            "kind": "add",
            "text": "backbones "
          },
          {
            "kind": "same",
            "text": "from RobustBench [48] and "
          },
          {
            "kind": "add",
            "text": "Torchvision, with "
          },
          {
            "kind": "same",
            "text": "batch size "
          },
          {
            "kind": "add",
            "text": "64. Following "
          },
          {
            "kind": "same",
            "text": "Tent "
          },
          {
            "kind": "add",
            "text": "[6], "
          },
          {
            "kind": "same",
            "text": "SGD "
          },
          {
            "kind": "add",
            "text": "optimizes only normalization affine parameters "
          },
          {
            "kind": "same",
            "text": "(learning rate "
          },
          {
            "kind": "add",
            "text": "⟪2.5\\times10^{-4}⟫"
          },
          {
            "kind": "same",
            "text": ", momentum ⟪0.9⟫). For "
          },
          {
            "kind": "add",
            "text": "CLR, block groups correspond to ResNet layer blocks (stem BN (initial_bn) and layer1–layer4) or ViT encoder blocks. For DCF, "
          },
          {
            "kind": "same",
            "text": "hyperparameters "
          },
          {
            "kind": "add",
            "text": "⟪(\\upsilon_{\\mathrm{PCS}}, \\upsilon_{\\mathrm{Ent}}, \\mu_{0}, \\tau, \\lambda)⟫ "
          },
          {
            "kind": "same",
            "text": "are set to "
          },
          {
            "kind": "add",
            "text": "⟪(0.2, 0.6\\ln K, 0.99, 1.5, 0.2)⟫"
          },
          {
            "kind": "same",
            "text": ". The "
          },
          {
            "kind": "add",
            "text": "optimal transport problem "
          },
          {
            "kind": "same",
            "text": "in "
          },
          {
            "kind": "add",
            "text": "(13) "
          },
          {
            "kind": "same",
            "text": "is solved via "
          },
          {
            "kind": "add",
            "text": "Sinkhorn-Knopp iterations with entropic regularization ⟪\\varepsilon_{\\mathrm{OT}}=0.5⟫, "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "add",
            "text": "⟪N_{\\mathrm{sk}}=3⟫ iterations. All "
          },
          {
            "kind": "same",
            "text": "results are averaged over 5 "
          },
          {
            "kind": "add",
            "text": "runs with random stream orderings "
          },
          {
            "kind": "same",
            "text": "on a single NVIDIA A100 GPU. Scenarios. To rigorously evaluate robustness and adaptability under temporally "
          },
          {
            "kind": "add",
            "text": "correlated, "
          },
          {
            "kind": "same",
            "text": "non-stationary image streams, we "
          },
          {
            "kind": "add",
            "text": "design "
          },
          {
            "kind": "same",
            "text": "three synthetic "
          },
          {
            "kind": "same",
            "text": "scenarios "
          },
          {
            "kind": "add",
            "text": "simulating "
          },
          {
            "kind": "same",
            "text": "evolving "
          },
          {
            "kind": "add",
            "text": "corruptions (illustrated "
          },
          {
            "kind": "same",
            "text": "in Fig. "
          },
          {
            "kind": "add",
            "text": "4). Let ⟪\\to⟫ and ⟪\\rightsquigarrow⟫ denote covariate and joint covariate-label shifts, respectively: Temporally correlated "
          },
          {
            "kind": "same",
            "text": "Covariate Shifts (T-CS): "
          },
          {
            "kind": "add",
            "text": "Corruptions shift "
          },
          {
            "kind": "same",
            "text": "sequentially "
          },
          {
            "kind": "add",
            "text": "at "
          },
          {
            "kind": "same",
            "text": "a fixed severity "
          },
          {
            "kind": "add",
            "text": "level, denoted as ⟪\\mathcal{P}_1^{C_1} \\to \\mathcal{P}_2^{C_2} \\to \\dots \\to \\mathcal{P}_t^{C_t}⟫, mimicking continuous natural environmental changes "
          },
          {
            "kind": "same",
            "text": "(e.g., "
          },
          {
            "kind": "same",
            "text": "motion blur "
          },
          {
            "kind": "add",
            "text": "⟪\\to⟫ "
          },
          {
            "kind": "same",
            "text": "snow "
          },
          {
            "kind": "add",
            "text": "⟪\\to⟫ fog). Temporally correlated "
          },
          {
            "kind": "same",
            "text": "Covariate and Label Shifts (T-CS-LS): Covariate "
          },
          {
            "kind": "add",
            "text": "shifts are coupled "
          },
          {
            "kind": "same",
            "text": "with "
          },
          {
            "kind": "add",
            "text": "dynamic class imbalance: ⟪(\\mathcal{P}_1^{C_1}, \\pi_1^{Y}) \\rightsquigarrow (\\mathcal{P}_2^{C_2}, \\pi_2^{Y}) \\rightsquigarrow \\dots \\rightsquigarrow (\\mathcal{P}_t^{C_t}, \\pi_t^{Y})⟫. Following [13], the time-varying "
          },
          {
            "kind": "same",
            "text": "label distribution "
          },
          {
            "kind": "same",
            "text": "⟪\\pi_i^{Y}⟫ "
          },
          {
            "kind": "add",
            "text": "is "
          },
          {
            "kind": "same",
            "text": "sampled from a Dirichlet distribution "
          },
          {
            "kind": "same",
            "text": "with parameter "
          },
          {
            "kind": "add",
            "text": "⟪\\delta=0.1⟫. Temporally correlated "
          },
          {
            "kind": "same",
            "text": "Covariate Shifts with Mixed Severity Levels (T-CS-MSL): Covariate shifts with "
          },
          {
            "kind": "add",
            "text": "randomly "
          },
          {
            "kind": "same",
            "text": "varying "
          },
          {
            "kind": "add",
            "text": "intensities, "
          },
          {
            "kind": "same",
            "text": "⟪\\mathcal{P}_1^{C_1,\\sigma_1} \\to \\mathcal{P}_2^{C_2,\\sigma_2} \\to \\dots \\to \\mathcal{P}_t^{C_t,\\sigma_t}⟫, where severity "
          },
          {
            "kind": "add",
            "text": "⟪\\sigma_t \\sim \\operatorname{Unif}\\{1,\\ldots, 5\\}⟫"
          },
          {
            "kind": "same",
            "text": ", "
          },
          {
            "kind": "add",
            "text": "evaluating robustness "
          },
          {
            "kind": "same",
            "text": "across "
          },
          {
            "kind": "add",
            "text": "mild-to-severe domain changes. "
          },
          {
            "kind": "same",
            "text": "To evaluate long-horizon stability, we include a Long-horizon "
          },
          {
            "kind": "add",
            "text": "Temporally Correlated "
          },
          {
            "kind": "same",
            "text": "test stream extended from the continually evolving setting in "
          },
          {
            "kind": "add",
            "text": "[12]. "
          },
          {
            "kind": "same",
            "text": "We formulate this extended sequence as ⟪\\mathcal{S}_{\\mathrm{long}} = \\bigoplus_{r=1}^{15} (\\mathcal{P}_{r,1} \\to \\dots \\to \\mathcal{P}_{r,15})⟫, exposing models to 1,125,000 samples sequentially across 225 dynamic corruptions on ImageNet-C. We set the "
          },
          {
            "kind": "add",
            "text": "adaptation "
          },
          {
            "kind": "same",
            "text": "rounds to 15, which is sufficient to reveal the tendency of baseline methods to collapse over time."
          }
        ]
      }
    },
    {
      "title": "Main results",
      "originalPage": 8,
      "revisedPage": 7,
      "before": "Robustness on Temporally-Correlated Shifts. To evaluate the adaptability of DCF against continuous distribution shifts, we compare it with state-of-the-art TTA baselines across three temporally-correlated synthetic settings (T-CS, T-CS-LS, and T-CS-MSL) as well as two natural shift benchmarks (ImageNet-R and ImageNet-Sketch). As shown in Table I and Table III, DCF achieves the best performance among the compared methods across all settings. Synthetic Corruptions (Table I): Under the standard temporally-correlated covariate shift (T-CS), DCF achieves the highest average accuracy of 43.96%, outperforming strong baselines like DeYO (42.35%) and SAR (40.25%). The performance gap widens on challenging structural shifts like IN-C-Bar, where our method yields 45.71% (vs. DeYO’s 44.78%). Crucially, when introducing complex joint shifts—such as Dirichlet label shifts (T-CS-LS) and dynamically mixed severities (T-CS-MSL)—DCF maintains robust superiority, delivering average accuracies of 43.84% and 55.27%, respectively. Natural Shifts (Table III): Beyond synthetic corruptions, DCF demonstrates strong generalization to real-world domain shifts. It reaches an average accuracy of 41.58% on IN-R and IN-Sketch, surpassing the second-best method (DeYO, 39.00%) by a significant margin of +2.58%. These results suggest that decoupling sample routing, subset-specific adaptation, and layer-wise stabilization effectively mitigates the error accumulation typically induced by non-stationary data streams. Stability over Long-Horizon Temporally Correlated Streams. A critical flaw of many TTA methods is their tendency to collapse when exposed to prolonged, non-stationary streams. To rigorously test this long-horizon stability, we conduct 15 continuous rounds of adaptation on ImageNet-C, exposing models to over 1.12 million samples sequentially. As explicitly revealed by the ⟪\\Delta⟫ metric in Table II, unconstrained self-training updates (e.g., Tent, RoTTA, SPA) lead to catastrophic error accumulation. For instance, Tent plummets by 43.65% from Round 1 to Round 15 under T-CS-MSL. Surprisingly, even recent methods equipped with advanced sample filtering mechanisms (e.g., DeYO, PTTA) fail to prevent this late-stage collapse, turning from early gains to near-zero accuracy under T-CS. While conservative methods like CoTTA and SAR avoid severe drops, their absolute accuracy remains substantially lower. In contrast, DCF consistently resists degradation across all long-horizon scenarios while maintaining the highest absolute accuracy at every single round. Rather than collapsing, our method’s performance trajectory remains resilient over the entire stream. This long-horizon evidence validates our core proposition: stable adaptation in non-stationary streams requires the joint, decoupled control of input-side evidence (routing) and layer-wise parameter drift (stabilization).",
      "after": "Robustness on Temporally Correlated Shifts. As shown in Table I, DCF achieves state-of-the-art accuracy across synthetic (T-CS, T-CS-LS, T-CS-MSL) and natural shift (IN-R, IN-Sketch) benchmarks. On synthetic corruptions (Table I, left), it obtains the highest T-CS average accuracy of 43.96%, outperforming DeYO (42.35%) and SAR (40.25%), achieving 45.71% accuracy on IN-C-Bar. Under Dirichlet label shifts (T-CS-LS) and dynamically mixed severities (T-CS-MSL), DCF remains superior with 43.84% and 55.27% average accuracies. On natural shifts (Table I, right), it averages 41.58% on IN-R and IN-Sketch, exceeding the second-best DeYO (39.00%) by +2.58 pp. These results show that decoupled sample routing, subset-specific adaptation, and layer-wise stabilization effectively mitigate error accumulation in non-stationary streams. Stability on Long-Horizon Temporally Correlated Streams. To evaluate stability under prolonged deployment, we track adaptation across 15 rounds spanning 225 sequentially evolving domains (⟪>1.12\\times 10^6⟫ samples) on ImageNet-C. As shown in Table IIa, most TTA baselines suffer severe performance collapse over prolonged adaptation: DeYO (40.97% at Round 1) and Tent (37.55%) fall to near-zero accuracy by Round 15 (0.12% and 0.49%, yielding ⟪\\Delta=-40.85⟫ pp and ⟪-37.06⟫ pp), while RoTTA, AEA, SPA, and PTTA show similarly large regressions (⟪\\Delta\\le-22.02⟫ pp). Although continual baselines such as CoTTA and SAR avoid total breakdown (⟪\\Delta>0⟫), their average accuracies remain limited (⟪\\le38.90\\%⟫). In contrast, DCF remains robust across all rounds without catastrophic collapse, achieving the highest average accuracy and positive net progression under T-CS (43.48%), T-CS-LS (43.27%), and T-CS-MSL (54.53%). These findings support our central argument that coordinated control of input evidence routing and layer-wise parameter retention improves long-horizon stability under the evaluated temporally correlated streams.",
      "diff": {
        "original": [
          {
            "kind": "same",
            "text": "Robustness on "
          },
          {
            "kind": "del",
            "text": "Temporally-Correlated "
          },
          {
            "kind": "same",
            "text": "Shifts. "
          },
          {
            "kind": "del",
            "text": "To evaluate the adaptability of DCF against continuous distribution shifts, we compare it with state-of-the-art TTA baselines across three temporally-correlated synthetic settings (T-CS, T-CS-LS, and T-CS-MSL) as well as two natural shift benchmarks (ImageNet-R and ImageNet-Sketch). "
          },
          {
            "kind": "same",
            "text": "As shown in Table "
          },
          {
            "kind": "del",
            "text": "I and Table III, "
          },
          {
            "kind": "same",
            "text": "DCF achieves "
          },
          {
            "kind": "del",
            "text": "the best performance among the compared methods "
          },
          {
            "kind": "same",
            "text": "across "
          },
          {
            "kind": "del",
            "text": "all settings. Synthetic Corruptions "
          },
          {
            "kind": "same",
            "text": "(Table "
          },
          {
            "kind": "del",
            "text": "I): Under the standard temporally-correlated covariate shift (T-CS), DCF achieves "
          },
          {
            "kind": "same",
            "text": "the highest "
          },
          {
            "kind": "same",
            "text": "average accuracy of 43.96%, outperforming "
          },
          {
            "kind": "del",
            "text": "strong baselines like "
          },
          {
            "kind": "same",
            "text": "DeYO (42.35%) and SAR "
          },
          {
            "kind": "del",
            "text": "(40.25%). The performance gap widens "
          },
          {
            "kind": "same",
            "text": "on "
          },
          {
            "kind": "del",
            "text": "challenging structural shifts like IN-C-Bar, where our method yields 45.71% (vs. DeYO’s 44.78%). Crucially, when introducing complex joint shifts—such as "
          },
          {
            "kind": "same",
            "text": "Dirichlet label shifts (T-CS-LS) and dynamically mixed severities "
          },
          {
            "kind": "del",
            "text": "(T-CS-MSL)—DCF maintains robust superiority, delivering average accuracies of "
          },
          {
            "kind": "same",
            "text": "43.84% and "
          },
          {
            "kind": "del",
            "text": "55.27%, respectively. Natural Shifts "
          },
          {
            "kind": "same",
            "text": "(Table "
          },
          {
            "kind": "del",
            "text": "III): Beyond synthetic corruptions, DCF demonstrates strong generalization to real-world domain shifts. It reaches an average accuracy of "
          },
          {
            "kind": "same",
            "text": "41.58% on IN-R and IN-Sketch, "
          },
          {
            "kind": "del",
            "text": "surpassing "
          },
          {
            "kind": "same",
            "text": "the second-best "
          },
          {
            "kind": "del",
            "text": "method (DeYO, 39.00%) "
          },
          {
            "kind": "same",
            "text": "by "
          },
          {
            "kind": "del",
            "text": "a significant margin of +2.58%. "
          },
          {
            "kind": "same",
            "text": "These results "
          },
          {
            "kind": "del",
            "text": "suggest "
          },
          {
            "kind": "same",
            "text": "that "
          },
          {
            "kind": "del",
            "text": "decoupling "
          },
          {
            "kind": "same",
            "text": "sample routing, subset-specific adaptation, and layer-wise stabilization effectively "
          },
          {
            "kind": "del",
            "text": "mitigates the "
          },
          {
            "kind": "same",
            "text": "error accumulation "
          },
          {
            "kind": "del",
            "text": "typically induced by "
          },
          {
            "kind": "same",
            "text": "non-stationary "
          },
          {
            "kind": "del",
            "text": "data "
          },
          {
            "kind": "same",
            "text": "streams. Stability "
          },
          {
            "kind": "del",
            "text": "over "
          },
          {
            "kind": "same",
            "text": "Long-Horizon Temporally Correlated Streams. "
          },
          {
            "kind": "del",
            "text": "A critical flaw of many TTA methods is their tendency to collapse when exposed to prolonged, non-stationary streams. "
          },
          {
            "kind": "same",
            "text": "To "
          },
          {
            "kind": "del",
            "text": "rigorously test this long-horizon stability, "
          },
          {
            "kind": "same",
            "text": "we "
          },
          {
            "kind": "del",
            "text": "conduct "
          },
          {
            "kind": "same",
            "text": "15 "
          },
          {
            "kind": "del",
            "text": "continuous "
          },
          {
            "kind": "same",
            "text": "rounds "
          },
          {
            "kind": "del",
            "text": "of adaptation "
          },
          {
            "kind": "same",
            "text": "on "
          },
          {
            "kind": "del",
            "text": "ImageNet-C, exposing models to over 1.12 million samples sequentially. "
          },
          {
            "kind": "same",
            "text": "As "
          },
          {
            "kind": "del",
            "text": "explicitly revealed by the ⟪\\Delta⟫ metric "
          },
          {
            "kind": "same",
            "text": "in Table "
          },
          {
            "kind": "del",
            "text": "II, unconstrained self-training updates (e.g., Tent, RoTTA, SPA) lead to catastrophic error accumulation. For instance, "
          },
          {
            "kind": "same",
            "text": "Tent "
          },
          {
            "kind": "del",
            "text": "plummets by 43.65% from Round 1 to Round 15 under T-CS-MSL. Surprisingly, even recent methods equipped with advanced sample filtering mechanisms (e.g., DeYO, PTTA) fail to prevent this late-stage collapse, turning from early gains "
          },
          {
            "kind": "same",
            "text": "to near-zero accuracy "
          },
          {
            "kind": "del",
            "text": "under T-CS. While conservative methods like "
          },
          {
            "kind": "same",
            "text": "CoTTA and SAR avoid "
          },
          {
            "kind": "del",
            "text": "severe drops, "
          },
          {
            "kind": "same",
            "text": "their "
          },
          {
            "kind": "del",
            "text": "absolute accuracy remains substantially lower. "
          },
          {
            "kind": "same",
            "text": "In contrast, DCF "
          },
          {
            "kind": "del",
            "text": "consistently resists degradation "
          },
          {
            "kind": "same",
            "text": "across all "
          },
          {
            "kind": "del",
            "text": "long-horizon scenarios while maintaining "
          },
          {
            "kind": "same",
            "text": "the highest "
          },
          {
            "kind": "del",
            "text": "absolute "
          },
          {
            "kind": "same",
            "text": "accuracy "
          },
          {
            "kind": "del",
            "text": "at every single round. Rather than collapsing, "
          },
          {
            "kind": "same",
            "text": "our "
          },
          {
            "kind": "del",
            "text": "method’s performance trajectory remains resilient over the entire stream. This long-horizon evidence validates our core proposition: stable adaptation in non-stationary streams requires the joint, decoupled "
          },
          {
            "kind": "same",
            "text": "control of "
          },
          {
            "kind": "del",
            "text": "input-side "
          },
          {
            "kind": "same",
            "text": "evidence "
          },
          {
            "kind": "del",
            "text": "(routing) "
          },
          {
            "kind": "same",
            "text": "and layer-wise parameter "
          },
          {
            "kind": "del",
            "text": "drift (stabilization)."
          }
        ],
        "revised": [
          {
            "kind": "same",
            "text": "Robustness on "
          },
          {
            "kind": "add",
            "text": "Temporally Correlated "
          },
          {
            "kind": "same",
            "text": "Shifts. "
          },
          {
            "kind": "same",
            "text": "As shown in Table "
          },
          {
            "kind": "add",
            "text": "I, "
          },
          {
            "kind": "same",
            "text": "DCF achieves "
          },
          {
            "kind": "add",
            "text": "state-of-the-art accuracy "
          },
          {
            "kind": "same",
            "text": "across "
          },
          {
            "kind": "add",
            "text": "synthetic (T-CS, T-CS-LS, T-CS-MSL) and natural shift (IN-R, IN-Sketch) benchmarks. On synthetic corruptions "
          },
          {
            "kind": "same",
            "text": "(Table "
          },
          {
            "kind": "add",
            "text": "I, left), it obtains "
          },
          {
            "kind": "same",
            "text": "the highest "
          },
          {
            "kind": "add",
            "text": "T-CS "
          },
          {
            "kind": "same",
            "text": "average accuracy of 43.96%, outperforming "
          },
          {
            "kind": "same",
            "text": "DeYO (42.35%) and SAR "
          },
          {
            "kind": "add",
            "text": "(40.25%), achieving 45.71% accuracy "
          },
          {
            "kind": "same",
            "text": "on "
          },
          {
            "kind": "add",
            "text": "IN-C-Bar. Under "
          },
          {
            "kind": "same",
            "text": "Dirichlet label shifts (T-CS-LS) and dynamically mixed severities "
          },
          {
            "kind": "add",
            "text": "(T-CS-MSL), DCF remains superior with "
          },
          {
            "kind": "same",
            "text": "43.84% and "
          },
          {
            "kind": "add",
            "text": "55.27% average accuracies. On natural shifts "
          },
          {
            "kind": "same",
            "text": "(Table "
          },
          {
            "kind": "add",
            "text": "I, right), it averages "
          },
          {
            "kind": "same",
            "text": "41.58% on IN-R and IN-Sketch, "
          },
          {
            "kind": "add",
            "text": "exceeding "
          },
          {
            "kind": "same",
            "text": "the second-best "
          },
          {
            "kind": "add",
            "text": "DeYO (39.00%) "
          },
          {
            "kind": "same",
            "text": "by "
          },
          {
            "kind": "add",
            "text": "+2.58 pp. "
          },
          {
            "kind": "same",
            "text": "These results "
          },
          {
            "kind": "add",
            "text": "show "
          },
          {
            "kind": "same",
            "text": "that "
          },
          {
            "kind": "add",
            "text": "decoupled "
          },
          {
            "kind": "same",
            "text": "sample routing, subset-specific adaptation, and layer-wise stabilization effectively "
          },
          {
            "kind": "add",
            "text": "mitigate "
          },
          {
            "kind": "same",
            "text": "error accumulation "
          },
          {
            "kind": "add",
            "text": "in "
          },
          {
            "kind": "same",
            "text": "non-stationary "
          },
          {
            "kind": "same",
            "text": "streams. Stability "
          },
          {
            "kind": "add",
            "text": "on "
          },
          {
            "kind": "same",
            "text": "Long-Horizon Temporally Correlated Streams. "
          },
          {
            "kind": "same",
            "text": "To "
          },
          {
            "kind": "add",
            "text": "evaluate stability under prolonged deployment, "
          },
          {
            "kind": "same",
            "text": "we "
          },
          {
            "kind": "add",
            "text": "track adaptation across "
          },
          {
            "kind": "same",
            "text": "15 "
          },
          {
            "kind": "same",
            "text": "rounds "
          },
          {
            "kind": "add",
            "text": "spanning 225 sequentially evolving domains (⟪>1.12\\times 10^6⟫ samples) "
          },
          {
            "kind": "same",
            "text": "on "
          },
          {
            "kind": "add",
            "text": "ImageNet-C. "
          },
          {
            "kind": "same",
            "text": "As "
          },
          {
            "kind": "add",
            "text": "shown "
          },
          {
            "kind": "same",
            "text": "in Table "
          },
          {
            "kind": "add",
            "text": "IIa, most TTA baselines suffer severe performance collapse over prolonged adaptation: DeYO (40.97% at Round 1) and "
          },
          {
            "kind": "same",
            "text": "Tent "
          },
          {
            "kind": "add",
            "text": "(37.55%) fall "
          },
          {
            "kind": "same",
            "text": "to near-zero accuracy "
          },
          {
            "kind": "add",
            "text": "by Round 15 (0.12% and 0.49%, yielding ⟪\\Delta=-40.85⟫ pp and ⟪-37.06⟫ pp), while RoTTA, AEA, SPA, and PTTA show similarly large regressions (⟪\\Delta\\le-22.02⟫ pp). Although continual baselines such as "
          },
          {
            "kind": "same",
            "text": "CoTTA and SAR avoid "
          },
          {
            "kind": "add",
            "text": "total breakdown (⟪\\Delta>0⟫), "
          },
          {
            "kind": "same",
            "text": "their "
          },
          {
            "kind": "add",
            "text": "average accuracies remain limited (⟪\\le38.90\\%⟫). "
          },
          {
            "kind": "same",
            "text": "In contrast, DCF "
          },
          {
            "kind": "add",
            "text": "remains robust "
          },
          {
            "kind": "same",
            "text": "across all "
          },
          {
            "kind": "add",
            "text": "rounds without catastrophic collapse, achieving "
          },
          {
            "kind": "same",
            "text": "the highest "
          },
          {
            "kind": "add",
            "text": "average "
          },
          {
            "kind": "same",
            "text": "accuracy "
          },
          {
            "kind": "add",
            "text": "and positive net progression under T-CS (43.48%), T-CS-LS (43.27%), and T-CS-MSL (54.53%). These findings support "
          },
          {
            "kind": "same",
            "text": "our "
          },
          {
            "kind": "add",
            "text": "central argument that coordinated "
          },
          {
            "kind": "same",
            "text": "control of "
          },
          {
            "kind": "add",
            "text": "input "
          },
          {
            "kind": "same",
            "text": "evidence "
          },
          {
            "kind": "add",
            "text": "routing "
          },
          {
            "kind": "same",
            "text": "and layer-wise parameter "
          },
          {
            "kind": "add",
            "text": "retention improves long-horizon stability under the evaluated temporally correlated streams."
          }
        ]
      }
    },
    {
      "title": "Ablations and analysis",
      "originalPage": 10,
      "revisedPage": 7,
      "before": "Effect of Components. To isolate the contribution of each module in DCF, we conduct a comprehensive ablation study as shown in Table IV. The unconstrained self-training baseline suffers from catastrophic error accumulation, dropping to 0.49% in the Long-horizon T-CS scenario (Avg. 31.53%). Introducing the trusted-evidence action (PSR) filters shortcut-driven predictions, improving the overall average to 37.25%, while the geometry-repair action (RGR) further boosts performance (Avg. 40.55%) by reusing routed-away samples to mitigate representation bias. However, sample-side control alone still degrades over extended streams, reaching only 26.25% at Round 15. Crucially, CLR restricts harmful parameter drift, preventing late-stage collapse (maintaining 43.84%) and achieving the highest overall average of 46.27%. Leave-one-out results show drops without PSR (41.43%) or RGR (45.36%), confirming that sample-level evidence routing and layer-level parameter stabilization are complementary and indispensable for robust adaptation. Effect of Design Choices in Stress Probe and Router. As shown in Fig. 5, we further ablate the stress probe and routing rule in DCF. For the probe design, the Fourier-based operator achieves the best accuracy of 43.49%, outperforming pixel shuffle, low-pass filtering, and patch shuffle. This suggests that effective stress testing should not simply destroy image content, but should impose structured perturbations that preserve semantic layout while exposing shortcut-sensitive predictions. For the router design, our coupled entropy+PCS rule also obtains the highest accuracy of 43.49%, surpassing PCS-only routing as well as ETAGE-, SAR-, and DeYO-style variants [21, 14, 40]. The results indicate that PCS alone cannot exclude uncertain samples, while entropy- or gradient-based criteria alone may still retain confident but stress-inert predictions. The qualitative comparisons in Fig. 6 further support this conclusion: the Fourier probe better preserves global object structure, and DCF produces more semantically focused response maps than Tent. Overall, these results validate that the Fourier stress probe and coupled entropy+PCS router provide safer adaptation evidence for stable test-time adaptation. Pseudo-Label Purity and PCS-Entropy Space. To explain how our coupled routing mitigates confirmation bias, we evaluate pseudo-label purity on selected reliable samples. As shown in Table V, unconstrained self-training (Tent) attains only 42.7% purity, while entropy-only and PCS-only filtering provide modest improvements (44.0% and 47.1%). Combining both signals increases purity to 49.9%, indicating that PCS effectively removes confident but incorrect shortcut predictions missed by entropy. The PCS-Entropy distribution in Fig. 7 further supports this finding: for DCF, reliable samples (low entropy, high PCS) are cleaner and better separated from spurious predictions across adaptation stages, whereas low-entropy, low-PCS regions contain many confident errors. In contrast, Tent lacks such structural constraints, causing representation degradation and weaker clean/noisy separation. These results validate our motivation (O1): confidence alone is insufficient for reliability, and the Fourier stress probe provides a critical geometric filter for stable adaptation. Layer-wise drift trajectories. Fig. 8 provides complementary evidence for the parameter-side control view by tracking the layer-wise drift proxy ⟪\\varepsilon^{\\mathrm{par}}_{t,\\mathrm{block}} \\propto \\tfrac{1}{2}\\|\\theta_{t,\\mathrm{block}}-\\theta_{0,\\mathrm{block}}\\|^2_{I_{0,\\mathrm{block}}}⟫ over time. DCF exhibits a pulse-and-recover pattern: drift spikes at shift onsets are quickly suppressed by the stabilizer, whereas Tent shows cumulative growth, especially in deeper blocks. Static vs. Temporally-Correlated Streams. To highlight the specific challenge of temporal correlation, we compare adaptation performance under independently sampled (Static) and temporally-correlated (Long-horizon T-CS) test streams on ImageNet-C. As illustrated in Fig. 9, many baselines that perform reasonably well under static conditions (e.g., Tent, DeYO, and AEA) suffer severe performance degradation or catastrophic collapse under T-CS, exposing their vulnerability to error accumulation. In contrast, our DCF not only achieves the highest accuracy in both settings but also maintains robust stability when transitioning to temporally correlated shifts. This confirms that our sample- and layer-aware control effectively prevents the compounding errors induced by non-stationary continuous streams. Cross-Domain Transfer. Since TTA relies on self-training, it may over-specialize to narrow target distributions and thus degrade generalization to unseen domains. To assess cross-domain transfer, we adapt each method on one ImageNet-C corruption and evaluate it on the remaining 14 corruptions. As shown in Fig. 10, DCF consistently achieves the largest average accuracy gains across all source domains, indicating that its control mechanisms help preserve more generalizable representations. Notably, methods like RoTTA show large gains when adapted to certain source domains but suffer significant drops when evaluated on others, suggesting overfitting to specific shifts. In contrast, DCF maintains positive gains across all source domains, demonstrating its ability to adapt stably while retaining transferable features that generalize well across diverse unseen shifts. Generalizability across Architectures. To evaluate the generalizability of DCF across different model architectures, we test it on a range of backbones including ResNet-18 (RN-18), WideResNet-50 (WRN-50), ResNeXt-50 (RNX-50), ResNet-101 (RN-101), and ViT-B/16. As shown in Table VI, DCF consistently outperforms all baselines across these architectures under the T-CS scenario on ImageNet-C. Notably, the performance gap is particularly pronounced for larger models like ResNet-101 and ViT-B/16, where many baselines struggle to maintain stability. This suggests that our method’s control mechanisms effectively mitigate error accumulation even as model capacity increases, supporting its broad applicability in real-world deployment settings with diverse architectures. Hyperparameter Sensitivity. We analyze the joint landscapes of key control hyperparameters in Fig. 11. For sample routing, moderate thresholds ⟪(\\upsilon_{\\mathrm{PCS}}, \\upsilon_{\\mathrm{Ent}})⟫ best balance trusted-evidence purity and self-supervision volume. For parameter retention, performance is relatively stable to the weighting sharpness ⟪\\tau⟫ but sensitive to the fixed retention factor ⟪\\mu⟫: small ⟪\\mu⟫ limits plasticity, whereas ⟪\\mu \\to 1.0⟫ amplifies error accumulation. Notably, our dynamic layer-wise stabilizer (CLR) surpasses the best static-⟪\\mu⟫ baseline, reaching a peak average accuracy of 43.49%. This confirms the benefit of depth-aware, heterogeneous parameter control and supports our motivation (O3). Furthermore, DCF achieves a strong accuracy-runtime trade-off (Fig. 12): processing an image in 0.005s (A100 GPU), it rivals DeYO and SAR in speed while outpacing RoTTA, TRIBE, and SPA.",
      "after": "Effect of Components. To isolate each module’s contribution in DCF, we conduct an ablation study (Table III). The unconstrained baseline (Tent) suffers severe error accumulation, falling to 0.49% at Round 15 (Avg. 31.53%). Adding PSR improves average accuracy to 37.25% by restricting direct consistency learning to confident, probe-supported samples, and RGR further increases it to 40.55% by reusing routed-away samples for geometry repair. Yet sample-side control alone still degrades over long streams, reaching only 26.25% at Round 15. In contrast, CLR suppresses harmful layer-wise drift, maintaining 43.84% at Round 15 and achieving the best overall average of 46.27% across all scenarios. Leave-one-out results (41.43% without PSR; 45.36% without RGR) further confirm that the sample- and layer-level controls are complementary. Analysis of Probe-Supported Sample Routing (PSR). A central premise of DCF is that low predictive entropy does not guarantee reliable adaptation evidence, since confident predictions under continuous shifts may rely on brittle shortcut cues. We evaluate PSR using three complementary analyses: controlled shortcut diagnostics, probe and routing comparisons, and selected-sample purity and separation. (i) Controlled Shortcut Diagnostics: We construct a controlled ⟪224\\times224⟫ synthetic benchmark combining circle/square shapes with four sinusoidal textures as explicit shortcuts to diagnose probe sensitivity. As reported in Table IV, across nominal frequency bands, the Fourier probe preserves shape decisions (⟪\\geq 99.4\\%⟫ agreement) while separating shape from texture far more effectively than energy-matched pixel noise (⟪>3.4\\times⟫ PCS ratio vs. ⟪1.14\\times⟫). Across preserved, randomized, or reversed correlations, paired counterfactuals show that high-PCS samples exhibit lower shortcut dependence among confidence-matched candidates. Specifically, PCS discriminates task-relevant from shortcut-driven predictions with 0.81 AUROC (vs. 0.71 for pixel noise) and reduces trusted-set shortcut contamination from 24.6% to 11.8% at matched coverage. Additionally, on binary Colored-MNIST [49] with reversed shortcuts, DCF achieves 88.91% accuracy, outperforming baselines (see Table V). Together, these results support the joint use of predictive entropy and PCS for routing, showing that joint confidence- and stress-responsiveness routing better isolates reliable adaptation evidence from shortcut-driven predictions. (ii) Stress Probe and Router Design Choices: We next examine these choices on ImageNet-C (Fig. 5). The Fourier-based stress probe achieves the highest accuracy, outperforming pixel shuffling, patch shuffling, and low-pass filtering. As shown in Fig. 6, naive spatial perturbations disrupt global object layout, whereas the Fourier probe injects structured frequency-direction stress without rearranging image coordinates. Its routing value is reflected in both downstream accuracy and selected-sample quality. The coupled Entropy+PCS rule reaches 43.49%, outperforming PCS-only routing and the evaluated SAR-, DeYO-, and ETAGE-style filters [9, 35, 16]. These results highlight complementary roles for confidence and stress responsiveness: entropy suppresses ambiguous predictions, whereas PCS further distinguishes confident candidates according to their structured response. Their combination therefore yields more reliable routing under the evaluated shifts. (iii) Pseudo-Label Purity and Feature Space Separation: Finally, we evaluate whether the gain in selected-sample quality persists independently of selection quantity on ImageNet-C. As shown in Table VI, using the same frozen model state and matched trusted-set coverage, Entropy+PCS achieves the highest pseudo-label purity of 49.9%, compared with 44.0% for entropy-only routing and 47.1% for PCS-only routing. The diagnostic PCS–Entropy space in Fig. 7 provides a consistent view: Area 3 collects confident but stress-inert candidates, whereas Area 1 contains low-entropy, probe-responsive samples and remains relatively more reliable throughout adaptation. Together with the controlled shortcut diagnostics above, these results show that entropy and PCS provide complementary routing signals and improve selected-sample reliability at matched coverage, rather than merely changing the number of selected samples. Analysis of Routed-away Geometry Repair (RGR). Beyond filtering unreliable samples via PSR, we investigate whether the routed-away subset ⟪\\mathcal{U}_t⟫ should be discarded or reused for geometry repair. To assess the role of OT in RGR, we compare it with two alternatives: moment matching, which aligns feature statistics with prototypes, and prototype contrastive alignment, which pulls features toward nearest prototypes. As shown in Table VII, both alternatives perform worse than simply discarding ⟪\\mathcal{U}_t⟫ under long-horizon adaptation (41.51% and 42.33% vs. 42.88%), whereas OT-based repair improves accuracy to 42.91% with a uniform prior and 43.84% with the dynamic prior. This highlights the importance of transport-based alignment and adaptive marginal estimation. We further examine sensitivity to the routed-away proportion by varying the fixed ratio from 10% to 90% (Table VIII). Performance remains stable when 10–50% of samples are routed away, with accuracy ranging from 42.98% to 43.49% and limited centroid drift. Accuracy declines only when routed-away samples dominate the batch, reaching 22.12% at 90%, where trusted supervision becomes insufficient. Overall, these results delineate a broad stable regime, highlighting the complementarity between trusted consistency adaptation and routed-away geometry repair. Analysis of Curvature-aware Layer Retention (CLR). Tracking layer-wise parameter drift in Fig. 8 shows that DCF follows a \"pulse-and-recover\" pattern rather than persistent drift accumulation. As shown in Fig. 9, the last ResNet block (layer4) retains the largest gate, ⟪\\mu_t^l\\approx0.98⟫, while initial_bn and layer1 vary within ⟪0.93⟫–⟪0.96⟫, and layer2 remains near ⟪0.95⟫–⟪0.96⟫. Layer3 is similar but can fall to about ⟪0.92⟫ under strong mismatch. Responses are corruption dependent: Motion most strongly suppresses initial_bn, Glass affects layer1, and Frost most strongly reduces layer3, whereas layer4 stays near ⟪0.98⟫. Temporally, suppression around domain indices ⟪30⟫–⟪45⟫ recovers toward ⟪0.95⟫–⟪0.96⟫ in later domains, indicating that CLR applies transient source anchoring rather than progressively freezing layers. Ablations in Table IX support layer-block control and compare the default gradient-square proxy with expected Fisher and a Hutchinson-based diagonal second-order approximation [50], which yield small gains at additional computational cost. Static vs. Temporally Correlated Streams. To examine performance across streaming protocols, we compare adaptation under independently sampled (Static) and temporally correlated long-horizon (Long-horizon T-CS) test streams on ImageNet-C. As shown in Fig. 10, several baselines that perform reasonably well in the Static setting, including Tent, DeYO, and AEA, degrade sharply or collapse under Long-horizon T-CS, indicating strong susceptibility to accumulated adaptation errors. In contrast, DCF achieves the highest accuracy in both settings and remains stable under temporally correlated shifts. These results demonstrate that its sample- and layer-aware control effectively mitigates error accumulation in non-stationary continuous streams. Generalizability across Architectures. To assess architectural generalizability, we evaluate DCF with ResNet-18 (RN-18), WideResNet-50 (WRN-50), ResNeXt-50 (RNX-50), ResNet-101 (RN-101), and ViT-B/16. As shown in Table X, DCF consistently achieves the best performance across all evaluated backbones. Its effectiveness extends from lightweight ResNet-18 to deeper ResNet-101 and across distinct architectural families including WideResNet, ResNeXt, and Vision Transformer, with particularly pronounced gains on ResNet-101 and ViT-B/16, where several baselines struggle to maintain stability. These results demonstrate robust generalizability across model scales and architectures. Cross-Domain Transfer. Online TTA may over-specialize a model to the adaptation stream, thereby reducing its ability to generalize to unseen domains. We therefore evaluate post-adaptation transfer by adapting to a source shift and directly testing on unseen targets without further updates, using synthetic corruptions on ImageNet-C and artistic domains on DomainNet-126. On ImageNet-C (Fig. 11a), DCF achieves the largest average gain over No Adapt, ⟪30.30 \\pm 0.39⟫ points, exceeding AEA (⟪27.95 \\pm 0.05⟫) by ⟪2.35⟫ points. This advantage is statistically significant across five matched runs (paired ⟪t⟫-test, ⟪t(4)=14.30⟫, ⟪p=1.39 \\times 10^{-4}⟫), whereas RoTTA exhibits negative transfer on several corruptions. On DomainNet-126 (Fig. 11b), DCF also outperforms DeYO on all Adaptation⟪\\to⟫Evaluation pairs, achieving ⟪61.40\\%⟫ mean accuracy compared with ⟪60.13\\%⟫ (⟪+1.27⟫ points), with a significant advantage across five matched runs (paired ⟪t⟫-test, ⟪t(4)=12.01⟫, ⟪p=2.75 \\times 10^{-4}⟫). Together, these results indicate that decoupled control preserves representations that remain transferable beyond the adaptation domain. Hyperparameter Sensitivity. As shown in Fig. 12, DCF is generally insensitive to its key hyperparameters. In Fig. 12a, the proposed dynamic CLR consistently outperforms all static retention settings across different ⟪\\tau⟫ and ⟪\\mu⟫, highlighting the benefit of layer-wise adaptive retention. Fig. 12b shows a broad high-accuracy region for ⟪(\\upsilon_{\\mathrm{PCS}},\\upsilon_{\\mathrm{Ent}})⟫. For a new dataset, a practical rule is to start from ⟪\\upsilon_{\\mathrm{PCS}}=0.2⟫ and ⟪\\upsilon_{\\mathrm{Ent}}=0.6\\ln K⟫ and perform only coarse adjustment if necessary, rather than dataset-specific fine tuning. Likewise, performance varies only mildly across ⟪\\lambda⟫ and the frequency range in Fig. 12c. Finally, Fig. 12d shows stable accuracy across ⟪\\varepsilon_{\\mathrm{OT}}⟫ and ⟪N_{\\mathrm{sk}}⟫, suggesting that reliable OT alignment can be achieved with only a few Sinkhorn iterations. Overall, DCF requires little hyperparameter tuning for stable performance. Computational Overhead. As benchmarked on an NVIDIA A100 (Table XI), the full DCF achieves ⟪43.48\\%⟫ average accuracy with 24.6 GFLOPs, 14,690 MB peak memory, and 5.2 ms/image latency. DCF-Lite reduces computational cost by removing the source/candidate model copies and per-sample gradient computation, retaining gradients only through the clean adaptation branch, and using a detached Fourier probe for PSR routing and transport assignment. With ⟪N_{\\mathrm{sk}}=1⟫, Lite requires only 9.4 GFLOPs and 6,080 MB peak memory, corresponding to reductions of ⟪61.8\\%⟫ and ⟪58.6\\%⟫, respectively, relative to the full model, while reducing latency to 3.19 ms/image. It achieves ⟪42.06\\%⟫ accuracy, only ⟪1.42⟫ points below full DCF and ⟪3.16⟫ points above SAR (⟪38.90\\%⟫), providing a favorable accuracy–efficiency trade-off.",
      "diff": {
        "original": [
          {
            "kind": "same",
            "text": "Effect of Components. To isolate "
          },
          {
            "kind": "del",
            "text": "the "
          },
          {
            "kind": "same",
            "text": "contribution "
          },
          {
            "kind": "del",
            "text": "of each module "
          },
          {
            "kind": "same",
            "text": "in DCF, we conduct "
          },
          {
            "kind": "del",
            "text": "a comprehensive "
          },
          {
            "kind": "same",
            "text": "ablation study "
          },
          {
            "kind": "del",
            "text": "as shown in Table IV. "
          },
          {
            "kind": "same",
            "text": "The unconstrained "
          },
          {
            "kind": "del",
            "text": "self-training "
          },
          {
            "kind": "same",
            "text": "baseline "
          },
          {
            "kind": "same",
            "text": "suffers "
          },
          {
            "kind": "del",
            "text": "from catastrophic "
          },
          {
            "kind": "same",
            "text": "error accumulation, "
          },
          {
            "kind": "del",
            "text": "dropping "
          },
          {
            "kind": "same",
            "text": "to 0.49% "
          },
          {
            "kind": "del",
            "text": "in the Long-horizon T-CS scenario "
          },
          {
            "kind": "same",
            "text": "(Avg. 31.53%). "
          },
          {
            "kind": "del",
            "text": "Introducing the trusted-evidence action (PSR) filters shortcut-driven predictions, improving the overall "
          },
          {
            "kind": "same",
            "text": "average "
          },
          {
            "kind": "same",
            "text": "to "
          },
          {
            "kind": "del",
            "text": "37.25%, while the geometry-repair action (RGR) "
          },
          {
            "kind": "same",
            "text": "further "
          },
          {
            "kind": "del",
            "text": "boosts performance (Avg. 40.55%) "
          },
          {
            "kind": "same",
            "text": "by reusing routed-away samples "
          },
          {
            "kind": "del",
            "text": "to mitigate representation bias. However, "
          },
          {
            "kind": "same",
            "text": "sample-side control alone still degrades over "
          },
          {
            "kind": "del",
            "text": "extended "
          },
          {
            "kind": "same",
            "text": "streams, reaching only 26.25% at Round 15. "
          },
          {
            "kind": "del",
            "text": "Crucially, "
          },
          {
            "kind": "same",
            "text": "CLR "
          },
          {
            "kind": "del",
            "text": "restricts "
          },
          {
            "kind": "same",
            "text": "harmful "
          },
          {
            "kind": "del",
            "text": "parameter "
          },
          {
            "kind": "same",
            "text": "drift, "
          },
          {
            "kind": "del",
            "text": "preventing late-stage collapse (maintaining 43.84%) "
          },
          {
            "kind": "same",
            "text": "and achieving the "
          },
          {
            "kind": "del",
            "text": "highest "
          },
          {
            "kind": "same",
            "text": "overall average of "
          },
          {
            "kind": "del",
            "text": "46.27%. "
          },
          {
            "kind": "same",
            "text": "Leave-one-out results "
          },
          {
            "kind": "del",
            "text": "show drops "
          },
          {
            "kind": "same",
            "text": "without "
          },
          {
            "kind": "del",
            "text": "PSR (41.43%) or RGR (45.36%), confirming "
          },
          {
            "kind": "same",
            "text": "that "
          },
          {
            "kind": "del",
            "text": "sample-level evidence routing "
          },
          {
            "kind": "same",
            "text": "and layer-level "
          },
          {
            "kind": "del",
            "text": "parameter stabilization "
          },
          {
            "kind": "same",
            "text": "are "
          },
          {
            "kind": "same",
            "text": "complementary "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "del",
            "text": "indispensable "
          },
          {
            "kind": "same",
            "text": "for "
          },
          {
            "kind": "del",
            "text": "robust adaptation. Effect "
          },
          {
            "kind": "same",
            "text": "of "
          },
          {
            "kind": "del",
            "text": "Design Choices in "
          },
          {
            "kind": "same",
            "text": "Stress Probe and "
          },
          {
            "kind": "del",
            "text": "Router. "
          },
          {
            "kind": "same",
            "text": "As shown in Fig. "
          },
          {
            "kind": "del",
            "text": "5, we further ablate the stress probe and routing rule in DCF. For the probe design, the Fourier-based operator achieves the best accuracy of 43.49%, outperforming pixel shuffle, low-pass filtering, and patch shuffle. This suggests that effective stress testing should not simply destroy image content, but should impose structured "
          },
          {
            "kind": "same",
            "text": "perturbations "
          },
          {
            "kind": "del",
            "text": "that preserve semantic layout while exposing shortcut-sensitive predictions. For the router design, our coupled entropy+PCS rule also obtains the highest accuracy of 43.49%, surpassing PCS-only routing as well as ETAGE-, SAR-, and DeYO-style variants [21, 14, 40]. The results indicate that PCS alone cannot exclude uncertain samples, while entropy- or gradient-based criteria alone may still retain confident but stress-inert predictions. The qualitative comparisons in Fig. 6 further support this conclusion: "
          },
          {
            "kind": "same",
            "text": "the Fourier probe "
          },
          {
            "kind": "del",
            "text": "better preserves global object structure, "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "del",
            "text": "DCF produces "
          },
          {
            "kind": "same",
            "text": "more "
          },
          {
            "kind": "del",
            "text": "semantically focused response maps than Tent. Overall, these results validate that "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "del",
            "text": "Fourier stress probe and coupled entropy+PCS router provide safer adaptation evidence for stable test-time adaptation. "
          },
          {
            "kind": "same",
            "text": "Pseudo-Label Purity and "
          },
          {
            "kind": "del",
            "text": "PCS-Entropy Space. To explain how our coupled routing mitigates confirmation bias, "
          },
          {
            "kind": "same",
            "text": "we evaluate "
          },
          {
            "kind": "del",
            "text": "pseudo-label purity "
          },
          {
            "kind": "same",
            "text": "on "
          },
          {
            "kind": "del",
            "text": "selected reliable samples. "
          },
          {
            "kind": "same",
            "text": "As shown in Table "
          },
          {
            "kind": "del",
            "text": "V, unconstrained self-training (Tent) attains only 42.7% purity, while "
          },
          {
            "kind": "same",
            "text": "entropy-only "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "same",
            "text": "PCS-only "
          },
          {
            "kind": "del",
            "text": "filtering provide modest improvements (44.0% and 47.1%). Combining both signals increases purity to 49.9%, indicating that PCS effectively removes confident but incorrect shortcut predictions missed by entropy. "
          },
          {
            "kind": "same",
            "text": "The "
          },
          {
            "kind": "del",
            "text": "PCS-Entropy distribution "
          },
          {
            "kind": "same",
            "text": "in Fig. 7 "
          },
          {
            "kind": "del",
            "text": "further supports this finding: for DCF, reliable samples (low entropy, high PCS) are cleaner and better separated from spurious predictions across adaptation stages, whereas low-entropy, low-PCS regions contain many confident errors. In contrast, Tent lacks such structural constraints, causing representation degradation and weaker clean/noisy separation. These results validate our motivation (O1): confidence alone is insufficient for reliability, and the Fourier stress probe "
          },
          {
            "kind": "same",
            "text": "provides a "
          },
          {
            "kind": "del",
            "text": "critical geometric filter "
          },
          {
            "kind": "same",
            "text": "for "
          },
          {
            "kind": "same",
            "text": "stable "
          },
          {
            "kind": "del",
            "text": "adaptation. Layer-wise "
          },
          {
            "kind": "same",
            "text": "drift "
          },
          {
            "kind": "del",
            "text": "trajectories. "
          },
          {
            "kind": "same",
            "text": "Fig. 8 "
          },
          {
            "kind": "del",
            "text": "provides complementary evidence for "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "del",
            "text": "parameter-side "
          },
          {
            "kind": "same",
            "text": "control "
          },
          {
            "kind": "del",
            "text": "view by tracking "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "del",
            "text": "layer-wise drift "
          },
          {
            "kind": "same",
            "text": "proxy "
          },
          {
            "kind": "del",
            "text": "⟪\\varepsilon^{\\mathrm{par}}_{t,\\mathrm{block}} \\propto \\tfrac{1}{2}\\|\\theta_{t,\\mathrm{block}}-\\theta_{0,\\mathrm{block}}\\|^2_{I_{0,\\mathrm{block}}}⟫ over time. DCF exhibits "
          },
          {
            "kind": "same",
            "text": "a "
          },
          {
            "kind": "del",
            "text": "pulse-and-recover pattern: drift spikes "
          },
          {
            "kind": "same",
            "text": "at "
          },
          {
            "kind": "del",
            "text": "shift onsets are quickly suppressed by the stabilizer, whereas Tent shows cumulative growth, especially in deeper blocks. "
          },
          {
            "kind": "same",
            "text": "Static vs. "
          },
          {
            "kind": "del",
            "text": "Temporally-Correlated "
          },
          {
            "kind": "same",
            "text": "Streams. To "
          },
          {
            "kind": "del",
            "text": "highlight the specific challenge of temporal correlation, "
          },
          {
            "kind": "same",
            "text": "we compare adaptation "
          },
          {
            "kind": "del",
            "text": "performance "
          },
          {
            "kind": "same",
            "text": "under independently sampled (Static) and "
          },
          {
            "kind": "del",
            "text": "temporally-correlated "
          },
          {
            "kind": "same",
            "text": "(Long-horizon T-CS) test streams on ImageNet-C. As "
          },
          {
            "kind": "del",
            "text": "illustrated "
          },
          {
            "kind": "same",
            "text": "in Fig. "
          },
          {
            "kind": "del",
            "text": "9, many "
          },
          {
            "kind": "same",
            "text": "baselines that perform reasonably well "
          },
          {
            "kind": "del",
            "text": "under static conditions (e.g., "
          },
          {
            "kind": "same",
            "text": "Tent, DeYO, and "
          },
          {
            "kind": "del",
            "text": "AEA) suffer severe performance degradation "
          },
          {
            "kind": "same",
            "text": "or "
          },
          {
            "kind": "del",
            "text": "catastrophic "
          },
          {
            "kind": "same",
            "text": "collapse under "
          },
          {
            "kind": "same",
            "text": "T-CS, "
          },
          {
            "kind": "del",
            "text": "exposing their vulnerability "
          },
          {
            "kind": "same",
            "text": "to "
          },
          {
            "kind": "del",
            "text": "error accumulation. "
          },
          {
            "kind": "same",
            "text": "In contrast, "
          },
          {
            "kind": "del",
            "text": "our "
          },
          {
            "kind": "same",
            "text": "DCF "
          },
          {
            "kind": "del",
            "text": "not only "
          },
          {
            "kind": "same",
            "text": "achieves the highest accuracy in both settings "
          },
          {
            "kind": "del",
            "text": "but also maintains robust stability when transitioning to "
          },
          {
            "kind": "same",
            "text": "temporally correlated shifts. "
          },
          {
            "kind": "del",
            "text": "This confirms "
          },
          {
            "kind": "same",
            "text": "that "
          },
          {
            "kind": "del",
            "text": "our "
          },
          {
            "kind": "same",
            "text": "sample- and layer-aware control effectively "
          },
          {
            "kind": "del",
            "text": "prevents the compounding errors induced by "
          },
          {
            "kind": "same",
            "text": "non-stationary continuous streams. "
          },
          {
            "kind": "del",
            "text": "Cross-Domain Transfer. Since TTA relies on self-training, it may over-specialize to narrow target distributions and thus degrade generalization to unseen domains. To assess cross-domain transfer, we adapt each method on one ImageNet-C corruption and evaluate it on the remaining 14 corruptions. As shown in Fig. 10, DCF consistently achieves the largest average accuracy gains across all source domains, indicating that its control mechanisms help preserve more generalizable representations. Notably, methods like RoTTA show large gains when adapted to certain source domains but suffer significant drops when evaluated on others, suggesting overfitting to specific shifts. In contrast, DCF maintains positive gains across all source domains, demonstrating its ability to adapt stably while retaining transferable features that generalize well across diverse unseen shifts. "
          },
          {
            "kind": "same",
            "text": "Generalizability across Architectures. To "
          },
          {
            "kind": "same",
            "text": "evaluate "
          },
          {
            "kind": "del",
            "text": "the generalizability of "
          },
          {
            "kind": "same",
            "text": "DCF "
          },
          {
            "kind": "del",
            "text": "across different model architectures, we test it on a range of backbones including "
          },
          {
            "kind": "same",
            "text": "ResNet-18 (RN-18), WideResNet-50 (WRN-50), ResNeXt-50 (RNX-50), ResNet-101 (RN-101), and ViT-B/16. As shown in Table "
          },
          {
            "kind": "del",
            "text": "VI, "
          },
          {
            "kind": "same",
            "text": "DCF consistently "
          },
          {
            "kind": "del",
            "text": "outperforms "
          },
          {
            "kind": "same",
            "text": "all "
          },
          {
            "kind": "del",
            "text": "baselines "
          },
          {
            "kind": "same",
            "text": "across "
          },
          {
            "kind": "del",
            "text": "these architectures under the T-CS scenario on ImageNet-C. Notably, the performance gap is "
          },
          {
            "kind": "same",
            "text": "particularly pronounced "
          },
          {
            "kind": "del",
            "text": "for larger models like "
          },
          {
            "kind": "same",
            "text": "ResNet-101 and ViT-B/16, where "
          },
          {
            "kind": "del",
            "text": "many "
          },
          {
            "kind": "same",
            "text": "baselines struggle to maintain stability. "
          },
          {
            "kind": "same",
            "text": "This "
          },
          {
            "kind": "del",
            "text": "suggests "
          },
          {
            "kind": "same",
            "text": "that "
          },
          {
            "kind": "del",
            "text": "our method’s "
          },
          {
            "kind": "same",
            "text": "control "
          },
          {
            "kind": "del",
            "text": "mechanisms effectively mitigate error accumulation even as model capacity increases, supporting its broad applicability in real-world deployment settings with diverse architectures. "
          },
          {
            "kind": "same",
            "text": "Hyperparameter Sensitivity. "
          },
          {
            "kind": "del",
            "text": "We analyze the joint landscapes of key control hyperparameters "
          },
          {
            "kind": "same",
            "text": "in Fig. "
          },
          {
            "kind": "del",
            "text": "11. For sample routing, moderate thresholds ⟪(\\upsilon_{\\mathrm{PCS}}, \\upsilon_{\\mathrm{Ent}})⟫ best balance trusted-evidence purity "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "del",
            "text": "self-supervision volume. For parameter retention, performance is relatively stable to the weighting sharpness ⟪\\tau⟫ but sensitive to the fixed retention factor "
          },
          {
            "kind": "same",
            "text": "⟪\\mu⟫"
          },
          {
            "kind": "del",
            "text": ": small ⟪\\mu⟫ limits plasticity, whereas ⟪\\mu \\to 1.0⟫ amplifies error accumulation. Notably, our dynamic layer-wise stabilizer (CLR) surpasses the best static-⟪\\mu⟫ baseline, reaching a peak average accuracy of 43.49%. This confirms "
          },
          {
            "kind": "same",
            "text": "the benefit of "
          },
          {
            "kind": "del",
            "text": "depth-aware, heterogeneous parameter control "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "del",
            "text": "supports our motivation (O3). Furthermore, "
          },
          {
            "kind": "same",
            "text": "DCF achieves "
          },
          {
            "kind": "same",
            "text": "a "
          },
          {
            "kind": "del",
            "text": "strong accuracy-runtime trade-off (Fig. 12): processing an image in 0.005s (A100 GPU), it rivals DeYO "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "same",
            "text": "SAR "
          },
          {
            "kind": "del",
            "text": "in speed while outpacing RoTTA, TRIBE, and SPA."
          }
        ],
        "revised": [
          {
            "kind": "same",
            "text": "Effect of Components. To isolate "
          },
          {
            "kind": "add",
            "text": "each module’s "
          },
          {
            "kind": "same",
            "text": "contribution "
          },
          {
            "kind": "same",
            "text": "in DCF, we conduct "
          },
          {
            "kind": "add",
            "text": "an "
          },
          {
            "kind": "same",
            "text": "ablation study "
          },
          {
            "kind": "add",
            "text": "(Table III). "
          },
          {
            "kind": "same",
            "text": "The unconstrained "
          },
          {
            "kind": "same",
            "text": "baseline "
          },
          {
            "kind": "add",
            "text": "(Tent) "
          },
          {
            "kind": "same",
            "text": "suffers "
          },
          {
            "kind": "add",
            "text": "severe "
          },
          {
            "kind": "same",
            "text": "error accumulation, "
          },
          {
            "kind": "add",
            "text": "falling "
          },
          {
            "kind": "same",
            "text": "to 0.49% "
          },
          {
            "kind": "add",
            "text": "at Round 15 "
          },
          {
            "kind": "same",
            "text": "(Avg. 31.53%). "
          },
          {
            "kind": "add",
            "text": "Adding PSR improves "
          },
          {
            "kind": "same",
            "text": "average "
          },
          {
            "kind": "add",
            "text": "accuracy "
          },
          {
            "kind": "same",
            "text": "to "
          },
          {
            "kind": "add",
            "text": "37.25% by restricting direct consistency learning to confident, probe-supported samples, and RGR "
          },
          {
            "kind": "same",
            "text": "further "
          },
          {
            "kind": "add",
            "text": "increases it to 40.55% "
          },
          {
            "kind": "same",
            "text": "by reusing routed-away samples "
          },
          {
            "kind": "add",
            "text": "for geometry repair. Yet "
          },
          {
            "kind": "same",
            "text": "sample-side control alone still degrades over "
          },
          {
            "kind": "add",
            "text": "long "
          },
          {
            "kind": "same",
            "text": "streams, reaching only 26.25% at Round 15. "
          },
          {
            "kind": "add",
            "text": "In contrast, "
          },
          {
            "kind": "same",
            "text": "CLR "
          },
          {
            "kind": "add",
            "text": "suppresses "
          },
          {
            "kind": "same",
            "text": "harmful "
          },
          {
            "kind": "add",
            "text": "layer-wise "
          },
          {
            "kind": "same",
            "text": "drift, "
          },
          {
            "kind": "add",
            "text": "maintaining 43.84% at Round 15 "
          },
          {
            "kind": "same",
            "text": "and achieving the "
          },
          {
            "kind": "add",
            "text": "best "
          },
          {
            "kind": "same",
            "text": "overall average of "
          },
          {
            "kind": "add",
            "text": "46.27% across all scenarios. "
          },
          {
            "kind": "same",
            "text": "Leave-one-out results "
          },
          {
            "kind": "add",
            "text": "(41.43% "
          },
          {
            "kind": "same",
            "text": "without "
          },
          {
            "kind": "add",
            "text": "PSR; 45.36% without RGR) further confirm "
          },
          {
            "kind": "same",
            "text": "that "
          },
          {
            "kind": "add",
            "text": "the sample- "
          },
          {
            "kind": "same",
            "text": "and layer-level "
          },
          {
            "kind": "add",
            "text": "controls "
          },
          {
            "kind": "same",
            "text": "are "
          },
          {
            "kind": "add",
            "text": "complementary. Analysis of Probe-Supported Sample Routing (PSR). A central premise of DCF is that low predictive entropy does not guarantee reliable adaptation evidence, since confident predictions under continuous shifts may rely on brittle shortcut cues. We evaluate PSR using three "
          },
          {
            "kind": "same",
            "text": "complementary "
          },
          {
            "kind": "add",
            "text": "analyses: controlled shortcut diagnostics, probe "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "add",
            "text": "routing comparisons, and selected-sample purity and separation. (i) Controlled Shortcut Diagnostics: We construct a controlled ⟪224\\times224⟫ synthetic benchmark combining circle/square shapes with four sinusoidal textures as explicit shortcuts to diagnose probe sensitivity. As reported in Table IV, across nominal frequency bands, the Fourier probe preserves shape decisions (⟪\\geq 99.4\\%⟫ agreement) while separating shape from texture far more effectively than energy-matched pixel noise (⟪>3.4\\times⟫ PCS ratio vs. ⟪1.14\\times⟫). Across preserved, randomized, or reversed correlations, paired counterfactuals show that high-PCS samples exhibit lower shortcut dependence among confidence-matched candidates. Specifically, PCS discriminates task-relevant from shortcut-driven predictions with 0.81 AUROC (vs. 0.71 "
          },
          {
            "kind": "same",
            "text": "for "
          },
          {
            "kind": "add",
            "text": "pixel noise) and reduces trusted-set shortcut contamination from 24.6% to 11.8% at matched coverage. Additionally, on binary Colored-MNIST [49] with reversed shortcuts, DCF achieves 88.91% accuracy, outperforming baselines (see Table V). Together, these results support the joint use "
          },
          {
            "kind": "same",
            "text": "of "
          },
          {
            "kind": "add",
            "text": "predictive entropy and PCS for routing, showing that joint confidence- and stress-responsiveness routing better isolates reliable adaptation evidence from shortcut-driven predictions. (ii) "
          },
          {
            "kind": "same",
            "text": "Stress Probe and "
          },
          {
            "kind": "add",
            "text": "Router Design Choices: We next examine these choices on ImageNet-C (Fig. 5). The Fourier-based stress probe achieves the highest accuracy, outperforming pixel shuffling, patch shuffling, and low-pass filtering. "
          },
          {
            "kind": "same",
            "text": "As shown in Fig. "
          },
          {
            "kind": "add",
            "text": "6, naive spatial "
          },
          {
            "kind": "same",
            "text": "perturbations "
          },
          {
            "kind": "add",
            "text": "disrupt global object layout, whereas "
          },
          {
            "kind": "same",
            "text": "the Fourier probe "
          },
          {
            "kind": "add",
            "text": "injects structured frequency-direction stress without rearranging image coordinates. Its routing value is reflected in both downstream accuracy "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "add",
            "text": "selected-sample quality. The coupled Entropy+PCS rule reaches 43.49%, outperforming PCS-only routing and the evaluated SAR-, DeYO-, and ETAGE-style filters [9, 35, 16]. These results highlight complementary roles for confidence and stress responsiveness: entropy suppresses ambiguous predictions, whereas PCS further distinguishes confident candidates according to their structured response. Their combination therefore yields "
          },
          {
            "kind": "same",
            "text": "more "
          },
          {
            "kind": "add",
            "text": "reliable routing under "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "add",
            "text": "evaluated shifts. (iii) "
          },
          {
            "kind": "same",
            "text": "Pseudo-Label Purity and "
          },
          {
            "kind": "add",
            "text": "Feature Space Separation: Finally, "
          },
          {
            "kind": "same",
            "text": "we evaluate "
          },
          {
            "kind": "add",
            "text": "whether the gain in selected-sample quality persists independently of selection quantity "
          },
          {
            "kind": "same",
            "text": "on "
          },
          {
            "kind": "add",
            "text": "ImageNet-C. "
          },
          {
            "kind": "same",
            "text": "As shown in Table "
          },
          {
            "kind": "add",
            "text": "VI, using the same frozen model state and matched trusted-set coverage, Entropy+PCS achieves the highest pseudo-label purity of 49.9%, compared with 44.0% for "
          },
          {
            "kind": "same",
            "text": "entropy-only "
          },
          {
            "kind": "add",
            "text": "routing "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "add",
            "text": "47.1% for "
          },
          {
            "kind": "same",
            "text": "PCS-only "
          },
          {
            "kind": "add",
            "text": "routing. "
          },
          {
            "kind": "same",
            "text": "The "
          },
          {
            "kind": "add",
            "text": "diagnostic PCS–Entropy space "
          },
          {
            "kind": "same",
            "text": "in Fig. 7 "
          },
          {
            "kind": "same",
            "text": "provides a "
          },
          {
            "kind": "add",
            "text": "consistent view: Area 3 collects confident but stress-inert candidates, whereas Area 1 contains low-entropy, probe-responsive samples and remains relatively more reliable throughout adaptation. Together with the controlled shortcut diagnostics above, these results show that entropy and PCS provide complementary routing signals and improve selected-sample reliability at matched coverage, rather than merely changing the number of selected samples. Analysis of Routed-away Geometry Repair (RGR). Beyond filtering unreliable samples via PSR, we investigate whether the routed-away subset ⟪\\mathcal{U}_t⟫ should be discarded or reused "
          },
          {
            "kind": "same",
            "text": "for "
          },
          {
            "kind": "add",
            "text": "geometry repair. To assess the role of OT in RGR, we compare it with two alternatives: moment matching, which aligns feature statistics with prototypes, and prototype contrastive alignment, which pulls features toward nearest prototypes. As shown in Table VII, both alternatives perform worse than simply discarding ⟪\\mathcal{U}_t⟫ under long-horizon adaptation (41.51% and 42.33% vs. 42.88%), whereas OT-based repair improves accuracy to 42.91% with a uniform prior and 43.84% with the dynamic prior. This highlights the importance of transport-based alignment and adaptive marginal estimation. We further examine sensitivity to the routed-away proportion by varying the fixed ratio from 10% to 90% (Table VIII). Performance remains "
          },
          {
            "kind": "same",
            "text": "stable "
          },
          {
            "kind": "add",
            "text": "when 10–50% of samples are routed away, with accuracy ranging from 42.98% to 43.49% and limited centroid drift. Accuracy declines only when routed-away samples dominate the batch, reaching 22.12% at 90%, where trusted supervision becomes insufficient. Overall, these results delineate a broad stable regime, highlighting the complementarity between trusted consistency adaptation and routed-away geometry repair. Analysis of Curvature-aware Layer Retention (CLR). Tracking layer-wise parameter "
          },
          {
            "kind": "same",
            "text": "drift "
          },
          {
            "kind": "add",
            "text": "in "
          },
          {
            "kind": "same",
            "text": "Fig. 8 "
          },
          {
            "kind": "add",
            "text": "shows that DCF follows a \"pulse-and-recover\" pattern rather than persistent drift accumulation. As shown in Fig. 9, "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "add",
            "text": "last ResNet block (layer4) retains the largest gate, ⟪\\mu_t^l\\approx0.98⟫, while initial_bn and layer1 vary within ⟪0.93⟫–⟪0.96⟫, and layer2 remains near ⟪0.95⟫–⟪0.96⟫. Layer3 is similar but can fall to about ⟪0.92⟫ under strong mismatch. Responses are corruption dependent: Motion most strongly suppresses initial_bn, Glass affects layer1, and Frost most strongly reduces layer3, whereas layer4 stays near ⟪0.98⟫. Temporally, suppression around domain indices ⟪30⟫–⟪45⟫ recovers toward ⟪0.95⟫–⟪0.96⟫ in later domains, indicating that CLR applies transient source anchoring rather than progressively freezing layers. Ablations in Table IX support layer-block "
          },
          {
            "kind": "same",
            "text": "control "
          },
          {
            "kind": "add",
            "text": "and compare "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "add",
            "text": "default gradient-square "
          },
          {
            "kind": "same",
            "text": "proxy "
          },
          {
            "kind": "add",
            "text": "with expected Fisher and "
          },
          {
            "kind": "same",
            "text": "a "
          },
          {
            "kind": "add",
            "text": "Hutchinson-based diagonal second-order approximation [50], which yield small gains "
          },
          {
            "kind": "same",
            "text": "at "
          },
          {
            "kind": "add",
            "text": "additional computational cost. "
          },
          {
            "kind": "same",
            "text": "Static vs. "
          },
          {
            "kind": "add",
            "text": "Temporally Correlated "
          },
          {
            "kind": "same",
            "text": "Streams. To "
          },
          {
            "kind": "add",
            "text": "examine performance across streaming protocols, "
          },
          {
            "kind": "same",
            "text": "we compare adaptation "
          },
          {
            "kind": "same",
            "text": "under independently sampled (Static) and "
          },
          {
            "kind": "add",
            "text": "temporally correlated long-horizon "
          },
          {
            "kind": "same",
            "text": "(Long-horizon T-CS) test streams on ImageNet-C. As "
          },
          {
            "kind": "add",
            "text": "shown "
          },
          {
            "kind": "same",
            "text": "in Fig. "
          },
          {
            "kind": "add",
            "text": "10, several "
          },
          {
            "kind": "same",
            "text": "baselines that perform reasonably well "
          },
          {
            "kind": "add",
            "text": "in the Static setting, including "
          },
          {
            "kind": "same",
            "text": "Tent, DeYO, and "
          },
          {
            "kind": "add",
            "text": "AEA, degrade sharply "
          },
          {
            "kind": "same",
            "text": "or "
          },
          {
            "kind": "same",
            "text": "collapse under "
          },
          {
            "kind": "add",
            "text": "Long-horizon "
          },
          {
            "kind": "same",
            "text": "T-CS, "
          },
          {
            "kind": "add",
            "text": "indicating strong susceptibility "
          },
          {
            "kind": "same",
            "text": "to "
          },
          {
            "kind": "add",
            "text": "accumulated adaptation errors. "
          },
          {
            "kind": "same",
            "text": "In contrast, "
          },
          {
            "kind": "same",
            "text": "DCF "
          },
          {
            "kind": "same",
            "text": "achieves the highest accuracy in both settings "
          },
          {
            "kind": "add",
            "text": "and remains stable under "
          },
          {
            "kind": "same",
            "text": "temporally correlated shifts. "
          },
          {
            "kind": "add",
            "text": "These results demonstrate "
          },
          {
            "kind": "same",
            "text": "that "
          },
          {
            "kind": "add",
            "text": "its "
          },
          {
            "kind": "same",
            "text": "sample- and layer-aware control effectively "
          },
          {
            "kind": "add",
            "text": "mitigates error accumulation in "
          },
          {
            "kind": "same",
            "text": "non-stationary continuous streams. "
          },
          {
            "kind": "same",
            "text": "Generalizability across Architectures. To "
          },
          {
            "kind": "add",
            "text": "assess architectural generalizability, we "
          },
          {
            "kind": "same",
            "text": "evaluate "
          },
          {
            "kind": "same",
            "text": "DCF "
          },
          {
            "kind": "add",
            "text": "with "
          },
          {
            "kind": "same",
            "text": "ResNet-18 (RN-18), WideResNet-50 (WRN-50), ResNeXt-50 (RNX-50), ResNet-101 (RN-101), and ViT-B/16. As shown in Table "
          },
          {
            "kind": "add",
            "text": "X, "
          },
          {
            "kind": "same",
            "text": "DCF consistently "
          },
          {
            "kind": "add",
            "text": "achieves the best performance across "
          },
          {
            "kind": "same",
            "text": "all "
          },
          {
            "kind": "add",
            "text": "evaluated backbones. Its effectiveness extends from lightweight ResNet-18 to deeper ResNet-101 and "
          },
          {
            "kind": "same",
            "text": "across "
          },
          {
            "kind": "add",
            "text": "distinct architectural families including WideResNet, ResNeXt, and Vision Transformer, with "
          },
          {
            "kind": "same",
            "text": "particularly pronounced "
          },
          {
            "kind": "add",
            "text": "gains on "
          },
          {
            "kind": "same",
            "text": "ResNet-101 and ViT-B/16, where "
          },
          {
            "kind": "add",
            "text": "several "
          },
          {
            "kind": "same",
            "text": "baselines struggle to maintain stability. "
          },
          {
            "kind": "add",
            "text": "These results demonstrate robust generalizability across model scales and architectures. Cross-Domain Transfer. Online TTA may over-specialize a model to the adaptation stream, thereby reducing its ability to generalize to unseen domains. We therefore evaluate post-adaptation transfer by adapting to a source shift and directly testing on unseen targets without further updates, using synthetic corruptions on ImageNet-C and artistic domains on DomainNet-126. On ImageNet-C (Fig. 11a), DCF achieves the largest average gain over No Adapt, ⟪30.30 \\pm 0.39⟫ points, exceeding AEA (⟪27.95 \\pm 0.05⟫) by ⟪2.35⟫ points. "
          },
          {
            "kind": "same",
            "text": "This "
          },
          {
            "kind": "add",
            "text": "advantage is statistically significant across five matched runs (paired ⟪t⟫-test, ⟪t(4)=14.30⟫, ⟪p=1.39 \\times 10^{-4}⟫), whereas RoTTA exhibits negative transfer on several corruptions. On DomainNet-126 (Fig. 11b), DCF also outperforms DeYO on all Adaptation⟪\\to⟫Evaluation pairs, achieving ⟪61.40\\%⟫ mean accuracy compared with ⟪60.13\\%⟫ (⟪+1.27⟫ points), with a significant advantage across five matched runs (paired ⟪t⟫-test, ⟪t(4)=12.01⟫, ⟪p=2.75 \\times 10^{-4}⟫). Together, these results indicate "
          },
          {
            "kind": "same",
            "text": "that "
          },
          {
            "kind": "add",
            "text": "decoupled "
          },
          {
            "kind": "same",
            "text": "control "
          },
          {
            "kind": "add",
            "text": "preserves representations that remain transferable beyond the adaptation domain. "
          },
          {
            "kind": "same",
            "text": "Hyperparameter Sensitivity. "
          },
          {
            "kind": "add",
            "text": "As shown "
          },
          {
            "kind": "same",
            "text": "in Fig. "
          },
          {
            "kind": "add",
            "text": "12, DCF is generally insensitive to its key hyperparameters. In Fig. 12a, the proposed dynamic CLR consistently outperforms all static retention settings across different ⟪\\tau⟫ "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "same",
            "text": "⟪\\mu⟫"
          },
          {
            "kind": "add",
            "text": ", highlighting "
          },
          {
            "kind": "same",
            "text": "the benefit of "
          },
          {
            "kind": "add",
            "text": "layer-wise adaptive retention. Fig. 12b shows a broad high-accuracy region for ⟪(\\upsilon_{\\mathrm{PCS}},\\upsilon_{\\mathrm{Ent}})⟫. For a new dataset, a practical rule is to start from ⟪\\upsilon_{\\mathrm{PCS}}=0.2⟫ "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "add",
            "text": "⟪\\upsilon_{\\mathrm{Ent}}=0.6\\ln K⟫ and perform only coarse adjustment if necessary, rather than dataset-specific fine tuning. Likewise, performance varies only mildly across ⟪\\lambda⟫ and the frequency range in Fig. 12c. Finally, Fig. 12d shows stable accuracy across ⟪\\varepsilon_{\\mathrm{OT}}⟫ and ⟪N_{\\mathrm{sk}}⟫, suggesting that reliable OT alignment can be achieved with only a few Sinkhorn iterations. Overall, DCF requires little hyperparameter tuning for stable performance. Computational Overhead. As benchmarked on an NVIDIA A100 (Table XI), the full "
          },
          {
            "kind": "same",
            "text": "DCF achieves "
          },
          {
            "kind": "add",
            "text": "⟪43.48\\%⟫ average accuracy with 24.6 GFLOPs, 14,690 MB peak memory, and 5.2 ms/image latency. DCF-Lite reduces computational cost by removing the source/candidate model copies and per-sample gradient computation, retaining gradients only through the clean adaptation branch, and using "
          },
          {
            "kind": "same",
            "text": "a "
          },
          {
            "kind": "add",
            "text": "detached Fourier probe for PSR routing "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "add",
            "text": "transport assignment. With ⟪N_{\\mathrm{sk}}=1⟫, Lite requires only 9.4 GFLOPs and 6,080 MB peak memory, corresponding to reductions of ⟪61.8\\%⟫ and ⟪58.6\\%⟫, respectively, relative to the full model, while reducing latency to 3.19 ms/image. It achieves ⟪42.06\\%⟫ accuracy, only ⟪1.42⟫ points below full DCF and ⟪3.16⟫ points above "
          },
          {
            "kind": "same",
            "text": "SAR "
          },
          {
            "kind": "add",
            "text": "(⟪38.90\\%⟫), providing a favorable accuracy–efficiency trade-off."
          }
        ]
      }
    },
    {
      "title": "Conclusions",
      "originalPage": 12,
      "revisedPage": 12,
      "before": "This paper reveals that the instability of test-time adaptation under temporally correlated shifts stems from a homogeneous treatment of intrinsically heterogeneous target evidence and layer-wise drift. To address this, we propose DCF, which decouples sample routing, subset-specific sample-side adaptation, and layer-aware parameter stabilization. By separating the routing decision from the adaptation objective, constraining confident but shortcut-driven updates, and repairing target geometry via optimal transport, DCF mitigates the confirmation bias that typically drives model collapse. Extensive evaluations show that DCF effectively halts the compounding errors that plague existing TTA methods in long-horizon deployment streams.",
      "after": "Our analysis suggests that the instability of test-time adaptation under temporally correlated shifts is linked to a coupled sample–layer feedback process involving heterogeneous target evidence and layer-wise drift. To address this, we propose DCF, which decouples sample routing, subset-specific sample-side adaptation, and curvature-aware layer retention. By screening shortcut-sensitive evidence, reusing routed-away samples for optimal-transport geometry repair, and selectively retaining candidate updates across layers, DCF mitigates the error-amplifying feedback loop. Extensive evaluations show that DCF consistently improves test-time robustness and avoids the late-stage collapse observed in existing TTA methods in long-horizon deployment streams.",
      "diff": {
        "original": [
          {
            "kind": "del",
            "text": "This paper reveals "
          },
          {
            "kind": "same",
            "text": "that the instability of test-time adaptation under temporally correlated shifts "
          },
          {
            "kind": "del",
            "text": "stems from "
          },
          {
            "kind": "same",
            "text": "a "
          },
          {
            "kind": "del",
            "text": "homogeneous treatment of intrinsically "
          },
          {
            "kind": "same",
            "text": "heterogeneous target evidence and layer-wise drift. To address this, we propose DCF, which decouples sample routing, subset-specific sample-side adaptation, and "
          },
          {
            "kind": "del",
            "text": "layer-aware parameter stabilization. "
          },
          {
            "kind": "same",
            "text": "By "
          },
          {
            "kind": "del",
            "text": "separating the routing decision from the adaptation objective, constraining confident but shortcut-driven updates, "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "del",
            "text": "repairing target geometry via optimal transport, "
          },
          {
            "kind": "same",
            "text": "DCF mitigates the "
          },
          {
            "kind": "del",
            "text": "confirmation bias that typically drives model collapse. "
          },
          {
            "kind": "same",
            "text": "Extensive evaluations show that DCF "
          },
          {
            "kind": "del",
            "text": "effectively halts "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "del",
            "text": "compounding errors that plague "
          },
          {
            "kind": "same",
            "text": "existing TTA methods in long-horizon deployment streams."
          }
        ],
        "revised": [
          {
            "kind": "add",
            "text": "Our analysis suggests "
          },
          {
            "kind": "same",
            "text": "that the instability of test-time adaptation under temporally correlated shifts "
          },
          {
            "kind": "add",
            "text": "is linked to "
          },
          {
            "kind": "same",
            "text": "a "
          },
          {
            "kind": "add",
            "text": "coupled sample–layer feedback process involving "
          },
          {
            "kind": "same",
            "text": "heterogeneous target evidence and layer-wise drift. To address this, we propose DCF, which decouples sample routing, subset-specific sample-side adaptation, and "
          },
          {
            "kind": "add",
            "text": "curvature-aware layer retention. "
          },
          {
            "kind": "same",
            "text": "By "
          },
          {
            "kind": "add",
            "text": "screening shortcut-sensitive evidence, reusing routed-away samples for optimal-transport geometry repair, "
          },
          {
            "kind": "same",
            "text": "and "
          },
          {
            "kind": "add",
            "text": "selectively retaining candidate updates across layers, "
          },
          {
            "kind": "same",
            "text": "DCF mitigates the "
          },
          {
            "kind": "add",
            "text": "error-amplifying feedback loop. "
          },
          {
            "kind": "same",
            "text": "Extensive evaluations show that DCF "
          },
          {
            "kind": "add",
            "text": "consistently improves test-time robustness and avoids "
          },
          {
            "kind": "same",
            "text": "the "
          },
          {
            "kind": "add",
            "text": "late-stage collapse observed in "
          },
          {
            "kind": "same",
            "text": "existing TTA methods in long-horizon deployment streams."
          }
        ]
      }
    }
  ]
};
